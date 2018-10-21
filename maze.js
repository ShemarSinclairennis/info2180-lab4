window.onload = () =>{

  let boundary = document.querySelectorAll(".boundary");
  let firstBoundary = document.getElementById("boundary1")
  let maze = document.getElementById("maze");
  let start = document.getElementById("start");
  let end = document.getElementById("end");
  let abstract = 0;

  firstBoundary.addEvenListener("mouseover",youLose);
  boundary.forEach( b=> {b.addEvenListener("mouseover",youLose)});
  function youLose (){
  		abstract++;
  		this.classList.add("youLose");
  	}



    end.addEventListener("mouseover", youWin);

    function youWin(){

        if (abstract < 1){
            document.getElementById("status").innerHTML = "YOU WIN!";
        }
        else(
            document.getElementById("status").innerHTML = "YOU LOSE!"

        )
    }

 start.addEventListener("click", restart);

    function restart(){

        boundary.forEach(b => {b.classList.remove("youlose")});

        abstract=0;

        document.getElementById("status").innerHTML = "Move your mouse over the 'S' to begin.";

    }

}