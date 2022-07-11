// each input cannot be empty
// the email has to be a valid email
// the form needs to check the validation and inputs when the button is clicked
// if there is invalid DataTransfer, change visibility of span and error icon, border width

//gather all the inputs and store as an array
// let firstName = document.getElementById("input-firstname")
// let lastName = document.getElementById("input-lastname")
// let email = document.getElementById("input-email")
// let password = document.getElementById("input-password")

let inputs = Array.from(document.querySelectorAll("input"))

// This is copied from the MDN documentation
// As per the HTML5 Specification
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

displayErrorIcons = () => {
    for(i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            let errorIcon = document.createElement("img");
            errorIcon.setAttribute("src", "images/icon-error.svg");
            errorIcon.setAttribute("alt", "Error!");
            errorIcon.setAttribute("class", "error")
            
            inputs[i].insertAdjacentElement('afterEnd', errorIcon);
            console.log(`something's missing at ${inputs[i]}`)
        } else {
            inputs[i].style.color = "hsl(248, 32%, 49%)";
            inputs[i].style.border = "1px solid hsl(246, 25%, 77%);";
            // errorSpan.classList.remove("error")
            console.log("input is good")
        }
    }
}


displayErrorSpans = () => {
    for(i = 0; i < inputs.length; i++) {
        let errorSpan = document.createElement("span");

        if (inputs[i].value === "") {
            errorSpan.setAttribute("class", "error")
            errorSpan.innerText = "Don't leave this empty!"
            
            inputs[i].insertAdjacentElement('afterEnd', errorSpan);
            inputs[i].style.color = "hsl(0, 100%, 74%)";
            inputs[i].style.border = "2px solid hsl(0, 100%, 74%)";
            console.log(`something's missing at ${inputs[i]}`)
        } else {
            inputs[i].style.color = "hsl(248, 32%, 49%)";
            inputs[i].style.border = "1px solid hsl(246, 25%, 77%);";
            // errorSpan.classList.remove("error")
            console.log("input is good")
        }
    }
}

checkInputs = () => {
            displayErrorSpans();
            displayErrorIcons();  
    
}


const button = document.querySelector("button");
//add the click event listener to the button
button.addEventListener("click", function(event) {
    
    //prevents the form from reloading the page
    event.preventDefault();
    console.log("submit button clicked")
    //run checkInputs when clicked;
    checkInputs();

    //change button text so people know it worked
    button.innerText = "THANK YOU!"

})

let form = document.querySelector("form");
form.reset();
