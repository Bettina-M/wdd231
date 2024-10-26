import { showMenu } from "./menu.js";

document.addEventListener("DOMContentLoaded", async ()=>{
    try{
            const categories = await showMenu();
            console.log('Fetched categories:', categories);
                if (categories){
                fillForm(categories);
                }
    
            let quantity = document.querySelector('#quantity');
            let increase = document.querySelector("#increaseBtn");
            let decrease = document.querySelector("#decreaseBtn");

            decrease.addEventListener('click', ()=>{
                if(quantity.value>1){
                    quantity.value--;
                }
            });

            increase.addEventListener('click', ()=>{
                quantity.value++;
            });
        }catch (error) {
            console.log("Error fetching menu data:", error.message);
        }
})

function fillForm(categories){
    const food = document.querySelector("#food");
    categories.forEach(category => {
        category.items.forEach(item =>{
            let option = document.createElement("option");
            option.value = item.name;
            option.innerHTML = `${item.name} - ${item.price}`;
            food.appendChild(option);
        });
    });
}

//Function to display the number of visits to the webpage//


function currentTime(){
    return new Date().getTime();
}

function showLastVisit(){

    const lastVisit = localStorage.getItem('lastVisit');
    const timeNow = currentTime();
    const modal = document.getElementById("visitModal");
    const modalContent = document.getElementById("visitMessage");
    let message = "";

    if (lastVisit == null){
        const previousTime = parseInt(lastVisit, 10);
        const difference = timeNow - previousTime;

        const days = Math.floor(difference/86400000);

        const hours = Math.floor(difference/3600000);


        if (days>1){
            message = `Welcome back, you last visited ${days} days ago`;
        }
        else if(days < 1 && hours< 24) {
            message = `Back so soon! Awesome!`;
        }

        else{
            message = `Welcome! Let us know if you have any questions.`
        }
        if (message) {
            modalContent.innerHTML = message;
            modal.style.display = 'block'; 
        }
       localStorage.setItem('lastVisit', timeNow.toString());
    }

    const closeModal = document.getElementById("closeModal");
    closeModal.addEventListener("click", () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", showLastVisit);

