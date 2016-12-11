var url = window.location.pathname.split("/").slice(-1)[0];
var jsonContent = JSON.parse(Get('/content/' + url + '.json'));
console.log("Title: "+jsonContent.title);
document.title=jsonContent.title;
document.getElementById("img").src=jsonContent.img;
document.getElementById("title").innerHTML=jsonContent.title;
document.getElementById("text").innerHTML=jsonContent.text;
