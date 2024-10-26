export async function showMenu(){
    try{
        let response = await fetch("data/food.json");
        if (response.ok){
            let data = await response.json();
            data = data.categories;
            console.log(data);
            displayMenu(data);
            return data;
            
        }
        
    } catch (error){
        console.log(error.message);
    }
   
}

function displayMenu(categories){
   const menu =  document.querySelector("#menu");

   categories.forEach(category => {
        const container = document.createElement("div");

        const img = document.createElement("img");
        img.src = category.image_url;
        img.alt = category.name;
        img.style.width = "400px";
        img.style.height ="300px";
        img.loading = "lazy";

        const name = document.createElement("button");
        name.innerHTML = category.name;
        name.classList.add("name-button");

        name.addEventListener("click", ()=> openModal(category));

        container.appendChild(img);
        container.appendChild(name);

        menu.appendChild(container);
   });
}

function openModal(category){
        
    const showModal = document.querySelector(".modal");
        const modalBody = document.querySelector("#modalBody");

        modalBody.innerHTML = "";
        const heading = document.createElement("p");
        heading.innerHTML = category.description;

        const closeButton = document.createElement("button");
        closeButton.innerHTML =`<i class="fa fa-close"></i>`;
        closeButton.classList.add('close-button');
        closeButton.addEventListener('click', () =>{
            showModal.style.display = "none";
        })

        modalBody.appendChild(heading);
        modalBody.appendChild(closeButton);
        showModal.appendChild(modalBody);
        showModal.style.display = "flex";
}
document.addEventListener("DOMContentLoaded", showMenu);


