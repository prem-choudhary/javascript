function fetchRandomJoke() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        "Why don't scientists trust atoms? Because they make up everything!",
      );
    }, 1000);
  });
}

function translateJoke(joke) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        "Hindi: Scientists atoms par trust kyu nahi karte? Kyunki woh sab kuch bana dete hain!",
      );
    }, 1000);
  });
}

function postJoke(translatedJoke) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Posting:", translatedJoke);
      resolve();
    }, 1000);
  });
}

fetchRandomJoke()
  .then((joke) => {
    console.log(joke);
    return translateJoke(joke);
  })
  .then((translatedJoke) => {
    console.log(translatedJoke);
    return postJoke(translatedJoke);
  })
  .then(() => {
    console.log("Joke posted successfully!");
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });
