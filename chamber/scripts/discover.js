const visit = document.querySelector("#visit");

function currentTime(){
    return new Date().getTime();
}

function timeDifference(){

    const lastVisit = localStorage.getItem('lastVisit');
    const timeNow = currentTime();

    if (lastVisit == null){
        const previousTime = parseInt(lastVisit, 10);
        const difference = timeNow - previousTime;

        const days = Math.floor(difference/86400000);

        const hours = Math.floor(difference/3600000);


        if (days>1){
            visit.innerHTML = `Welcome back, you last visited ${days} days ago`;
        }
        else if(days < 1 && hours< 24) {
            visit.innerHTML = `Back so soon! Awesome!`;
        }

        else{
            visit.innerHTML = `Welcome! Let us know if you have any questions.`
        }

       localStorage.setItem('lastVisit', timeNow.toString());
    }
}

timeDifference();