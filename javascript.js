function start(){
    let your_input = 'Not';
    do {
        your_input = prompt("Would you like to play Rock Paper Scissors? [Yes/No]");
        your_input = your_input.toLowerCase();
        if (your_input != "yes" && your_input != "no"){
            alert("You gave a wrong input, try again")
        }
    }while (your_input != "yes" && your_input != "no");
    return your_input;
}

function human_choice_input(){
    let human_choice = 'rocks'
    do{
        human_choice = prompt("What is your choice? [rock/paper/scissors]");
        human_choice = human_choice.toLowerCase();
        if (human_choice != 'rock' && human_choice != 'paper' && human_choice != 'scissors'){
            alert('you gave a wrong input, try again.')
        }
    }while (human_choice != 'rock' && human_choice != 'paper' && human_choice != 'scissors')
    
    console.log(`your choice : ${human_choice}`);
    return human_choice;
}

function generate_comp_choice(){
    let comp_choice = Math.random();
        if (comp_choice <= 0.33){
            comp_choice = 'rock';
        }
        else if (comp_choice <= 0.67){
            comp_choice = 'paper';
        }
        else if (comp_choice <= 1){
            comp_choice = 'scissors';
        }
    return comp_choice;
}
function battle(human_choice, comp_choice){
    if (human_choice == 'rock'){
        if (comp_choice == 'rock'){
            score_comp++;
            score_human++;
        }
        else if (comp_choice == 'paper'){
            score_comp++;
        }
        else if (comp_choice == 'scissors'){
            score_human++;
        }
    }
    else if (human_choice == 'paper'){
        if (comp_choice == 'rock'){
            score_human++;
        }
        else if (comp_choice == 'paper'){
            score_comp++;
            score_human++;
        }
        else if (comp_choice == 'scissors'){
            score_comp++;
        }
    }
    else if (human_choice == 'scissors'){
        if (comp_choice == 'rock'){
            score_comp++;
        }
        else if (comp_choice == 'paper'){
            score_human++;
        }
        else if (comp_choice == 'scissors'){
            score_comp++;
            score_human++;
        }
    }
}

let score_human = 0;
let score_comp = 0;
let round = 1;

let your_input = start();

if (your_input == 'no'){
    console.log("Okay, have a nice day");
}
else {
    
    

    console.log("Let's Play! We'll play 5 rounds")
    while(round <= 5){
        console.log(`-------This is round ${round}.-------`);
        let human_choice = human_choice_input();
        let comp_choice = generate_comp_choice();

        console.log(`my choice : ${comp_choice}`);
        battle(human_choice, comp_choice);

        console.log(`your score = ${score_human}`);
        console.log(`my score = ${score_comp}`);               
        round++;
    }
   
    if (score_comp > score_human){
        console.log("-------I win. Nice try.-------");
    }
    else if (score_comp < score_human){
        console.log("-------You win. Congratulations!-------");
    }
    else if (score_comp == score_human){
        console.log("-------It's a tie. Nice game.-------");
    }
}