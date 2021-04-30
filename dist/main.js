"use strict";
const postBtn = document.querySelector("#btnPost");
const postContainer = document.querySelector('#post-container');
const newElement = () => {
    const postTitle = document.querySelector('#post-title');
    const userMsg = document.querySelector("#message");
    const postMsg = document.createTextNode(userMsg.value);
    // Create divs to hold the user's posts
    const postDiv = document.createElement('div');
    const textDiv = document.createElement('div');
    const editDiv = document.createElement('div');
    const postHeading = document.createElement('h3');
    let newP = document.createElement('p');
    postDiv.classList.add("post");
    textDiv.classList.add("postText");
    editDiv.classList.add('editSection');
    // Create update and delete buttons
    const btnUpdate = document.createElement('button');
    const btnDelete = document.createElement('button');
    btnUpdate.innerHTML = '<i class="fas fa-pen"></i>';
    btnDelete.innerHTML = '<i class="fas fa-trash"></i>';
    postHeading.innerHTML = postTitle.value;
    newP.appendChild(postMsg);
    textDiv.appendChild(postHeading);
    textDiv.appendChild(newP);
    postDiv.appendChild(textDiv);
    postDiv.appendChild(editDiv);
    editDiv.appendChild(btnUpdate);
    editDiv.appendChild(btnDelete);
    postDiv.appendChild(editDiv);
    if (userMsg.value === "" || postTitle.value == "") {
        alert("Please enter something to post!");
    }
    else {
        postContainer.appendChild(postDiv);
        userMsg.value = "";
        postTitle.value = "";
    }
    // When the delete button is clicked
    btnDelete.addEventListener('click', function () {
        var _a;
        const grandParent = (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        grandParent === null || grandParent === void 0 ? void 0 : grandParent.remove();
    });
    // When the update button is clicked
    btnUpdate.addEventListener('click', function () {
        var _a;
        const grandParent = (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        const updateDiv = document.createElement('div');
        const updateHeading = document.createElement('h3');
        const updateInput = document.createElement('textarea');
        const saveBtn = document.createElement('button');
        saveBtn.innerHTML = '<i class="fas fa-save"> Save</i>';
        updateHeading.innerHTML = "Make Changes";
        // saveBtn.innerHTML = 'Save';
        updateInput.value = newP.innerHTML;
        updateDiv.classList.add('updateDiv');
        updateInput.classList.add('updateInput');
        updateDiv.appendChild(updateHeading);
        updateDiv.appendChild(updateInput);
        updateDiv.appendChild(saveBtn);
        grandParent === null || grandParent === void 0 ? void 0 : grandParent.appendChild(updateDiv);
        // When the Save button is clicked
        saveBtn.addEventListener('click', function () {
            newP.innerHTML = updateInput.value;
            const saveBtnParent = this.parentElement;
            saveBtnParent === null || saveBtnParent === void 0 ? void 0 : saveBtnParent.remove();
        });
    });
};
postBtn.addEventListener('click', newElement, false);
