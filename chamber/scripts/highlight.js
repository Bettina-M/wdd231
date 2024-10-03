let today = new Date();
const time = today.toLocaleString();

document.querySelector('#modified').innerHTML = `Last Modified ${time}`;

const cards = document.getElementById("cards");

async function showBusiness() {
    try {
        let response = await fetch('data/chamber.json');
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            let members = data.chamberMembers;

            // Filter Platinum and Gold members
            let selectedMembers = members.filter(member =>
                member.membershipLevel === 'Platinum' || member.membershipLevel === 'Gold'
            );

            // Shuffle the filtered list and pick 3 random businesses
            let randomMembers = getRandomMembers(members, 3);
            displayMembers(randomMembers); 
        }
    } catch (error) {
        console.log(error.message);
    }
}

// Function to display the selected members
const displayMembers = (members) => {
    cards.innerHTML = '';

    members.forEach(member => {
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
        email.textContent = `Email: ${member.email}`;
        phone.textContent = `Phone: ${member.phone}`;
        web.textContent = member.website;
        web.href = member.website;
        web.target = "_blank";
        url.setAttribute('alt', `Image of ${member.businessName}`);
        url.setAttribute('src', member.logoUrl);
        url.setAttribute('width', 200);
        url.setAttribute('height', 250);
        level.textContent = `Level: ${member.membershipLevel}`;

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

function getRandomMembers(array, count = 3) {
    let selectedMembers = [];
    let usedIndices = new Set(); // To avoid duplicates

    while (selectedMembers.length < count) {
        let randomIndex = Math.floor(Math.random() * array.length);
        if (!usedIndices.has(randomIndex)) {  // Ensure we don't pick the same member again
            selectedMembers.push(array[randomIndex]);
            usedIndices.add(randomIndex);
        }
    }
    
    return selectedMembers;
}

document.addEventListener('DOMContentLoaded', () => {
    showBusiness();
});
