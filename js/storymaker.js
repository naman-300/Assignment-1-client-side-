// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById("choosenNoun1");
const chosenVerb = document.getElementById("choosenVerb");
const chosenAdjective = document.getElementById("choosenAdjective");
const chosenNoun2 = document.getElementById("choosenNoun2");
const chosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyOutput = document.getElementById("story");

// Adding a Reset button
const resetButton = document.getElementById("reset");

// Making the arrays
const nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher" , "The elephant","The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let nounCount = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    chosenNoun1.innerText = nouns[nounCount++ % nouns.length];
}

function verb_on_click() {
    chosenVerb.innerText = verbs[verbCount++ % verbs.length];
}

function adjective_on_click() {
    chosenAdjective.innerText = adjectives[adjectiveCount++ % adjectives.length];
}

function noun2_on_click() {
    chosenNoun2.innerText = nouns2[noun2Count++ % nouns2.length];
}

function setting_on_click() {
    chosenSetting.innerText = places[settingCount++ % places.length];
}

function playback_on_click() {
    const story = ` ${chosenNoun1.innerText} ${chosenVerb.innerText}   ${chosenAdjective.innerText} ${chosenNoun2.innerText} ${chosenSetting.innerText}.`;
    storyOutput.innerText = story;
}

function random_on_click() {
    const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    const randomSetting = places[Math.floor(Math.random() * places.length)];
    
    const story = ` ${randomNoun1} ${randomVerb}  ${randomAdjective} ${randomNoun2} ${randomSetting}.`;
    storyOutput.innerText = story;
}

function reset_on_click() {
    // Reset all chosen words
    chosenNoun1.innerText = "";
    chosenVerb.innerText = "";
    chosenAdjective.innerText = "";
    chosenNoun2.innerText = "";
    chosenSetting.innerText = "";

    // Reset story output
    storyOutput.innerText = "";
}


/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
resetButton.addEventListener("click", reset_on_click);

