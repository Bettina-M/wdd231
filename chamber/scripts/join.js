/*use of index as a parementer to ensure the right
modal is opened and closed*/
const showButton = document.querySelectorAll(".show-more");
const displayModal = document.querySelectorAll(".dialog");
const hideButton = document.querySelectorAll('.close-modal')

showButton.forEach((button, index) =>{
    button.addEventListener('click',()=>{
        displayModal[index].showModal();
    });
});

hideButton.forEach((button, index)=>{
    button.addEventListener('click', ()=>{
        displayModal[index].close();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const timestamp = new Date().toISOString();

    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = timestamp;
    }
});