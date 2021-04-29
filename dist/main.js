"use strict";
let postBtn = document.querySelector("#btnPost");
let postContainer = document.querySelector('#post-container');
// Create a new div element when the post button is clicked
const newElement = () => {
    let newDiv = document.createElement('div');
    let newP = document.createElement('p');
    // let newP2 = document.createElement('p');
    // let newI = document.createElement('i');
    // newI.classList.add("fas", "fa-trash");
    let userMsg = document.querySelector("#message");
    let postMsg = document.createTextNode(userMsg.value);
    newP.appendChild(postMsg);
    // newP2.appendChild(newI);
    newDiv.appendChild(newP);
    // newDiv.appendChild(newP2);
    newDiv.classList.add("post");
    if (userMsg.value === "") {
        alert("Please enter something to post!");
    }
    else {
        postContainer.appendChild(newDiv);
        userMsg.value = "";
    }
};
postBtn.addEventListener('click', newElement, false);
