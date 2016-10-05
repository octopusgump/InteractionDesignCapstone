$(document).ready(function(){
//================cells================
var score = 0;
var level = 1;
$('.cell').click(function() {

	
	var randomEmoji = getRandomEmoji();
	$(this).prepend("<img class='floatImg' src='image/emoji/"+ randomEmoji + ".gif'/>");
	$('body').css({'background':"url(image/emoji/"+ randomEmoji + ".gif)"})
	$(this).css({'width': '70px'});
	$(this).css({'height': '70px'});
	$( this ).jqFloat();

	score = score + 1;
	document.getElementById("score").innerHTML = score; 

	if (score >=20) {
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
function getRandomEmoji(){
	var emojiSet = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11",
	"12",
	"13",
	"14",
	"15",
	"16"
	];

	var selectEmoji = emojiSet[Math.floor(Math.random() * 16)];
	//console.log(selectColor);
	return selectEmoji;
}
