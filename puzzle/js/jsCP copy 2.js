//gradual blue palette
//#00466a
//#05668D
//#028090
//#00A896
//#02C39A
//#F0F3BD
//#FF5733 orange

//elite color palette
//#114b5f
//#028090
//#e4fde1
//#456990
//#f45b69

//noice color palette
//#011627
//#fdfffc
//#2ec4b6
//#e71d36
//#ff9f1c

//pastel palette
//#06aed5
//#086788
//#f0c808
//#fff1d0
//#dd1c1a
//write a function that change the cell width and height correspondingly
//through css and js
//so the screen width and height will never exceed from a single screen


//var cellWidth;
//if(cellWidth == ){
//
//}
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
var coverWinText = 'You Win!'
$('.cell').click(function() {
	//var colorShow = getColorSet();

   		//===Switch Statement Show Text and Score
   		// switch(colorShow){
   		// 	case "#05668D":
   		// 	break;
   		// 	case "#028090":
   		// 	break;
   		// 	case "#00A896":
   		// 	break;
   		// 	case "#02C39A":
   		// 	break;
   		// 	case "#FF5733":
   		// 	score = score + 1;
   		// 	break;
   		// 	default:
   		// }

   		//document.getElementById("score").innerHTML = score; 

   		//===Add Test Div===
   		//var cellNum = $('.cell').length;
   		//var cellNumSqrt = Math.sqrt(cellNum);
   		//var cellWidth = Math.floor(100/cellNumSqrt);
   		//console.log(cellNum);
   		//console.log(cellWidth);

   		//===clickPalette--assign random ID a random color===
   		$( "#" + getRandomID() ).css({'background-color': getRandomColor()});
   		
   		//change width
   		//$('.test').css({'width': cellWidth + '%'});
   		//$('.test').css({'height': cellWidth + '%'});

		//===change opacity===
		//var opacityValue = $( this ).css( "opacity" );
		//opacityValue = opacityValue - 0.2;
		//$(this).animate({opacity : opacityValue}, 23);
	
		//click to add/lose score
// 		score = score + 1;
// 		if(opacityValue <= 0){
// 			score = score + 5;
// 			$(this).remove();
			
// 			//lose score
// 			// $(this).click(function() {
// 			// 	score = score - 1;
// 			// });
// }
document.getElementById("score").innerHTML = score; 
				//===Change Background Image===
		// if (score >= 12){
		// 	$(document.body).prepend('<img src="../image/pixel2.gif"/>');
		// } 

		//===Play Sound===
		var audio = new Audio('sound/cartoonWalking.mp3');
		audio.play();

   		//===change cell opacity===
   		// var cellOpacity = $( this ).css( "opacity" );
   		// cellOpacity = cellOpacity - 0.2;
   		//  if (colorShow == "#FF5733"){
   		// 	$(this).animate({opacity: cellOpacity}, 300);
   		// 	$(this).prepend('<img id="addedImg" src="image/r2d2.gif"/>');
   		//  }

     	//change opacity
		// var opacityValue = $( this ).css( "opacity" );
		// opacityValue = 0.2;
  // 		if (getColorSet() == "#FF5733") {  
  // 			$(this).animate({opacity : opacityValue}, 300);
  // 		}
});
//================cells================
$('.button').click(function() {
	var audio = new Audio('sound/flyingpan.mp3');
	audio.play();
});
//===WIN Text===
$(document.body).mouseover(function() {
	if (score >= 10){
		//$(".coverBackground").delay(100).animate({top: "0"}, 850);
		//document.getElementById("coverText").innerHTML = "You Win!"; 
	} 
});

//================panel================
$( '.button #score' ).mouseover(function() {
	document.getElementById("score").innerHTML = 'score'; 
});
$( '.button #score' ).mouseout(function() {
	document.getElementById("score").innerHTML = score; 
});
$( '.button #level' ).mouseover(function() { 
	document.getElementById("level").innerHTML = 'level'; 
});
$( '.button #level' ).mouseout(function() { 
	document.getElementById("level").innerHTML = level; 
});
$( '.button #seconds' ).mouseover(function() { 
	document.getElementById("seconds").innerHTML = 'seconds'; 
});
$( '.button #seconds' ).mouseout(function() { 
	document.getElementById("seconds").innerHTML = seconds; 
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
