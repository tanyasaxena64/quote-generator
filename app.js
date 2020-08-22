let quotes = [
    {
        "quote": "Courage is grace under pressure.",
        "author": "Ernest Hemingway"
    },
    {
        "quote": "If you can believe in something great, then you can achieve something great.",
        "author": "Katy Perry"
    },
    {
        "quote": "Just be yourself, there is no one better.",
        "author": "Taylor Swift"
    },
    {
        "quote": "Dreams are made of your potential.",
        "author": "Lilly Singh"
    },
    {
        "quote": "What matters to you defines your mattering.",
        "author": "John Green"
    },
    {
        "quote": "If you dont have any shadows you're not in the light",
        "author": "Lady Gaga"
    },
    {
        "quote": "Some people dream of success, while others wake up and work hard at it.",
        "author": "Mark Zuckerberg"
    },
    {
        "quote": "The most alluring thing a woman can have is confidence.",
        "author": "Beyonce Knowles"
    },
    {
        "quote": "The mind is everything. What you think you become.",
        "author": "Gautama Buddha"
    },
    {
        "quote": "Life isn't about finding yourself. Life is about creating yourself.",
        "author": "George Bernard Shaw"
    }
];

// variables 
const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// event listener

btn.addEventListener('click', getQuote);

function getQuote () {
    let number = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = '<span>"</span>' + quotes[number].quote + '<span>"</span>';

    author.innerHTML = '<span>--</span>' + quotes[number].author;
}