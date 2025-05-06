//object of array
const quotes = {
  science: [
    "The important thing is not to stop questioning. — Albert Einstein",
    "Science is the poetry of reality. — Richard Dawkins",
    "Somewhere, something incredible is waiting to be known. — Carl Sagan",
    "Science knows no country, because knowledge belongs to humanity. — Louis Pasteur",
    "The good thing about science is that it's true whether or not you believe in it. — Neil deGrasse Tyson",
    "Equipped with his five senses, man explores the universe around him and calls the adventure science. — Edwin Hubble",
    "The science of today is the technology of tomorrow. — Edward Teller",
    "Research is what I’m doing when I don’t know what I’m doing. — Wernher von Braun",
    "Science is a way of thinking much more than it is a body of knowledge. — Carl Sagan",
    "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom. — Isaac Asimov",
  ],
  life: [
    "Life is what happens when you're busy making other plans. — John Lennon",
    "In the end, we only regret the chances we didn’t take.",
    "Life isn’t about finding yourself. It’s about creating yourself. — George Bernard Shaw",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. — Buddha",
    "Life is short, and it is up to you to make it sweet. — Sarah Louise Delany",
    "Difficulties in life are intended to make us better, not bitter. — Dan Reeves",
    "Life is really simple, but we insist on making it complicated. — Confucius",
    "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing. — George Bernard Shaw",
    "The purpose of our lives is to be happy. — Dalai Lama",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. — Albert Einstein",
  ],
  education: [
    "Education is the most powerful weapon which you can use to change the world. — Nelson Mandela",
    "The roots of education are bitter, but the fruit is sweet. — Aristotle",
    "An investment in knowledge pays the best interest. — Benjamin Franklin",
    "The purpose of education is to replace an empty mind with an open one. — Malcolm Forbes",
    "Education is not preparation for life; education is life itself. — John Dewey",
    "The whole purpose of education is to turn mirrors into windows. — Sydney J. Harris",
    "Develop a passion for learning. If you do, you will never cease to grow. — Anthony J. D'Angelo",
    "Intelligence plus character — that is the goal of true education. — Martin Luther King Jr.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. — Mahatma Gandhi",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. — Malcolm X",
  ],
};

//generate random quote
const generateQuoteButton = document.getElementById("generateQuoteButton");
const displayQuote = document.getElementById("display");
generateQuoteButton.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 10);
  const category = document.getElementById("category").value;
  if (category === "science") {
    displayQuote.innerHTML = quotes.science[randomNumber];
  } else if (category === "life") {
    displayQuote.innerHTML = quotes.life[randomNumber];
  } else {
    displayQuote.innerHTML = quotes.education[randomNumber];
  }
});

//next button implementation
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", () => {
  const displayedQuote = displayQuote.innerHTML;
  const category = document.getElementById("category").value;
  if (category === "science") {
    const nextQuote = quotes.science.indexOf(displayedQuote) + 1;
    if (nextQuote > quotes.science.length - 1) {
      return (displayQuote.innerHTML = quotes.science[0]);
    }
    displayQuote.innerHTML = quotes.science[nextQuote];
  } else if (category === "life") {
    const nextQuote = quotes.life.indexOf(displayedQuote) + 1;
    if (nextQuote > quotes.life.length - 1) {
      return (displayQuote.innerHTML = quotes.life[0]);
    }

    displayQuote.innerHTML = quotes.life[nextQuote];
  } else {
    const nextQuote = quotes.education.indexOf(displayedQuote) + 1;
    if (nextQuote > quotes.education.length - 1) {
      return (displayQuote.innerHTML = quotes.education[0]);
    }
    displayQuote.innerHTML = quotes.education[nextQuote];
  }
});

//Previous button implementation
const prevButton = document.getElementById("previous");
prevButton.addEventListener("click", () => {
  const displayedQuote = displayQuote.innerHTML;

  const category = document.getElementById("category").value;

  if (category === "science") {
    const prevQuote = quotes.science.indexOf(displayedQuote) - 1;
    if (prevQuote < 0) {
      return (displayQuote.innerHTML =
        quotes.science[quotes.science.length - 1]);
    }
    displayQuote.innerHTML = quotes.science[prevQuote];
  } else if (category === "life") {
    const prevQuote = quotes.life.indexOf(displayedQuote) - 1;
    if (prevQuote < 0) {
      return (displayQuote.innerHTML = quotes.life[quotes.life.length - 1]);
    }
    displayQuote.innerHTML = quotes.life[prevQuote];
  } else {
    const prevQuote = quotes.education.indexOf(displayedQuote) - 1;
    if (prevQuote < 0) {
      return (displayQuote.innerHTML =
        quotes.education[quotes.education.length - 1]);
    }
    displayQuote.innerHTML = quotes.education[prevQuote];
  }
});

//Font size increment functionality
document.getElementById("plus").addEventListener("click", () => {
  const currentSize = parseInt(displayQuote.style.fontSize);
  const newSize = currentSize + 2 + "px";
  displayQuote.style.fontSize = newSize;
  console.log(newSize);
});

//font size decrement functionality
document.getElementById("minus").addEventListener("click", () => {
  const currentSize = parseInt(displayQuote.style.fontSize);
  const newSize = currentSize - 2 + "px";
  displayQuote.style.fontSize = newSize;
});
