function goTo(id){

document.getElementById(id).scrollIntoView({
behavior:"smooth"
});

}

/* AUTO HIDE NEWS */

document.addEventListener("DOMContentLoaded",()=>{

const news =
document.getElementById("newsContainer");

if(news.children.length === 0){

document.getElementById("news")
.style.display="none";

}

});

/* SCROLL ANIMATION */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(
".section,.unit-card,.hud-box"
).forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="1s";

observer.observe(el);

});
