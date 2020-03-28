



// GET A BUNCH OF DOM ELEMENTS

// go get html elements by their ids

// we'll need all the inputs to get the words FROM the user
const holiday1Input = document.getElementById('holiday-input');
const holiday1Span = document.getElementById('holiday-span');

const verb1Input = document.getElementById('holiday-input');
const verb1Span = document.getElementById('holiday-span');

const pluralNoun1Input = document.getElementById('holiday-input');
const pluralNoun1Span = document.getElementById('holiday-span');

const activeVerb1Input = document.getElementById('holiday-input');
const activeVerb1Span = document.getElementById('holiday-span');

const activeVerb2Input = document.getElementById('holiday-input');
const activeVerb2Span = document.getElementById('holiday-span');

const noun2Input = document.getElementById('holiday-input');
const noun2Span = document.getElementById('holiday-span');

const noun3Input = document.getElementById('holiday-input');
const noun3Span = document.getElementById('holiday-span');

const bodyOfWaterType1Input = document.getElementById('holiday-input');
const bodyOfWaterType1Span = document.getElementById('holiday-span');

const happyVerb1Input = document.getElementById('holiday-input');
const happyVerb1Span = document.getElementById('holiday-span');

const WeatherRelatedVerb1Input = document.getElementById('holiday-input');
const WeatherRelatedVerb1Span = document.getElementById('holiday-span');

const color1Input = document.getElementById('holiday-input');
const color1Span = document.getElementById('holiday-span');

const noun4Input = document.getElementById('holiday-input');
const noun4Span = document.getElementById('holiday-span');

function createMadLib() {
    const holiday1InputValue = holiday1Input.value;
    const verb1InputValue = verb1Input.value;
    const pluralNoun1InputValue = noun1Input.value;
    const activeVerb1InputValue = verb2Input.value;
    const activeVerb2InputValue = verb3Input.value;
    const noun2InputValue = noun2Input.value;
    const noun3InputValue = noun3Input.value;
    const bodyOfWaterType1InputValue = bodyOfWaterType1Input.value;
    const happyVerb1InputValue = happyVerb1Input.value;
    const weatherRelatedVerb1InputValue = weatherRelatedVerb1Input.value;
    const color1InputValue = color1Input.value;
    const noun4InputValue = noun4Input.value;

    holiday1Span.textContent = holiday1InputValue;
    verb1Span.textContent = verb1InputValue;
    pluralNoun1Span.textContent = pluralNoun1InputValue;
    activeVerb1Span.textContent = activeVerb1InputValue;
    activeVerb2Span.textContent = activeVerb2InputValue;
    noun2Span.textContent = noun2InputValue;
    noun3Span.textContent = noun3InputValue;
    bodyOfWaterType1Input.textContent = bodyOfWaterType1InputValue;
    happyVerb1Span.textContent = happyVerb1InputValue;
    weatherRelatedVerb1Span.textContent = weatherRelatedVerb1InputValue;
    color1Span.textContent = color1InputValue;
    noun4Span.textContent = noun4InputValue;

    console.log('christmas', holiday1InputValue);
}


// we'll need spans to put the WORDS INTO the madlib
const riverSpan = document.getElementById('river-name-span');
// we'll need the container that holds the mad lib

// we'll need the container that holds all the inputs

// we'll need button so we can add the event listener
const myButton = document.getElementById('button');

// ADD EVENT LISTENERS

function putAnswersIn() {
    // this event listener should . . .
    // GET the value of the inputs
    const riverInputValue = riverInput.value;
    // use the input values to SET the value of our spans
    console.log('something', riverInputValue);
    // hide the input container
    inputContainer.style.visibility = 'hidden';
    // reveal the mad lib container
    madlibContainer.style.visibility = 'visible';

}

// add event listener to the button on the CLICK event
myButton.addEventListener('click', createMadLib);