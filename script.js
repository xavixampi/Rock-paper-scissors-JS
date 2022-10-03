//Definir constantes
const player_rock=document.querySelector("#rock");
const player_paper=document.querySelector("#paper")
const player_scissors=document.querySelector("#scissors")

const bot_answer=document.querySelector("#answer");
const result_input=document.querySelector(".result-input");

function player_element(element){
    let selected_element=element;
    selected_element.classList.add("css_selected");

    let bot_choice=Math.floor(Math.random()*3);
    let bot_element="";
    ////Bot Select Element
    if(bot_choice==0){
        bot_element="rock";
        bot_answer.classList.add("fa-hand-back-fist")

    }else if(bot_choice==1){
        bot_element="paper";
        bot_answer.classList.add("fa-hand");

    }else if(bot_choice==2){
        bot_element="scissors";
        bot_answer.classList.add("fa-hand-scissors")

    }
    else{
        result_input.innerHTML="Ha ocurrido un error. Vuelve a intentarlo"
    }
    setTimeout(() => {
        location.reload()
    }, 1000);
    ////Who wins?
    if(element==player_rock){
        if(bot_element=="rock"){
            result_input.innerHTML="Empate";
        }
        else if(bot_element=="scissors"){
            result_input.innerHTML="Victoria"
        }
        else if(bot_element=="paper"){
            result_input.innerHTML="Derrota"
        }
    }
    else if(element==player_paper){
        if(bot_element=="paper"){
            result_input.innerHTML="Empate";
        }
        else if(bot_element="rock"){
            result_input.innerHTML="Victoria";
        }
        else if(bot_element="scissors"){
            result_input.innerHTML="Derrota";
        }
    }
    else if(element==player_scissors){
        if(bot_element=="scissors"){
            result_input.innerHTML="Empate";
        }
        else if(bot_element=="rock"){
            result_input.innerHTML="Derrota";
        }
        else if(bot_element=="paper"){
            result_input.innerHTML="Victoria";
        }
    }


    

}

player_rock.addEventListener("click",()=>{

    player_element(player_rock);


});

player_paper.addEventListener("click",()=>{
    player_element(player_paper);
  
});

player_scissors.addEventListener("click",()=>{
    player_element(player_scissors);

})
