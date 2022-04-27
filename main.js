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

let winner = 'none'
let turn = 'X'

function gameStart(){
        for (array in spaceArray){
            let space = spaceArray[array];
            space.addEventListener('click', event=>{
                let x = space.innerText
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
                    
                    space.innerHTML = `<h2 style = "color:lime;">${turn}</h2>`}})
                }
                checkWin()
                if (winner != 'none'){
                    //DISPLAY WINNER MESSAGE
                    gameRestart();
                }
                else{
                    computerMove();
                    checkWin()
                    if (winner != 'none'){
                        //DISPLAY WINNER MESSAGE
                        gameRestart();
                }
            }
           



gameStart();