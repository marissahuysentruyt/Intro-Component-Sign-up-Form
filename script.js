// each input cannot be empty
// the email has to be a valid email
// the form needs to check the validation and inputs when the button is clicked
// if there is invalid DataTransfer, change visibility of span and error icon, border width

// create variables to target each Input, the form itself, submit button
const form = document.querySelector("form")[0];
const firstName = document.querySelector(".input-firstname").value;
const lastName = document.querySelector(".input-lastname").value;
const email = document.querySelector(".input-email").value;
const password = document.querySelector(".input-password").value;
let button = document.querySelector("button");
let errorIcon = Array.from(document.querySelectorAll("img"));
let span = Array.from(document.querySelectorAll(".error-spans"));
let inputs = Array.from(document.getElementsByTagName("input"));

// This is copied from the MDN documentation (have no idea what it does)
// As per the HTML5 Specification
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

"use strict";

button.addEventListener("click", function(event) {
    console.log("clicked");
    // console.log(firstName.value, lastName.value, email.value, password.value);

        inputs.forEach(input => {
            if(input[1].value.length === 0) {
                // inputs[0].setAttribute("number", 1);
                inputs[1].style.border = "2px solid hsl(0, 100%, 74%);";
                inputs[1].style.color = "2px solid hsl(0, 100%, 74%);";

                // errorIcon.setAttribute("number", "1");
                errorIcon[1].style.visibility = "visible";

                // span.setAttribute("number", "1");
                span[1].style.visibility = "visible";
            };

            //as long as the index of the input is the same as the errorIcon & span, visibility should be visible
        });
    });
    

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