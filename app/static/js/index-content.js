var jsonContent;

jsonContent = JSON.parse(Get('/content/before-visting-grandma-and-after.json'));
document.getElementById("img0").src=jsonContent.img;
document.getElementById("title0").innerHTML=jsonContent.title;
document.getElementById("title0").href='/j/'+jsonContent.file;
document.getElementById("text0").innerHTML=jsonContent.text;
document.getElementById("linkimg0").href='/j/'+jsonContent.file;

jsonContent = JSON.parse(Get('/content/free-user-vs-paying-user.json'));
document.getElementById("img1").src=jsonContent.img;
document.getElementById("title1").innerHTML=jsonContent.title;
document.getElementById("title1").href='/j/'+jsonContent.file;
document.getElementById("text1").innerHTML=jsonContent.text;
document.getElementById("linkimg1").href='/j/'+jsonContent.file;

jsonContent = JSON.parse(Get('/content/i-hope-its-an-xbox-charismatic-gift.json'));
document.getElementById("img2").src=jsonContent.img;
document.getElementById("title2").innerHTML=jsonContent.title;
document.getElementById("title2").href='/j/'+jsonContent.file;
document.getElementById("text2").innerHTML=jsonContent.text;
document.getElementById("linkimg2").href='/j/'+jsonContent.file;

jsonContent = JSON.parse(Get('/content/java-vs-c-plus-plus.json'));
document.getElementById("img3").src=jsonContent.img;
document.getElementById("title3").innerHTML=jsonContent.title;
document.getElementById("title3").href='/j/'+jsonContent.file;
document.getElementById("text3").innerHTML=jsonContent.text;
document.getElementById("linkimg3").href='/j/'+jsonContent.file;

jsonContent = JSON.parse(Get('/content/trying-to-learn-any-programming-language.json'));
document.getElementById("img4").src=jsonContent.img;
document.getElementById("title4").innerHTML=jsonContent.title;
document.getElementById("title4").href='/j/'+jsonContent.file;
document.getElementById("text4").innerHTML=jsonContent.text;
document.getElementById("linkimg4").href='/j/'+jsonContent.file;

jsonContent = JSON.parse(Get('/content/what-do-graphic-designers-need-to-know.json'));
document.getElementById("img5").src=jsonContent.img;
document.getElementById("title5").innerHTML=jsonContent.title;
document.getElementById("title5").href='/j/'+jsonContent.file;
document.getElementById("text5").innerHTML=jsonContent.text;
document.getElementById("linkimg5").href='/j/'+jsonContent.file;
