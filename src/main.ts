let postBtn = document.querySelector("#btnPost") as HTMLButtonElement;
let postContainer = document.querySelector('#post-container') as HTMLDivElement;

// Create a new div element when the post button is clicked

const newElement = () => {
    let userMsg = document.querySelector("#message") as HTMLInputElement;
    let postMsg = document.createTextNode(userMsg.value);

    // Create divs to hold the user's posts
    const postDiv = document.createElement('div');
    const textDiv = document.createElement('div');
    const editDiv = document.createElement('div');
    let newP = document.createElement('p');
    postDiv.classList.add("post");
    textDiv.classList.add("postText");
    editDiv.classList.add('editSection');


    // Create update and delete buttons
    const btnUpdate = document.createElement('button');
    const btnDelete = document.createElement('button');
    btnUpdate.innerHTML = '<i class="fas fa-pen"></i>';
    btnDelete.innerHTML = '<i class="fas fa-trash"></i>';



    newP.appendChild(postMsg);
    textDiv.appendChild(newP);
    postDiv.appendChild(textDiv);
    postDiv.appendChild(editDiv);

    editDiv.appendChild(btnUpdate);
    editDiv.appendChild(btnDelete);
    postDiv.appendChild(editDiv);
    if (userMsg.value === "") {
        alert("Please enter something to post!");
    } else {
        postContainer.appendChild(postDiv);
        userMsg.value = "";
    }

    btnDelete.addEventListener('click', function () {
        const parent = this.parentElement;
        const grandParent = parent?.parentElement;
        grandParent?.remove();
    });
};

postBtn.addEventListener('click', newElement, false);

