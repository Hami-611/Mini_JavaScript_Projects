let textAreaEle = document.getElementById('text-content');
let wordCountEle = document.getElementById('word-count');
let charCountEle = document.getElementById('char-count');
let content = 0
textAreaEle.addEventListener(
    'input' ,()=>{
        content = textAreaEle.value;
        charCountEle.innerHTML = content.length;
        let text = content.trim()
        let words = text.split(/\s/).length
        wordCountEle.innerHTML = words
    }
)