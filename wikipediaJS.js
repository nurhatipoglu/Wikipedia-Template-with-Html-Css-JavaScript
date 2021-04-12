function hello() {
    console.log('Hello!');
    console.log('Welcome to JavaScript');
   }

hello();

function onClick() {
    console.log('Tiklandi');
    const image = document.querySelector('#computer_img');
    if(image.style.display== 'none'){
        image.style.display="block";
    }
    else{
        image.style.display="none";
    }
    document.getElementById("Button").innerHTML = "Tıklandı";
}
function onMouseOver() {
    const yazi = document.getElementById('demo');
    yazi.innerHTML = Date();
    //document.getElementById('demo').innerHTML=Date();
    yazi.style.color = "red";
    document.getElementById('time_button').innerHTML="Mouse hover effect";
}
function onMouseOut(){
    document.getElementById('time_button').innerHTML="Mouse out effect";
}

const button= document.querySelector('#Button');
button.addEventListener('click',onClick);

const timebutton = document.querySelector("#time_button");
timebutton.addEventListener('mouseover', onMouseOver);
timebutton.addEventListener('mouseout', onMouseOut);

