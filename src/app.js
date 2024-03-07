const allboxes=document.querySelectorAll(".Box")
const selectedId=document.getElementById("selected")
const randomId=document.getElementById("random")
const resultShow=document.getElementById("result-show")

const TYPE={
    PAPER:"paper",
    STONE:"stone",
    SCISSORS:"scissor"

}
boxType=(type)=>{
    switch (type) {
        case TYPE.STONE:
            return {img:'url("../texture/rock.png")'};
            break;
        case TYPE.PAPER:
            return {img:'url("../texture/paper.png")'};
            break;
        case TYPE.SCISSORS:
            return {img:'url("../texture/scissors.png")'};
                break;
        default:
            break;
    }
}
console.log(allboxes)
allboxes.forEach(box=>{
    // box.addEventListener("mousemove",()=>{
    //     let result=boxType(box.getAttribute("id"));
    //     selectedId.style.backgroundImage=result.img;
    // })
    box.addEventListener("click",()=>{
        let idname=box.getAttribute("id");
        let result=boxType(idname)
        selectedId.style.backgroundImage=result.img;
        randomFinder(idname)
    })
})

randomFinder=(result)=>{
    
     valArray=["paper","stone","scissor"];
     let random=Math.floor(Math.random()*valArray.length);
     let randomResult=valArray[random];
     randomId.style.backgroundImage=boxType(randomResult).img;
     resultShow.innerHTML=compareResult(result,randomResult);
}

const compareResult = (user, comp) => {
    if (
        (user === TYPE.SCISSORS && comp === TYPE.PAPER) ||
        (user === TYPE.STONE && comp === TYPE.SCISSORS) ||
        (user === TYPE.PAPER && comp === TYPE.STONE)
    ) {
        return "USER WIN !!";
    } else if (user === comp) {
        return "DRAW";
    } else {
        return "COMPUTER WIN";
    }
};
