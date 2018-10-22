///Author: Shemar Ennis 
///ID#:620111861


window.onload = () =>{

    let boundary = document.querySelectorAll(".boundary");
    let firstBoundary = document.getElementById("boundary1")
    let start = document.getElementById("start");
    let maze  = document.getElementById("maze");
    let end = document.getElementById("end");
    let impact = 0;

///Excercise 1...Line 11 is to allow single boundary to highlight red when mouse has hovered over it
    firstBoundary.addEventListener("mouseover", youLose);

///Excercise 2..Line 14 is to allow all boundaries to highligh red when mouse has hovered over a single boundary
    boundary.forEach(b => {b.addEventListener("mouseover", youLose)});

    
///Fuction youLose was created to confirm if player had lost
    function youLose (){
        impact++;
        this.classList.add("youlose");
    }



    end.addEventListener("mouseover", youWin);

    
///Function youWin was created to confirm if player had won
    function youWin(){
        if (impact < 1){
            document.getElementById("status").innerHTML = "YOU WIN!";
        }

        else(

            document.getElementById("status").innerHTML = "YOU LOSE!"
        )

    }



    start.addEventListener("click", restart);


///Function restart was created to restart the gamr after start was click in line 43
    function restart(){
        boundary.forEach(b => {b.classList.remove("youlose")});
        impact=0;
        document.getElementById("status").innerHTML = "Move your mouse over the 'S' to begin.";

    }



    maze.addEventListener("mouseleave", cheating);


///Function cheated was created to prevent cheating in the game...function was used in line 56
    function cheating(){
        document.getElementById("status").innerHTML = "mouse outside maze <br> YOU CHEATED YOU LOSE!";
    }

}