window.onload = () =>{

  let boundary = document.querySelectorAll(".boundary");
  let firstBoundary = document.getElementById("boundary1")
  let maze = document.getElementById("maze");
  let start = document.getElementById("start");
  let end = document.getElementById("end");
  let abstract = 0;

  firstBoundary.addEvenListener("mouseover",youLose);
  function youLose (){
  		abstract++;
  		this.classList.add("youLose");
  }
}