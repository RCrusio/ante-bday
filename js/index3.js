var i = 0; 			
var images = [];	
var time = 4000;	
	 

images[0] = "https://cdn.pixabay.com/photo/2020/10/06/21/54/cake-5633461__480.png";
images[1] = "./img/1.jpg";
images[2] = "./img/2.jpg";
images[3] = "./img/3.jpg";
images[4] = "./img/4.jpg";
images[5] = "./img/5.jpg";
images[6] = "./img/6.jpg";


function changeImg(){
	document.slide.src = images[i];


	if(i < images.length - 1){

	  i++; 
	} else { 

		i = 0;
	}


	setTimeout("changeImg()", time);
}


window.onload=changeImg;