// each input cannot be empty
// the email has to be a valid email
// the form needs to check the validation and inputs when the button is clicked
// if there is invalid DataTransfer, change visibility of span and error icon, border width

// create variables to target the form itself, each input field, submit button, the error icons and error messages, as well as an array of the inputs to loop through
let form = document.querySelector("form");
let firstName = document.querySelector(".input-firstname");
let lastName = document.querySelector(".input-lastname");
let email = document.querySelector(".input-email");
let password = document.querySelector(".input-password");
const button = document.querySelector("button");
const errorIcons = Array.from(document.querySelectorAll("img"));
const spans = Array.from(document.querySelectorAll(".error-spans"));
const inputs = Array.from(document.getElementsByTagName("input"));


// This is copied from the MDN documentation
// As per the HTML5 Specification
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


//actively logs the value of the input
// firstName.addEventListener("keyup", function(event) {
//     console.log(firstName.value);
//     firstName.style.backgroundColor = "gray";
// })

// function to check if inputs are empty and their errors and spans match
checkInputs = () => {
    inputs.forEach(input => {
        // log the value for each input
        console.log(input.value);
        // if the input field is blank...
        if(input.value.length === 0) {
            // log the index of that input field
            console.log(inputs.indexOf(input));

            inputs[inputs.indexOf(input)].style.border = "2px solid hsl(0, 100%, 74%)";
            inputs[inputs.indexOf(input)].style.color = "hsl(0, 100%, 74%)";

            // for each errorIcon...
            errorIcons.forEach(errorIcon => {
                // if the input index is the same as the errorIcon index
                if(inputs.indexOf(input) === errorIcons.indexOf(errorIcon)) {
                    // log the index number
                    console.log(`the error index that matches is ${errorIcons.indexOf(errorIcon)}`);
                    // change this errorIcon to visible
                    errorIcons[errorIcons.indexOf(errorIcon)].style.visibility = "visible";
                    
                } else {
                    errorIcon.style.visibility = "hidden"
                }
            })

            // for each span...
            spans.forEach(span => {
                // if the input index is the same as the span index
                if(inputs.indexOf(input) === spans.indexOf(span)) {
                    // log the index number
                    console.log(`the span index that matches is ${spans.indexOf(span)}` );
                    // change this span to visible
                    spans[spans.indexOf(span)].style.visibility = "visible";
                } else {
                    span.style.visibility = "hidden"
                }
            })
        }

        else {
        input.style.border = "1px solid hsl(246, 25%, 77%)";
        input.style.color = "hsl(248, 32%, 49%)";
        
        }
    })

};



// once the "claim" button is clicked, run checkInputs
button.addEventListener("click", function(event) {
    checkInputs();
    //prevents page reload? how can i get the button to run checkInputs again after more info gets filled out? 
    return false;
}) 

    

// alert("Some inputs are invalid")

//start with email
// submit.addEventListener("click", function(event.target) {

// })

// Code example from MDN (just to validate an email address)
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

form.reset();