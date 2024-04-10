 //FIRST ACCESS ALL BOXES
 let boxes=document.querySelectorAll(".box");

 let resetbtn=document.querySelector("#reset");  //also access the reset button
 let newbtn=document.querySelector("#newbtn");
 let msgContainer=document.querySelector(".msg-container");
 let msg=document.querySelector("#msg");

 let turn0=true; //it will tell about the turn of  players(playerX,playerO)
 //let count=0;
//now store all the possible winning patterns
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{   //reset the game after completion
    turn0=true;
    
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

//now add events to all the boxes
boxes.forEach((box) => {
    box.addEventListener("click",()=>{  //event added
        console.log("box was clicked");
        if(turn0){   //if 0 is playing then print O on box and change turnO to false.
            box.innerText="O";
            turn0=false;
        }
        else{   //player X is playing 
            box.innerText="X";
            turn0=true;
        }
         box.disabled=true; //here box is locked after first click. 
         checkWinner();
    });
});

const showWinner=(winner)=>{
    msg.innerText=`CONGRANTULATIONS, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        
        let pos1= boxes[pattern[0]].innerText;
        let pos2=  boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos2!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("WINNER",pos1);
                showWinner(pos1);
            }
        }

    }
};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
