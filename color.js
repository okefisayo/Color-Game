var head = document.querySelector("#header");
var view = document.querySelector("#viewColor");
var button1 = document.querySelector("#b1");
var button2 = document.querySelector("#b2");
var button3 = document.querySelector("#b3");
var showAns = document.querySelector("#answer");
var color = [];
var square = document.querySelectorAll(".square");
for( var i = 0; i < 6; i++){
	color[i]= generateColor();
}
var pickColor = color[colorPicker()];
button3.classList.add("selected");
view.textContent = pickColor;
for(var i = 0;i<square.length;i++){
	square[i].style.background = color[i];

	square[i].addEventListener("click", function(){
		 var clickedColor = this.style.background;
		if(clickedColor === pickColor){
			head.style.background = pickColor;
			showAns.textContent = "Correct";
			button1.textContent = "PLAY AGAIN";
			for(var j=0;j<square.length;j++){
				if(color.length === 3){
					if(j >2){
						square[j].style.background ="#4D5762" ;
					}
					else{
						square[j].style.background = pickColor;
					}
				}
				else{
					square[j].style.background = pickColor;
				}
				
			}
		}
		else
		{
			showAns.textContent = "Wrong";
			this.style.background = "#4D5762"; 
		}
	});
}
button1.addEventListener("click", function(){
	showAns.textContent = "";
	if(color.length === 3){
		for( var i = 0; i < 6; i++){
			if(i < 3){
				color[i]= generateColor();
				square[i].style.background = color[i];
			}
			else{
				square[i].style.background = "#4D5762";
			}
		}
	}
	else{
		for( var i = 0; i < 6; i++){
			color[i]= generateColor();
			square[i].style.background = color[i];
		}
	}
	
	pickColor = color[colorPicker()];
	view.textContent = pickColor;
	head.style.background = "#2F73B4";
	this.textContent = "NEW GAME";

});
button2.addEventListener("click", function(){
	button3.classList.remove("selected");
	button2.classList.add("selected");
	showAns.textContent = "";
	head.style.background = "#2F73B4";
	color = [];

	for(var i = 0;i <6;i++){
		square[i].style.background = "#4D5762";
	}
	for(var i = 0;i <3;i++){
		color[i]= generateColor();
		square[i].style.background = color[i];
	}
	pickColor = color[colorPicker()];
	view.textContent = pickColor;
});

button3.addEventListener("click", function(){
	button3.classList.add("selected");
	button2.classList.remove("selected");
	showAns.textContent = "";
	head.style.background = "#2F73B4";
	color = [];
	for(var i = 0;i <6;i++){
		color[i]= generateColor();
		square[i].style.background = color[i];
	}
	pickColor = color[colorPicker()];
	view.textContent = pickColor;
});
function generateColor(){
	var r = Math.floor(Math.random()*255+1);
	var g = Math.floor(Math.random()*255+1);
	var b = Math.floor(Math.random()*255+1);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function colorPicker(){
	var indexColor = Math.floor(Math.random()*color.length);
	return indexColor;
}
