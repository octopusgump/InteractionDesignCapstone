//red
//#581845
//#900C3F
//#C70039
//#FF5733
//#FFC30F

//blue
//#84A98C
//#52796F
//#354F52
//#2F3E46

//cryan
//#12E7F7
//#11DBEA
//#10C4D0
//#0C97A1
//#08646A

//gradual blue #00466a
//#05668D
//#028090
//#00A896
//#02C39A

//#FF5733 orange
//#05668D red
$(document).ready(function(){
//================Cover Page================
//var coverValue = $(".coverCell:hover").css({'background': getColorSet(0)});
var colorr="";
$( ".coverCell" ).click(function() {
	

	coverColor= getColorSet();
	$(".coverCell:hover").css('background', coverColor);
	if(coverColor=="#FF5733"){
		$(".coverBackground").delay(530).animate({top: "-=100%"}, 850);
	}
});

//================cells================
var score = 0;
var level = 1;
var coverWinText = 'You Won!'
$('.cell').click(function() {
   		var colorShow = getColorSet();
   		var textShow = "";
   		switch(colorShow){
   			case "#05668D":
   			textShow = 'one!';
   			break;
   			case "#028090":
   			textShow = 'two!';
   			break;
   			case "#00A896":
   			textShow = 'three!';
   			break;
   			case "#02C39A":
   			textShow = 'four!';
   			break;
   			case "#FF5733":
   			textShow = '+1!';
   			score = score + 1;
   			break;
   			default:
   			textShow = 'LOL';
   		}
   		//document.getElementById("show").innerHTML = textShow;
   		document.getElementById("score").innerHTML = score; 
   		$( "#" + getFourRandomDiv() ).after( "<div class='test'></div>" );
   		$('.test').css({'width': getRandomBoxWidth()});
   		$('.hintBox').css({"z-index": '10'}); 
   		//$('.hintBox').animate({opacity: '1'}, 300);
   		$(this).css({'background-color': colorShow});
   		
   		//$(this).animate({opacity : 0.3}, 300);
   		//WIN Text
   		// if (score >= 2){
   		// 	$(".coverBackground").delay(130).animate({top: "0"}, 850);
   		// 	document.getElementById("coverText").innerHTML = coverWinText; 
   		// }

   		//once the color turn red, 'this' cell will disappear
   		var cellOpacity = $( this ).css( "opacity" );
   		cellOpacity = 0.3;
   		 if (colorShow == "#FF5733"){
   			$(this).animate({opacity: cellOpacity}, 300);
   			$(this).prepend('<img id="addedImg" src="image/r2d2.gif" />')
   		 }
	
     	//change opacity
		// var opacityValue = $( this ).css( "opacity" );
		// opacityValue = 0.2;
  // 		if (getColorSet() == "#FF5733") {  
  // 			$(this).animate({opacity : opacityValue}, 300);
  // 		}
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
function getFourRandomDiv(){
	var allDiv =[
	"one",
	"two",
	"three",
	"four"	
	];
	var selectDiv= allDiv[Math.floor(Math.random() * 7)];
	return selectDiv;
}	
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
	console.log(selectColor);
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