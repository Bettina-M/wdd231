const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";


const cards = document.getElementById('cards');

const all = document.querySelector("#all");
const idaho = document.querySelector("#idaho");
const nonus = document.querySelector("#nonus");
const ten = document.querySelector("#ten");
const childs = document.querySelector("#childs");
const childl = document.querySelector("#childl");
const old = document.querySelector("#old");

async function getProphetData(filter = 'all'){
    try{
        let response = await fetch(url);

        if(response.ok){
            let data = await response.json();
            //console.table(data.prophets);
            let prophets = data.prophets; 
            

            switch (filter){
                case 'idaho':
                prophets=prophets.filter(prophet =>prophet.birthplace ==='Idaho');
                break;
                case 'nonus':
                prophets=prophets.filter(prophet =>prophet.birthplace ==='England');
                break;
                case 'ten':
                prophets=prophets.filter(prophet =>prophet.length >15);
                break;
                case 'childs':
                prophets=prophets.filter(prophet =>prophet.numofchildren <= 5);
                break;
                case 'child1':
                prophets=prophets.filter(prophet =>prophet.numofchildren >= 10);
                break;
                case 'old':
                prophets=prophets.filter(prophet =>prophet.birthplace ==='Utah');
                break;
                default:
                break; 
            }
            displayprophets(prophets);
        }
    } catch (error) {
        console.log(error.message);
    }
}


const displayprophets = (prophets) =>{
    cards.innerHTML = " ";
    prophets.forEach(prophet => {
       const card = document.createElement('section');
       const fullName = document.createElement("h2");
       const birthDate = document.createElement('p');
       const birthplace = document.createElement('p');
       const portrait = document.createElement("img");
       

       fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
       birthDate.innerHTML = `Date of Birth: ${prophet.birthdate}`;
       birthplace.innerHTML = `Place of Birth: ${prophet.birthplace}`;
       portrait.setAttribute('src', prophet.imageurl);
       portrait.setAttribute('alt',`image of ${prophet.name} ${prophet.lastname} -${prophet.order}th Latter-day President`);
       portrait.setAttribute('loading', 'lazy');
       portrait.setAttribute('width', 340);
       portrait.setAttribute('height',440 );
        
       card.appendChild(fullName);
       card.appendChild(birthDate);
       card.appendChild(birthplace);
       card.appendChild(portrait);

       cards.appendChild(card);


    });
}
    all.addEventListener('click', () => getProphetData("all"));
    idaho.addEventListener('click', () => getProphetData("idaho"));
    nonus.addEventListener('click', () => getProphetData("nonus"));
    ten.addEventListener('click', () => getProphetData("ten"));
    childs.addEventListener('click', () => getProphetData("childs"));
    childl.addEventListener('click', () => getProphetData("childl"));
    old.addEventListener('click', () => getProphetData("old"));


getProphetData();
