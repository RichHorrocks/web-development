const canva = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

// Add filters and effects.
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        if (e.target.classList.contains('brightness-add')) {
            Caman('#canvas', img, function() {
                this.brightness(5).render();
            });
        } else if (e.target.classList.contains('brightness-remove')) {
            Caman('#canvas', img, function() {
                this.brightness(-5).render();
            });
        } else if (e.target.classList.contains('contrast-add')) {
            Caman('#canvas', img, function() {
                this.contrast(5).render();
            });
        } else if (e.target.classList.contains('contrast-remove')) {
            Caman('#canvas', img, function() {
                this.contrast(-5).render();
            });
        } else if (e.target.classList.contains('saturation-add')) {
            Caman('#canvas', img, function() {
                this.saturation(5).render();
            });
        } else if (e.target.classList.contains('saturation-remove')) {
            Caman('#canvas', img, function() {
                this.saturation(-5).render();
            });
        } else if (e.target.classList.contains('vibrance-add')) {
            Caman('#canvas', img, function() {
                this.vibrance(5).render();
            });
        } else if (e.target.classList.contains('vibrance-remove')) {
            Caman('#canvas', img, function() {
                this.vibrance(-5).render();
            });
        } else if (e.target.classList.contains('vintage-add')) {
            Caman('#canvas', img, function() {
                this.vintage().render();
            });
        } else if (e.target.classList.contains('lomo-add')) {
            Caman('#canvas', img, function() {
                this.lomo().render();
            });
        } else if (e.target.classList.contains('clarity-add')) {
            Caman('#canvas', img, function() {
                this.clarity().render();
            });
        } else if (e.target.classList.contains('sincity-add')) {
            Caman('#canvas', img, function() {
                this.sinCity().render();
            });
        } else if (e.target.classList.contains('crossprocess-add')) {
            Caman('#canvas', img, function() {
                this.crossProcess().render();
            });
        } else if (e.target.classList.contains('pinhole-add')) {
            Caman('#canvas', img, function() {
                this.pinhole().render();
            });
        } else if (e.target.classList.contains('nostalgia-add')) {
            Caman('#canvas', img, function() {
                this.nostalgia().render();
            });
        } else if (e.target.classList.contains('hermajesty-add')) {
            Caman('#canvas', img, function() {
                this.herMajesty().render();
            });
        }
    }
});

// Revert filters.
revertBtn.addEventListener('click', (e) => {
    Caman('#canvas', img, function() {
        this.revert();
    });
});

// Upload file.
uploadFile.addEventListener('change', (e) => {
    // Get the file.
    const file = document.getElementById('upload-file').files[0];

    // Initialise the FileReader API.
    const reader = new FileReader();

    if (file) {
        fileName = file.name;
        // Read the data as a URL.
        reader.readAsDataURL(file);
    }

    // Add the image to the canvas.
    reader.addEventListener('load', () => {
        // Create the image.
        img = new Image();
        img.src = reader.result;
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.removeAttribute('data-caman-id');
        }
    }, false);
});

// Download event.
downloadBtn.addEventListener('click', (e) => {
    // Get file extension.
    const fileExtension = fileName.slice(-5);

    // Initialise new filename.
    let newFileName;

    // Check image type.
    if (fileExtension === '.jpeg' || fileExtension === '.jpg') {
        newFileName = fileName.substring(0, fileName.length - 5) + '-edited.jpg';
    }

    // Call download.
    download(canvas, newFileName);
});

function download(canvas, filename) {
    // Initialise and event.
    let e;
    // Create link.
    const link = document.createElement('a');
    // Set some properties.
    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', 0.8);
    // New mouse event.
    e = new MouseEvent('click');
    link.dispatchEvent(e);
}
