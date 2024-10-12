//form submission

function displayDetails(){
    //getting url

    const url = window.location.href;
    //split the url to get query string 

    const urlQuery = url.split('?');
    const queryString = urlQuery[1]; //we want the parts after the ?
    if(queryString){
        const keyValuePairs = queryString.split('&');

        const details = keyValuePairs.map((pair)=>{
            const [key, value] = pair.split('=');
            return (`${key}: ${decodeURIComponent(value)}`);
            // decodeURIComponent handles spaces and special characters
         });

         document.getElementById('details').innerHTML = details.join("<br>")

    }

    
}