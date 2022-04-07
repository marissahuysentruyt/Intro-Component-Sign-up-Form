// each input cannot be empty
// the email has to be a valid email
// the form needs to check the validation and inputs when the button is clicked
// if there is invalid DataTransfer, change visibility of span and error icon, border width

//gather all the inputs and store as an array
let inputs = document.querySelectorAll("input");
//change from a NodeList to an array
inputs = Array.from(inputs)

//add class input, to each item in the inputs array
// inputs.forEach((item) => {
//     item.classList.add("input");
// })

// //validate and check for empty inputs
// const checkInputs = () => {
//     //for each input in the array...
//    for(input in inputs) {
//        //if the input's value is blank
//     if(input.value === "") {
//         //change the styles
//         inputs.indexOf(input).style.border = "2px solid hsl(0, 100%, 74%)";
//         inputs.indexOf(input).style.color = "hsl(0, 100%, 74%)";
//     } else {
//         console.log("input looks fine")
//     }
//    }
//    return input;
// }

// // checkInputs();

// // define errorIcons
// const errorIcons = Array.from(document.querySelectorAll("img"));
// // for each errorIcon...
// errorIcons.forEach(errorIcon => {
//     // if the input index is the same as the errorIcon index
//     let i = inputs.indexOf()
//     if(inputs[i] === errorIcons[i]) {
//         // log the index number
//         console.log(`the error index that matches is ${errorIcons.indexOf(errorIcon)}`);
//         // change this errorIcon to visible
//         errorIcons[errorIcons.indexOf(errorIcon)].style.visibility = "visible";
        
//     } 
// })

// //define spans
// const spans = Array.from(document.querySelectorAll(".error-spans"));
// // for each span...
// spans.forEach(span => {
//     // if the input index is the same as the span index
//     let i = inputs.indexOf()

//     if(inputs[i] === spans[i]) {
//         // log the index number
//         console.log(`the span index that matches is ${spans.indexOf(span)}` );
//         // change this span to visible
//         spans[spans.indexOf(span)].style.visibility = "visible";
//     } 
// })

const button = document.querySelector("button");
//add the click event listener to the button
button.addEventListener("click", function(event) {
    //run checkInputs when clicked;
    console.log("submit button clicked")
    checkInputs();

})
