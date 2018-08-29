/***********************************************************
* WRITE ALL THE FUNCTIONS AND MAKE EM DO ALL THE THINGS    *
*************/
//===== Var declarations =====
let paused = false
let seconds = 0;
let counter = document.getElementById('counter');
let minus = document.getElementById('-');
let plus = document.getElementById('+');
let heart = document.getElementById('<3');
let likes = document.getElementsByClassName("likes")
let pauseBtn = document.getElementById('pause')
let submitBtn = document.getElementById('submit')
//------------------

//===== EVENT LISTENERS =====
minus.addEventListener("click",decrementCounter);
plus.addEventListener("click",incrementCounter);
heart.addEventListener("click",addALike);
pauseBtn.addEventListener("click", togglePause)
submitBtn.addEventListener("click",function(e){
   e.preventDefault(); // Cancel the native event
   // e.stopPropagation();// Don't bubble/capture the event
   addComments();
}, false)
//===== MUTHAFUNCTIONS ======
function incrementSeconds() {
  if(!paused){
    seconds += 1;
  }
    counter.innerText = seconds;
}
function decrementCounter() {
    seconds -= 1;
    counter.innerText = seconds;
}
function incrementCounter() {
    seconds += 1;
    counter.innerText = seconds;
}
function addALike(){
  let myLikes = document.getElementById(counter.innerText)
  let likeCounter = 1;
  if(!myLikes)
  {
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(`${counter.innerText} liked:${likeCounter} times!`));
    li.setAttribute("id", `${counter.innerText}`);
    likes[0].appendChild(li);
  }else{
    //edit myLikes to update the right number of clicks
    likeCounter = parseInt(myLikes.innerText.split(":")[1][0])
    likeCounter += 1
    myLikes.innerText = `${counter.innerText} liked:${likeCounter} times!`
  }
}
function togglePause(){
  paused = !paused
}
function addComments(){

  let commentInput = document.getElementById("comment-form").elements[0].value;
  let something = document.getElementById("list")
  let ul = document.createElement("ul")
  let li = document.createElement("li")
  something.appendChild(ul)
  li.appendChild(document.createTextNode(commentInput));
  // li.setAttribute("id", `${counter.innerText}`);
  ul.appendChild(li);
  // this.preventDefault()
  document.getElementById("comment-form").reset();
}



//setups NOT TOO FAR -------------
setInterval(incrementSeconds, 1000)
