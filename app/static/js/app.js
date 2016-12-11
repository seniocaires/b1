var appContent = JSON.parse(Get('/app.json'));
document.getElementById("copyright").innerHTML=appContent.copyright;
document.getElementById("name").innerHTML=appContent.name;
document.getElementById("name").href=appContent.link;
document.title=appContent.title;
