const quotes = [
    {
        quote: "May your choices reflect your hopes, not your fears."
       ,author: "Nelson Mandela"
    }
   ,{
        quote: "In all things it is better to hope than to despair."
       ,author: "Johann Wolfgang von Goethe"
    }
   ,{
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up."
       ,author: "Thomas Edison"
    }
   ,{
        quote: "Learn from yesterday, live for today, hope for tomorrow."
       ,author: "Albert Einstein"
    }
   ,{
        quote: "Let your hopes, not your hurts, shape your future."
       ,author: "Robert H. Schuller"
    }
   ,{
        quote: "Challenge is what makes men. It will be the end when men stop looking for new challenges."
       ,author: "Edmund Hillary"
    }
   ,{
        quote: "Whether we want them or not, the new year will bring new challenges; whether we seize them or not, the new year will bring new opportunities."
       ,author: "Michael Josephson"
    }
   ,{
        quote: "Though no one can go back and make a brand new start, anyone can start from now and make a brand new strategy."
       ,author: "Marcus Aurelius"
    }
   ,{
        quote: "Take life one day at a time because every day is a different day with new challenges."
       ,author: "Penny Streeter"
    }
   ,{
        quote: "I am always doing what I cannot do yet, in order to learn how to do it."
       ,author: "Vincent Van Gogh"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysquote.quote;
author.innerText = todaysquote.author;