// let getdifficulties=document.getElementsByClassName("diffi");

// let difficulties=Array.from(getdifficulties);

// difficulties.forEach(element => {
//     element.addEventListener('click',function(){
//         if(element.target.innerText==="EASY"){
//             document.getElementById("num").innerText="500";
//         }
//     })
// });
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

