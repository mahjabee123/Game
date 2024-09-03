let usersqes=[];
let gameseqes=[];
 let level=0;
let stared=false;
let h2=document.querySelector("h2");
let btns=["yellow","red","purpule","green"];
document.addEventListener("keypress",function(){
    if(stared==false){
        console.log("game is stared")
        stared=true;
        levelup();
    }
   
});
function levelup(){
    usersqes=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx =Math.floor(Math.random()*3);
    let randColor= btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randColor);
    gameseqes.push(randColor);
    console.log(gameseqes)


    gameFlash(randBtn);

}
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
} ,500)
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    } ,500)
    }
    function checkAns(idx){
// console.log("current level:",level);
if(usersqes[idx]==gameseqes[idx]){
    if(usersqes.length==gameseqes.length){
        setTimeout(levelup,1000)
    }
    console.log("same value")
}
else{

h2.innerHTML=`Game over :  your score was<b>${level}<b> <br>.press anykey to start`;
document.querySelector("body").style.background="red";
setTimeout( function(){
    document.querySelector("body").style.background="white";
},150)
     reset();
    }
}
function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");/*ye sirf color nikane ke liye id ka use kr rhe h */
    console.log(usercolor);
    usersqes.push(usercolor);
    checkAns(usersqes.length-1);
}

let allBtn=document.querySelectorAll(".btn")
for(btn of allBtn){
    btn.addEventListener("click",btnPress)
}
function reset(){
    stared=false;
    gameseqes=[];
    usersqes=[];
    level=0;
}