window.onload = () =>{

    let boundary = document.querySelectorAll(".boundary");
    let firstBoundary = document.getElementById("boundary1")
    let start = document.getElementById("start");
    let maze  = document.getElementById("maze");
    let end = document.getElementById("end");
    let impact = 0;



    firstBoundary.addEventListener("mouseover", youLose);


    boundary.forEach(b => {b.addEventListener("mouseover", youLose)});

    

    function youLose (){
        impact++;
        this.classList.add("youlose");
    }



    end.addEventListener("mouseover", youWin);

    

    function youWin(){
        if (impact < 1){
            document.getElementById("status").innerHTML = "YOU WIN!";
        }

        else(

            document.getElementById("status").innerHTML = "YOU LOSE!"
        )

    }



    start.addEventListener("click", restart);



    function restart(){
        boundary.forEach(b => {b.classList.remove("youlose")});
        impact=0;
        document.getElementById("status").innerHTML = "Move your mouse over the 'S' to begin.";

    }



    maze.addEventListener("mouseleave", cheating);



    function cheating(){
        document.getElementById("status").innerHTML = "mouse outside maze <br> YOU CHEATED YOU LOSE!";
    }

}