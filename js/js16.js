$(document).ready(function(){

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

function get16RandomDiv(){
	var allDiv =[
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
	"ten",
	"eleven",
	"twelve",
	"thirteen",
	"fourteen",
	"fifteen",
	"sixteen",
	"Lucky!",
	"Lucky!",
	"Lucky!",
	"Lucky!",
	"Lucky!"
	];
	var selectDiv= allDiv[Math.floor(Math.random() * 21)];
	return selectDiv;
}	

function getColorSet(){
	var colorSet = [
		// "#FFC116",
		// "#FF4E00",
		// "#DC0073",
		// "#008BF8",
		// "#89FC00",
		// "#06AED5",
		// "#086788",
		// "#F0C808",
		// "#FFF1D0",
		// "#DD1C1A",
		"#011627",
		"#FDFFFC",
		"#2EC4B6",
		"#E71D36",
		"#FF9F1C"
	];
	var selectColor = colorSet[Math.floor(Math.random() * 5)];
	return selectColor;
}
//================cells================
$('.cell').click(function() {
	//$(this).css({'background-color': getRandomColor()});
	$(this).css({'background-color': getColorSet()});
     	//change opacity
		// var opacityValue = $( this ).css( "opacity" );
		// opacityValue = opacityValue - 0.2;
  		// if(opacityValue < 0) opacityValue = 1;   
  		// $(this).animate({opacity : opacityValue}, 300);

   		//show opacity value
   		// document.getElementById("showOpacity").innerHTML = opacityValue;
   		document.getElementById("show").innerHTML = get16RandomDiv();
   		$( "#" + get16RandomDiv() ).after( "<div class='test'></div>" );
   		$('.hintBox').css({"z-index": '10'}); 
   		//$('.hintBox').animate({opacity: '1'}, 300);
   	});

//================mouseover & mouseout================
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
//show the first div's opacity, take it out, assign a new variable, and -0.1
//read the first div's opacity, store as a new variable, and put the new variable into the opacity