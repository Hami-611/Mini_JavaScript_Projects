let fileInput = document.querySelector('.input-file');
let outputEle = document.querySelector('.content');

fileInput.addEventListener('change', () => {
    let file = fileInput.files[0];
    let fr = new FileReader();  
    fr.readAsText(file);
    fr.addEventListener('load', () => {
        outputEle.textContent = fr.result;
    });
});
