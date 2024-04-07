function makebubble(){
    let bubble="";
    for(let i=0;i<=137;i++){
        let rn=Math.floor(Math.random()*10);
        bubble += `<div class="bubble">${rn}</div>`;
    }
document.querySelector(".pbotm").innerHTML=bubble;
};

makebubble();

let time=60;
function Timer(){
    let timerint=setInterval(() => {
       if(time>0){
        time--;
        document.querySelector("#timer").textContent=time;
       }
       else{
        clearInterval(timerint);
        document.querySelector(".pbotm").innerHTML=`<h1>Game over</h1>`;
       }
    },1000);
}
Timer();

let hitv;
function refresh(){
    hitv=Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=hitv;
}

refresh();

let score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
}

// increaseScore();

let parent=document.querySelector(".pbotm");
parent.addEventListener("click",function(dets){
    let num=Number(dets.target.textContent);
    if(num===hitv){
        increaseScore();
        makebubble();
        refresh();
    }
    
})