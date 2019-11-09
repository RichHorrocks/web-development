const url = '../docs/pdf.pdf';

let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null;

const scale = 1,
  canvas = document.querySelector('#pdf-render'),
  ctx = canvas.getContext('2d');

// Render the page.
const renderPage = num => {
  pageIsRendering = true;

  // Get page.
  pdfDoc.getPage(num).then(page => {
    // Set scale.
    const viewport = page.getViewport({ scale: scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderCtx = {
      canvasContext: ctx,
      viewport
    };

    page.render(renderCtx).promise.then(() => {
      pageIsRendering = false;

      if (pageNumIsPending != null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
      }
    });

    // Output current page.
    document.querySelector('#page-num').textContent = num;
  });
};

// Check for pages rendering.
const queueRenderPage = num => {
  if (pageIsRendering) {
    pageNumIsPending = num;
  } else {
    renderPage(num);
  }
};

// Show previous page.
const showPrevPage = () => {
  if (pageNum === 1) {
    return;
  }

  pageNum--;
  queueRenderPage(pageNum);
};

const showNextPage = () => {
  if (pageNum === pdfDoc.numPages) {
    return;
  }

  pageNum++;
  queueRenderPage(pageNum);
};

// Get the document.
pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    document.querySelector('#page-count').textContent = pdfDoc.numPages;
    renderPage(pageNum);
  })
  .catch(err => {
    // Display error.
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);
    // Remove top bar.
    document.querySelector('.top-bar').style.display = 'none';
  });

// Button events.
document.getElementById('prev-page').addEventListener('click', showPrevPage);
document.getElementById('next-page').addEventListener('click', showNextPage);
