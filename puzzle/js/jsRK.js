$(document).ready(function(){
//================cells================
var score = 0;
var level = 1;
$('.cell').click(function() {
		//===change opacity===
		var opacityValue = $( this ).css( "opacity" );
		opacityValue = opacityValue - 0.3;
		$(this).animate({opacity : opacityValue}, 23);
		
		//click to add/lose score
		score = score + 1;
		if(opacityValue <= 0){
			score = score + 5;
			$(this).remove();
		}
		document.getElementById("score").innerHTML = score; 

		if (score >=40) {
			$('#pass').animate({'margin-left': '10px'});
			var audio = new Audio('sound/tada.mp3');
			audio.play();
		};
		//===Play Sound===
		var audio = new Audio('sound/cartoonWalking.mp3');
		audio.play();
	});
//================cells================
$('.button').click(function() {
	var audio = new Audio('sound/flyingpan.mp3');
	audio.play();
});

//================panel================
$( '.button #score' ).mouseover(function() {
	document.getElementById("score").innerHTML = 'score'; 
});
$( '.button #score' ).mouseout(function() {
	document.getElementById("score").innerHTML = score; 
});
$( '.button #level' ).mouseover(function() { 
	document.getElementById("level").innerHTML = 'YES!'; 
});


});


//================Add Div================
//#1 change color
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
//#2 change color
var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

//change the puzzle shape

//get a random color set
function getColorSet(){
	var colorSet = [
	"#05668D",
	"#028090",
	"#00A896",
	"#02C39A",
	"#FF5733"
	];

	var selectColor = colorSet[Math.floor(Math.random() * 5)];
	//console.log(selectColor);
	return selectColor;
}

function getRandomBoxWidth(){
	var boxWidthSet = [
	"20%",
	"25%",
	"33.3%",
	"50%",
	"'" + Math.floor(Math.random() * 100) + "'"
	];
	var selectBoxWidth = boxWidthSet[Math.floor(Math.random() * 5)];
	return selectBoxWidth;
}