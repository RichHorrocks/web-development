const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
  token: 'xoxb-376299690660-377575170183-qfFLbHpb8q8VgIXRD1AgaTV7',
  name: 'jokebot',
});

// Start handler.
bot.on('start', () => {
  const params = {
    icon_emoji: ':smiley:',
  };

  bot.postMessageToChannel('general', 'Get ready to rumbleeeee!', params);
});

// Error handler.
bot.on('error', (err) => console.log(err));

// Message handler.
bot.on('message', (data) => {
  if (data.type !== 'message') {
    return;
  }

  handleMessage(data.text);
});

// Respond to data.
function handleMessage(message) {
  if (message.includes(' chucknorris')) {
    chuckJoke();
  } else if (message.includes(' yomomma') || message.includes(' yomoma')) {
    yoMommaJoke();
  } else if (message.includes(' random')) {
    randomJoke();
  } else if (message.includes(' help')) {
    runHelp();
  }
}

// Tell a Chuck Norris joke.
function chuckJoke() {
  axios.get('http://api.icndb.com/jokes/random/')
    .then(res => {
      const joke = res.data.value.joke;

      const params = {
        icon_emoji: ':laughing:',
      };

      bot.postMessageToChannel('general', `Chuck Norris: ${joke}`, params);
    });
}

// Tell a Yo Mana joke.
function yoMommaJoke() {
  axios.get('http://api.yomomma.info/')
    .then(res => {
      const joke = res.data.joke;

      const params = {
        icon_emoji: ':laughing:',
      };

      bot.postMessageToChannel('general', `Yo Mama: ${joke}`, params);
    });
}

// Tell a random joke.
function randomJoke() {
  const rand = Math.floor(Math.random() * 2) + 1;

  if (rand === 1) {
    chuckJoke();
  } else {
    yoMommaJoke();
  }
}

// Show help text.
function runHelp() {
  const params = {
    icon_emoji: ':question:',
  };

  bot.postMessageToChannel(
    'general',
    `Type @jokebot with either 'chuchnorris', 'yomomma', or 'random' to get a joke`,
    params);
}
