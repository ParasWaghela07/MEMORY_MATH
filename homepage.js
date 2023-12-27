let homeMusic=new Audio("home.mp3");
document.addEventListener('DOMContentLoaded', function() {
    homeMusic.play();
})
let difficulties = document.getElementsByClassName("diffi");
let difficultiesArray = Array.from(difficulties);

difficultiesArray.forEach(element => {
    element.addEventListener('click', function() {
        if (element.innerText === "EASY") {
            localStorage.setItem('selectedDifficulty', 'easy');
        }
        else if(element.innerText==="MEDIUM"){
            localStorage.setItem('selectedDifficulty', 'medium');
        }
        else if(element.innerText==="INSANE"){
            localStorage.setItem('selectedDifficulty', 'insane');
        }
    });
});

