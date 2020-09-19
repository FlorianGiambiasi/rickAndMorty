const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const heads = document.querySelectorAll(".head");
let lastCloud;

let timeUp = false; // fasle si pas fini et true si fini
let score = 0;

function randomTime(min,max){
    return Math.round(Math.random()*(max-min)+min);
}
function randomCloud(clouds){
    const indexCloud = Math.floor(Math.random()*clouds.length);
    const cloudSelect = clouds[indexCloud];
    
    if(cloudSelect === lastCloud){
        return randomCloud(clouds);
    }
    lastCloud = cloudSelect;

    return cloudSelect;
}
function showHead(){
    const time = randomTime(600,1000);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(()=> {
        if(!timeUp) showHead();
        cloud.classList.remove("up");
    } ,time);
}
showHead();