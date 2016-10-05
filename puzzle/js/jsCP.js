$(document).ready(function(){
	//================Cover Page================
//var coverValue = $(".coverCell:hover").css({'background': getColorSet(0)});
$( ".coverCell" ).click(function() {
	var coverColor= getColorSet();
	$(".coverCell:hover").css('background', coverColor);
	if(coverColor=="#FF5733"){
		$(".coverBackground").delay(530).animate({top: "-=100%"}, 850);
	}
});

//================cells================
var score = 0;
var level = 1;
$('.cell').click(function() {
	//===clickPalette--assign random ID a random color===
	$( "#" + getRandomID() ).css({'background-color': getRandomColor()});

	//click to add/lose score
	score = score + 1;
	$(this).remove();

	document.getElementById("score").innerHTML = score; 
	if (score >=30) {
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

$('#pass').click(function() {
	$('.coverBackground').animate({'top': '0'});
	var audio = new Audio('sound/tada.mp3');
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
	document.getElementById("level").innerHTML = 'Win!'; 
});

//================Cell mouseover & mouseout================
$( '.cell' ).mouseover(function() {
	var animateThis = $(this).css('-webkit-animation-iteration-count');
	if(animateThis <= 2) animateThis = 3;
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
$( '.cell' ).mouseout(function() {
	$(this).css({		
		'-webkit-animation-iteration-count': '0'
	});
	//$('.hintBox').css({"z-index": '0'}); 
	//$('.hintBox').animate({opacity: '0'}, 700);
});

//================test================
$( '.test' ).mouseover(function() {
	$(this).css({
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite',
		'background-color': 'white'
	});
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

function getRandomID(){
	var allID =[
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
	'seventeen',
	'eighteen',
	'nineteen',
	'twenty',
	'twentyOne',
	'twentyTwo',
	'twentyThree',
	'twentyFour',
	'twentyFive',
	'twentySix',
	'twentySeven',
	'twentyEight',
	'twentyNine',
	'thirty',
	'thirtyOne',
	'thirtyTwo',
	'thirtyThree',
	'thirtyFour',
	'thirtyFive',
	'thirtySix',
	'thirtySeven',
	'thirtyEight',
	'thirtyNine',
	'forty',
	'fortyOne',
	'fortyTwo',
	'fortyThree',
	'fortyFour',
	'fortyFive',
	'fortySix',
	'fortySeven',
	'fortyEight',
	'fortyNine',
	'fifty',
	'fiftyOne',
	'fiftyTwo',
	'fiftyThree',
	'fiftyFour',
	'fiftyFive',
	'fiftySix',
	'fiftySeven',
	'fiftyEight',
	'fiftyNine',
	'sixty',
	'sixtyOne',
	'sixtyTwo',
	'sixtyThree',
	'sixtyFour',
	'sixtyFive',
	'sixtySix',
	'sixtySeven',
	'sixtyEight',
	'sixtyNine',
	'seventy',
	'seventyOne',
	'seventyTwo',
	'seventyThree',
	'seventyFour',
	'seventyFive',
	'seventySix',
	'seventySeven',
	'seventyEight',
	'seventyNine',
	'eighty',
	'eightyOne',
	'eightyTwo',
	'eightyThree',
	'eightyFour',
	'eightyFive',
	'eightySix',
	'eightySeven',
	'eightyEight',
	'eightyNine',
	'ninety',
	'ninetyOne',
	'ninetyTwo',
	'ninetyThree',
	'ninetyFour',
	'ninetyFive',
	'ninetySix',
	'ninetySeven',
	'ninetyEight',
	'ninetyNine',
	'oneHundred'
	];
	var selectID= allID[Math.floor(Math.random() * 100)];
	return selectID;
}	
