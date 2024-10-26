//form submission details//

function displayorder(){
    const url = window.location.href;

    const urlQuery = url.split("?"); //split into 2 parts
    const queryString = urlQuery[1];// getting part after ?
    if(queryString){
        const keyValuePairs = queryString.split("&");

        const details = keyValuePairs.map((pair)=>{
            const [key, value] = pair.split("=");
            return `${key}: ${decodeURIComponent(value)}`;
        });

        document.querySelector("#orderDetails").innerHTML= details.join("<br>");
        
    }


}
document.addEventListener("DOMContentLoaded", displayorder);