async function share(){
    let img = await fetch("https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg?auto=compress&cs=tinysrgb&w=400");
    let file = await img.blob();
    file = new File([file],"img.jpg",{type:'image/jpeg'});
    if(navigator.share){
        navigator.share({
            title:"Demo",
            text: "Check this repository",
            url:"https://github.com/Hami-611/JavaScript-Beginners-Projects",
            files:[file]
        })
    }
}