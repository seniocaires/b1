var jsonContent;

jsonContent = JSON.parse(Get('/content/trying-to-learn-any-programming-language.json'));
document.getElementById("img0").src=jsonContent.img;
document.getElementById("title0").innerHTML=jsonContent.title;
document.getElementById("title0").href='/j/'+jsonContent.file;
document.getElementById("text0").innerHTML=jsonContent.text;
document.getElementById("linkimg0").href='/j/'+jsonContent.file;

jsonContent = JSON.parse(Get('/content/java-vs-c-plus-plus.json'));
document.getElementById("img1").src=jsonContent.img;
document.getElementById("title1").innerHTML=jsonContent.title;
document.getElementById("title1").href='/j/'+jsonContent.file;
document.getElementById("text1").innerHTML=jsonContent.text;
document.getElementById("linkimg1").href='/j/'+jsonContent.file;
