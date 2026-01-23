// in js, when a dom element triggers any event the "this" refers to the DOM element itself that called the event

function handleClick(event: Event) {
  this.disabled = true;
} // Err

function handleClickCorrectly(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
} // Ok

// this here is not a second argument, it's a special argument

const buttonElement = document.getElementsByTagName("button");
const boundHandler = handleClickCorrectly.bind(buttonElement);
