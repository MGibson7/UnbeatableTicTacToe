//get all clickable elements made into objects that can return space number and usedStatus
let spaceObject = (space, letter) =>{
    return { space, letter }
}

space1 = document.getElementById("space1");
space2 = document.getElementById("space2");
space3 = document.getElementById("space3");
space4 = document.getElementById("space4");
space5 = document.getElementById("space5");
space6 = document.getElementById("space6");
space7 = document.getElementById("space7");
space8 = document.getElementById("space8");
space9 = document.getElementById("space9");




const spaceArray = [space1, space2, space3, space4, space5, space6, space7, space8, space9];

//Winning Arrays
let array123 = []
let array456 = []
let array789 = []
let array147 = []
let array258 = []
let array369 = []
let array159 = []
let array357 = []

//WHOSE TURN Initially

let turn = 'X';

playerInstructions = document.getElementById("playerInstructions")

let winner = "none"


function checkWin(){
    let result = 0
    for(char in array123){
        if (array123[char] == `${turn}`){
            result += 1;
        }
    }
    if (result == 3){
        if (turn == "X"){
            playerInstructions.innerText = "YOU WON!";
            winner = "user"

        }
        else{
            playerInstructions.innerText = "COMPUTER WON :(";
            winner = "cpu"

        }
        
        return winner

    }
    result = 0;
    for(char in array456){
        if (array456[char] == `${turn}`){
            result += 1;
        }
    }
    if (result == 3){
        if (turn == "X"){
            playerInstructions.innerText = "YOU WON!";
            winner = "user"

        }
        else{
            playerInstructions.innerText = "COMPUTER WON :(";
            winner = "cpu"

        }
        
        return winner

    }
    result = 0;
    for(char in array789){
        if (array789[char] == `${turn}`){
            result += 1;
        }
    }
    if (result == 3){
        if (turn == "X"){
            playerInstructions.innerText = "YOU WON!";
            winner = "user"

        }
        else{
            playerInstructions.innerText = "COMPUTER WON :(";
            winner = "cpu"

        }
        
        return winner

    }
    result = 0;
    for(char in array147){
        if (array147[char] == `${turn}`){
            result += 1;
        }
    }
    if (result == 3){
        if (turn == "X"){
            playerInstructions.innerText = "YOU WON!";
            winner = "user"

        }
        else{
            playerInstructions.innerText = "COMPUTER WON :(";
            winner = "cpu"

        }
        
        return winner

    }
    result = 0;
    for(char in array159){
        if (array159[char] == `${turn}`){
            result += 1;
        }
    }
    if (result == 3){
        if (turn == "X"){
            playerInstructions.innerText = "YOU WON!";
            winner = "user"

        }
        else{
            playerInstructions.innerText = "COMPUTER WON :(";
            winner = "cpu"

        }
        
        return winner

    }
    result = 0;
    for(char in array258){
        if (array258[char] == `${turn}`){
            result += 1;
        }
    }
    if (result == 3){
        if (turn == "X"){
            playerInstructions.innerText = "YOU WON!";
            winner = "user"

        }
        else{
            playerInstructions.innerText = "COMPUTER WON :(";
            winner = "cpu"

        }
        
        return winner

    }
    result = 0;
    for(char in array357){
        if (array357[char] == `${turn}`){
            result += 1;
        }
    }
    if (result == 3){
        if (turn == "X"){
            playerInstructions.innerText = "YOU WON!";
            winner = "user"

        }
        else{
            playerInstructions.innerText = "COMPUTER WON :(";
            winner = "cpu"

        }
        
        return winner

    }
    result = 0;
    for(char in array369){
        if (array369[char] == `${turn}`){
            result += 1;
        }
    }
    if (result == 3){
        if (turn == "X"){
            playerInstructions.innerText = "YOU WON!";
            winner = "user"

        }
        else{
            playerInstructions.innerText = "COMPUTER WON :(";
            winner = "cpu"

        }
        
        return winner

    }
    if (array123.length + array147.length + array159.length + array258.length + array357.length + array369.length + array456.length + array789.length ==24){
        playerInstructions.innerText = "DRAW"
        winner = "Draw"
    }
    
}


//color: lime;
//text-shadow: 0 0 10px lime;

let x = 0


//DISPLAYING GAME LETTERS
function gameStart(){
    for(array in spaceArray){
        console.log(spaceArray[array])
        let space = spaceArray[array];
        space.addEventListener('click', event => {
            x = space.innerText
            console.log(x)
            if (x != 'X' && x != 'O'){
                if(space.innerText == 1){
                    array123.push(turn);
                    array147.push(turn);
                    array159.push(turn);
                }
                else if(space.innerText == 2){
                    array123.push(turn);
                    array258.push(turn);
                }
                else if(space.innerText == 3){
                    array123.push(turn);
                    array357.push(turn);
                    array369.push(turn);
                }
                else if(space.innerText == 4){
                    array456.push(turn);
                    array147.push(turn);
                }
                else if(space.innerText == 5){
                    array456.push(turn);
                    array357.push(turn);
                    array258.push(turn);
                    array159.push(turn);
                }
                else if(space.innerText == 6){
                    array456.push(turn);
                    array369.push(turn);
                }
                else if(space.innerText == 7){
                    array789.push(turn);
                    array147.push(turn);
                    array357.push(turn);
                }
                else if(space.innerText == 8){
                    array789.push(turn);
                    array258.push(turn);
                }
                else if(space.innerText == 9){
                    array789.push(turn);
                    array159.push(turn);
                    array369.push(turn);
                }
                
                space.innerHTML = `<h2 style = "color:lime;">${turn}</h2>`
                checkWin()
                if (winner != "none"){
                    console.log("WE HAVE A WINNER")
                    winner = "none"
                    array123 = []
                    array456 = []
                    array789 = []
                    array147 = []
                    array258 = []
                    array369 = []
                    array159 = []
                    array357 = []
                    for(array in spaceArray){
                        space = spaceArray[array];
                        space.innerText = `${parseInt(array)+1}`
            
                    }
                }
                else{
                    if(turn === 'X'){
                        turn = 'O';
                    }
                    else{
                        turn = 'X';
                    }

                }
                
                
                //computerMove()
                //checkWin()
            }
        })
    
        
    }

}

gameStart()

