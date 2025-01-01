let progressEle = document.querySelector(".progress")
let percentageEle = document.querySelector('.percentage')
let progressbarEle = document.querySelector('.progress-bar')
let progressStatus = 0
let timer = setInterval(
    updateProgress, 100
)
function updateProgress(){
    if(progressStatus == 100){
         clearInterval(timer)
    }
    else{
        progressStatus++;
        percentageEle.innerHTML=progressStatus+"%"
        progressbarEle.style.width = progressStatus + '%'
    }
    if (progressStatus == 50){
        percentageEle.style.color="white";
    }
}
