fetch("news.json")
.then(r=>r.json())
.then(data=>{

const box=document.getElementById("newsContainer");

if(!data.length){
document.getElementById("news").style.display="none";
return;
}

data.forEach(n=>{

const div=document.createElement("div");
div.className="card";

div.innerHTML=`
<h3>${n.title}</h3>
<p>${n.text}</p>
`;

box.appendChild(div);

});

});
