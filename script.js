function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}

// якщо новин немає → блок ховається
document.addEventListener("DOMContentLoaded", function () {

const news = document.getElementById("newsContainer");

if (news.children.length === 0) {
document.getElementById("news").style.display = "none";
}

});
