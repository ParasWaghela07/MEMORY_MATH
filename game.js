let a = 0;
let intervalId; // Variable to store the interval ID
let str="";
let arr=["+","-"];
let arr2=["+","*"];
let check=1;

document.addEventListener('DOMContentLoaded', function() {
    var selectedDifficulty = localStorage.getItem('selectedDifficulty');

    if (selectedDifficulty === 'easy') {

        intervalId = setInterval(function(){

            if(check==1){

            check=0;
            let x = Math.floor(Math.random() * 100);
            document.getElementById("num").innerText = x;
            str+=x;
            a++;
            if(str.length>1){
                str=eval(str);
            }
            

            }
            else if(check==0){

                let y=Math.floor(Math.random() * 2);
                document.getElementById("num").innerText = arr[y];
                str+=arr[y];
                check=1;
        
            }


            if (a == 5) {
                    clearInterval(intervalId);
                    setTimeout(function(){
                        document.getElementById("num").innerText = "?" ;
                    },2500);
            }

            
        }, 2500);

    }
    
    else if (selectedDifficulty === 'medium') {

        intervalId = setInterval(function(){

            if(check==1){

            check=0;
            let x = Math.floor(Math.random() * 100);
            document.getElementById("num").innerText = x;
            str+=x;
            a++;
            if(str.length>1){
                str=eval(str);
            }
            

            }
            else if(check==0){

                let y=Math.floor(Math.random() * 2);
                document.getElementById("num").innerText = arr[y];
                str+=arr[y];
                check=1;
        
            }


            if (a == 5) {
                    clearInterval(intervalId);
                    setTimeout(function(){
                        document.getElementById("num").innerText = "?" ;
                    },2000);
            }

            
        }, 2000);

    }
    else if (selectedDifficulty === 'insane') {

        intervalId = setInterval(function(){

            if(check==1){

            check=0;
            let x = Math.floor(Math.random() * 100);
            document.getElementById("num").innerText = x;
            str+=x;
            a++;
            if(str.length>1){
                str=eval(str);
            }
            

            }
            else if(check==0){

                let y=Math.floor(Math.random() * 2);
                document.getElementById("num").innerText = arr2[y];
                str+=arr2[y];
                check=1;
        
            }


            if (a == 2) {
                    clearInterval(intervalId);
                    setTimeout(function(){
                        document.getElementById("num").innerText = "?" ;
                    },1500);
                    
            }

            
        }, 1500);

    }
});


document.getElementById("btn").addEventListener('click',function(){

    let userAns=document.getElementById("ansbox");

    if(str==userAns.value){
        document.getElementById("num").innerText = str ;
        document.getElementById("num").style.color="rgb(2, 189, 2)";
        document.getElementById("signal").innerText="CORRECT !"
        document.getElementById("signal").style.color="rgb(2, 189, 2)";
        document.getElementById("signal").style.fontWeight="600";
    }
    else{
        document.getElementById("num").innerText = str ;
        document.getElementById("num").style.color="red";
        document.getElementById("signal").innerText="INCORRECT !"
        document.getElementById("signal").style.color="red";
        document.getElementById("signal").style.fontWeight="600";
    }
})


