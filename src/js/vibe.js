// writing script to change the vibe everytime someone click.
const vibes = [
    " .... and you are awesome",
    " .... have a blessed day",
    " .... and you have a great day",
    " .... and this is so cookie 🍪",
];

// choose a random vibe. new function vibe, using math.floor and random to pull from 
// one of the vibes in the array
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// to display in the browser, using querySelector, selecting the vibe class and appending the message
document.querySelector(".vibe").append(vibe);