//gradual blue #00466a
//#05668D
//#028090
//#00A896
//#02C39A

//#FF5733 orange
//#05668D red

//write a function that change the cell width and height correspondingly
//through css and js
//so the screen width and height will never exceed from a single screen


//var cellWidth;
//if(cellWidth == ){
//
//}
$(document).ready(function(){
//================clock down================
var deadline = new Date(Date.parse(new Date()) + 40 * 1000);
initializeClock('clockdiv', deadline);

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
	var colorShow = getColorSet();
	var textShow = "";

   		//===Switch Statement Show Text and Score
   		// switch(colorShow){
   		// 	case "#05668D":
   		// 	textShow = 'one!';
   		// 	break;
   		// 	case "#028090":
   		// 	textShow = 'two!';
   		// 	break;
   		// 	case "#00A896":
   		// 	textShow = 'three!';
   		// 	break;
   		// 	case "#02C39A":
   		// 	textShow = 'four!';
   		// 	break;
   		// 	case "#FF5733":
   		// 	textShow = '+1!';
   		// 	score = score + 1;
   		// 	break;
   		// 	default:
   		// 	textShow = 'LOL';
   		// }
   		//document.getElementById("show").innerHTML = textShow;
   		//document.getElementById("score").innerHTML = score; 

   		//===Add Test Div===
   		var cellNum = $('.cell').length;
   		var cellNumSqrt = Math.sqrt(cellNum);
   		var cellWidth = Math.floor(100/cellNumSqrt);
   		//console.log(cellNum);
   		//console.log(cellWidth);
   		//$( "#" + getRandomDiv() ).after( "<div class='test'></div>" );
   		//$( this ).after( "<div class='test'></div>" );
   		//change width
   		$('.test').css({'width': cellWidth + '%'});
   		$('.test').css({'height': cellWidth + '%'});

   		$('.hintBox').css({"z-index": '10'}); 
   		//$('.hintBox').animate({opacity: '1'}, 300);

   		//===change box to a random color===
   		//$(this).css({'background-color': colorShow});

		//===change opacity===
		var opacityValue = $( this ).css( "opacity" );
		opacityValue = opacityValue - 0.2;
		$(this).animate({opacity : opacityValue}, 23);
		var opacityValueRound = Math.floor((100 - opacityValue.toFixed(2) * 100));
		document.getElementById("show").innerHTML = opacityValueRound + "%";
		if(opacityValue <= 0){
			document.getElementById("show").innerHTML = "Good Job!";
			score = score + 1;
			$(this).prepend('<img id="addedImg" src="image/r2d2.gif"/>');
			$(this).click(function() {
				score = score - 1;
				document.getElementById("show").innerHTML = "Lose Points!";
			});
			document.getElementById("score").innerHTML = score; 
		}
		//===Change Background Image===
		// if (score >= 12){
		// 	$('body').css('<img src="image/pixel2.gif"/>');
		// } 
		//===Lose Text===
		document.getElementById("coverText").innerHTML = "You Lose"; 
		$(".coverBackground").delay(40000).animate({top: "0"}, 850);

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

//===WIN Text===
$(document.body).mouseover(function() {
	if (score >= 10){
		$(".coverBackground").delay(100).animate({top: "0"}, 850);
		document.getElementById("coverText").innerHTML = "You Win!"; 
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

function getTimeRemaining(endtime) {
	//time remained
	var t = Date.parse(endtime) - Date.parse(new Date());
	//initial time
	var seconds = Math.floor((t / 1000) % 60);
	return {
		'total': t,
		'seconds': seconds
	};
}

function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		var t = getTimeRemaining(endtime);

		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}
