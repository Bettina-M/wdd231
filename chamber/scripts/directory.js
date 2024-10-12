let today = new Date();
const time = today.toLocaleString();

document.querySelector('#modified').innerHTML = `Last Modified ${time}`;




const menuButton= document.querySelector('#menu');

let nav = document.querySelector('#nav-links');

let cards = document.querySelector('#cards');



//for the menu button
menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
    
});

 
async function showbusiness(filter ='all'){
    try{
        let response = await fetch('data/chamber.json');
        if (response.ok){
            let data = await response.json();
            let chamberMembers = data.chamberMembers;

            switch(filter){
                case 'platinum':
                    chamberMembers = chamberMembers.filter(member=>member.membershipLevel === 'Platinum');
                break;
            
                case 'nonProfit':
                    chamberMembers = chamberMembers.filter(member=>member.membershipLevel === 'Non-Profit');
                break;
            
                case 'gold':
                    chamberMembers = chamberMembers.filter(member=>member.membershipLevel === 'Gold');
                break;
            
                case 'silver':
                    chamberMembers = chamberMembers.filter(member=>member.membershipLevel === 'Silver');
                break;
                
                case 'all':
                
                default:
                    break;
            }
            
        displayMembers(chamberMembers);
        }
        
    }catch(error){
        console.log(error.message);
    }
}

 const displayMembers = (chamberMembers) =>{
   cards.innerHTML = '';

    chamberMembers.forEach(member => {
        const card = document.createElement('section');
        const bname = document.createElement('h3');
        const tag = document.createElement('h4');
        const email = document.createElement('p');
        const phone = document.createElement('p');
        const web = document.createElement('a');
        const url = document.createElement('img');
        const level = document.createElement('p');

        bname.textContent = member.businessName;
        tag.textContent = member.tagLine;
        email.textContent= `Email: ${member.email}`;
        phone.textContent= `phone:${member.phone}`;
        web.textContent= `${member.website}`;
        web.href =member.website;
        web.target = "_blank";
        url.setAttribute('alt',`Image of ${member.businessName}`);
        url.setAttribute('src',member.logoUrl);
        url.setAttribute('width', 200);
        url.setAttribute('height', 250);
        level.innerHTML = `Level: ${member.membershipLevel}`;

        
        card.appendChild(bname);
        card.appendChild(tag);
        card.appendChild(url);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(web);
        card.appendChild(level);
        
        cards.appendChild(card);
    });

    
}

document.addEventListener('DOMContentLoaded',()=>{
    

    const gridButton= document.querySelector('#grid');
    const listButton = document.querySelector('#list');

    gridButton.addEventListener('click', () => {
        cards.classList.add('grid-view');
        cards.classList.remove('list-view');
    });

    listButton.addEventListener('click', showList);

   function showList(){
        cards.classList.add('list-view');
        displayMembers.classList.remove('grid-view')
   }    
    
    showbusiness('all');
    
    

});






