function subscribe() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email adress?");
  alert("Hello " + name + ". We'll be in contact!");

  let button = document.querySelector("button");
  button.innerHTML = "Thanks for subscribing, " + name + "!";
}

let subscribeButton = document.querySelector("button");
subscribeButton.addEventListener("click", subscribe);
