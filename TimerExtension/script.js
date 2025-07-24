const ele=document.querySelector(".Timer-container");
const heading=document.querySelector("h1")
heading.innerText="Hii Prince"
heading.style.fontFamily = "'Playfair Display', serif";
heading.style.fontSize = "3rem";
heading.style.color = "white";

function timer(){
    const now=new Date();
    const time=now.toLocaleTimeString();
    const day = now.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' });
     ele.innerHTML= `<div>${time}, ${day}</div>`;
}
timer()
setInterval(timer,1000); 
console.log("hello")