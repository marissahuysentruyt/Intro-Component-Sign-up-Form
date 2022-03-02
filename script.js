// each input cannot be empty
// the email has to be a valid email
// the form needs to check the validation and inputs when the button is clicked
// if there is invalid DataTransfer, change visibility of span and error icon, border width

// create variables to target the form itself, each input field, submit button, the error icons and error messages, as well as an array of the inputs to loop through
let form = document.querySelector("form")[0];
let firstName = document.querySelector(".input-firstname").value;
let lastName = document.querySelector(".input-lastname").value;
let email = document.querySelector(".input-email").value;
let password = document.querySelector(".input-password").value;
const button = document.querySelector("button");
const errorIcon = Array.from(document.querySelectorAll("img"));
const span = Array.from(document.querySelectorAll(".error-spans"));
const inputs = Array.from(document.getElementsByTagName("input"));

// This is copied from the MDN documentation (have no idea what it does)
// As per the HTML5 Specification
// const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


// validateInput should loop through each input FileSystemDirectoryReader, checking to make sure the value of the input isn't an empty string. 
validateInput = () => {
    for(i = 0; i < inputs.length; i++) {
        //feel like I should be able to do all of this with a forEach loop, checking if the index from inputs, errorIcon and span all match, then display the errorIcon and span with the same index number

        //could this be a situation for switch/case syntax?
        if(firstName.length === 0) {
            errorIcon[0].style.visibility = "visible";
            span[0].style.visibility = "visible";
            inputs[0].style.border = "2px solid hsl(0, 100%, 74%)";
            inputs[0].style.color = "hsl(0, 100%, 74%)";
        } else {
            console.log("first name saved")
        }
        if(lastName.length === 0) {
            errorIcon[1].style.visibility = "visible";
            span[1].style.visibility = "visible";
            inputs[1].style.border = "2px solid hsl(0, 100%, 74%)";
            inputs[1].style.color = "hsl(0, 100%, 74%)";
        } else {
            console.log("last name saved")
        }
        if(email.length === 0) {
            errorIcon[2].style.visibility = "visible";
            span[2].style.visibility = "visible";
            inputs[2].style.border = "2px solid hsl(0, 100%, 74%)";
            inputs[2].style.color = "hsl(0, 100%, 74%)";
        } else {
            console.log("email saved")
        }
        if(password.length === 0) {
            errorIcon[3].style.visibility = "visible";
            span[3].style.visibility = "visible";
            inputs[3].style.border = "2px solid hsl(0, 100%, 74%)";
            inputs[3].style.color = "hsl(0, 100%, 74%)";
        } else {
            console.log("password saved")
        }
        }

        console.log("validated information")

    };

// once submitted, run validateInput
button.addEventListener("click", function(event) {
    validateInput();
}) 

    

// alert("Some inputs are invalid")

//start with email
// submit.addEventListener("click", function(event.target) {

// })


// Code example from MDN
// const form  = document.getElementsByTagName('form')[0];
// const email = document.getElementById('mail');

// // The following is a trick to reach the next sibling Element node in the DOM
// // This is dangerous because you can easily build an infinite loop.
// // In modern browsers, you should prefer using element.nextElementSibling
// let error = email;
// while ((error = error.nextSibling).nodeType != 1);

// // As per the HTML5 Specification
// const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// // Many legacy browsers do not support the addEventListener method.
// // Here is a simple way to handle this; it's far from the only one.
// function addEvent(element, event, callback) {
//   let previousEventCallBack = element["on"+event];
//   element["on"+event] = function (e) {
//     const output = callback(e);

//     // A callback that returns `false` stops the callback chain
//     // and interrupts the execution of the event callback.
//     if (output === false) return false;

//     if (typeof previousEventCallBack === 'function') {
//       output = previousEventCallBack(e);
//       if(output === false) return false;
//     }
//   }
// };

// // Now we can rebuild our validation constraint
// // Because we do not rely on CSS pseudo-class, we have to
// // explicitly set the valid/invalid class on our email field
// addEvent(window, "load", function () {
//   // Here, we test if the field is empty (remember, the field is not required)
//   // If it is not, we check if its content is a well-formed e-mail address.
//   const test = email.value.length === 0 || emailRegExp.test(email.value);

//   email.className = test ? "valid" : "invalid";
// });

// // This defines what happens when the user types in the field
// addEvent(email, "input", function () {
//   const test = email.value.length === 0 || emailRegExp.test(email.value);
//   if (test) {
//     email.className = "valid";
//     error.textContent = "";
//     error.className = "error";
//   } else {
//     email.className = "invalid";
//   }
// });

// // This defines what happens when the user tries to submit the data
// addEvent(form, "submit", function () {
//   const test = email.value.length === 0 || emailRegExp.test(email.value);

//   if (!test) {
//     email.className = "invalid";
//     error.textContent = "I expect an e-mail, darling!";
//     error.className = "error active";

//     // Some legacy browsers do not support the event.preventDefault() method
//     return false;
//   } else {
//     email.className = "valid";
//     error.textContent = "";
//     error.className = "error";
//   }
// });