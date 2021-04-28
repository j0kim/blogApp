let postBtn = document.querySelector("#btnPost") as HTMLButtonElement;
let postContainer = document.querySelector('#post-container') as HTMLDivElement;

// Create a new div element when the post button is clicked

const newElement = () => {
    let newDiv = document.createElement('div');
    let newP = document.createElement('p');
    // let newP2 = document.createElement('p');
    // let newI = document.createElement('i');
    // newI.classList.add("fas", "fa-trash");
    let userMsg = document.querySelector("#message") as HTMLInputElement;
    let postMsg = document.createTextNode(userMsg.value);
    newP.appendChild(postMsg);
    // newP2.appendChild(newI);
    newDiv.appendChild(newP);
    // newDiv.appendChild(newP2);
    newDiv.classList.add("post");
    if (postMsg.toString() === "") {
        alert("Please enter something to post!");
    } else {
        postContainer.appendChild(newDiv);
    }
};

postBtn.addEventListener('click', newElement, false);

