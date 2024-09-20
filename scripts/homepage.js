let today = new Date();
let time = today.toLocaleString();
document.querySelector('#date').innerHTML = `Last Modified  ${time}`;

const menu = document.querySelector('#button');
const mainNav = document.querySelector('#main-nav');

menu.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    menu.classList.toggle('open');
});

const courses = [
    { cname: 'CSE 110', credits: 2, completed: true },
    { cname: 'WDD 130', credits: 2, completed: true },
    { cname: 'CSE 111', credits: 2, completed: true },
    { cname: 'CSE 210', credits: 2, completed: true },
    { cname: 'WDD 131', credits: 2, completed: true },
    { cname: 'WDD 231', credits: 2, completed: false }
];

document.addEventListener('DOMContentLoaded', () => {
    displaycourse(courses);
});

function displaycourse(courses) {
    const container = document.querySelector('#units');
    container.innerHTML = '';

    courses.forEach(course => {
        let name = document.createElement('p');
        name.textContent = course.cname;

        container.appendChild(name);

        if (course.completed == false) {
            name.style.backgroundColor = 'grey';
        }

    });
}

function showCredits(courses) {

    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    const displayCredits = document.getElementById('credits');

    displayCredits.textContent = `Total Credits ${totalCredits}`;
}

document.getElementById('all').addEventListener('click', () =>{
    displaycourse(courses);
    showCredits(courses);
});


document.getElementById('cse').addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.cname.includes('CSE'));
    displaycourse(cseCourses);
    showCredits(cseCourses);


});

document.getElementById('wdd').addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.cname.includes('WDD'));
    displaycourse(wddCourses);
    showCredits(wddCourses);

});
