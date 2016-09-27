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

//gradual blue
//#05668D
//#028090
//#00A896
//#95C1B8

//#F0F3BD

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

//change the puzzle shape
function getFourRandomDiv(){
	var allDiv =[
	"one",
	"two",
	"three",
	"four",
	"Lucky!",
	"Lucky!",
	"Lucky!"
	];
	var selectDiv= allDiv[Math.floor(Math.random() * 7)];
	return selectDiv;
}	
//get a random color set
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
		// "#011627",
		// "#FDFFFC",
		// "#2EC4B6",
		// "#E71D36",
		// "#FF9F1C"
		"#05668D",
		"#028090",
		"#00A896",
		"#95C1B8",
		"#F0F3BD"
];
var selectColor = colorSet[Math.floor(Math.random() * 4)];
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
   		document.getElementById("show").innerHTML = getFourRandomDiv();
   		$( "#" + getFourRandomDiv() ).after( "<div class='test'></div>" );
   		$('.test').css({'width': getRandomBoxWidth()});
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