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



