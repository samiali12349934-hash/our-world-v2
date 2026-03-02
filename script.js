// Dark mode
function toggleDark(){
document.body.classList.toggle("dark");
}

// Hamburger
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

if(toggle){
toggle.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});
}

// Scroll reveal
const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
const top = sec.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
sec.classList.add("show");
}
});
});

// Quiz function
function checkAnswer(answer){
if(answer === "correct"){
alert("Correct! 🎉");
}else{
alert("Wrong answer ❌");
}
}

// Counter animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{
counter.innerText="0";
const update=()=>{
const target=+counter.getAttribute("data-target");
const c=+counter.innerText;
const increment=target/200;

if(c<target){
counter.innerText=Math.ceil(c+increment);
setTimeout(update,10);
}else{
counter.innerText=target;
}
};
update();
});
