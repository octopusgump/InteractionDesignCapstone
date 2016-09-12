$(document).ready(function(){
//================cover================   
$( ".spinner" ).click(function() {
	$(this).animate({opacity: 0}, 1000);
	$('#firstSentence').animate({opacity: 0}, 1000);
	$('#secondSentence').delay(900).animate({opacity: 1}, 1000);
});
$( ".coverButton" ).click(function() {
	$('.coverBackground').animate({top: "-=100%"}, 1000);
});
//================1================
$( "#one .ballOne" ).click(function() {
	$('#one .ballOne').jqFloat({
		width: 1200,
		height: 900,
		speed: 1200
	});
});

//================2================
$( "#two .triangleTwo" ).click(function() {
	$(this).animate({opacity: 0}, 1000);
	$(this).css({'z-index': '3'}, 1000);
	$('#two .ballTwo').delay(1000).animate({opacity: 1}, 1500);
	$('#two .ballTwo').css({'z-index': '4'}, 1000);
	$('#two .ballTwo').jqFloat({
		width: 1200,
		height: 900,
		speed: 150
	});
});
//================3================

//================4================
$( 'body' ).on( "click", ".fourButton", function() {
	$( this ).after(  "<h3>O</h3>");
});
//================5================
$( "#five .fiveButton" ).click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
$( "#five .fiveButton" ).click(function() {
	$(this).append("<h2>Haha</h2>");
});
//================6================
var contextSix;
var dx= 4;
var dy=4;
var y=150;
var x=10;
function drawSix(){
	contextSix= myCanvasSix.getContext('2d');
	contextSix.clearRect(0,0,900,600);
	contextSix.beginPath();
	contextSix.fillStyle="#f5f5dc";
	contextSix.arc(x,y,20,0,Math.PI*2,true);
	contextSix.closePath();
	contextSix.fill();
	if( x<0 || x>900)
		dx=-dx;
	if( y<0 || y>600)
		dy=-dy;
	x+=dx;
	y+=dy;
}
setInterval(drawSix,15); 
$('#six .sixButton').click(function() {
	$('#myCanvasSix').animate({ opacity: 1}, 510);
});
//================7================
var contextSeven;
function drawSeven(){
	contextSeven= myCanvasSeven.getContext('2d');
	contextSeven.clearRect(0,0,0,0);
	contextSeven.beginPath();
	contextSeven.fillStyle="#f5f5dc";
	contextSeven.arc(x,y,20,0,Math.PI*2,true);
	contextSeven.closePath();
	contextSeven.fill();
	if( x<0 || x>900)
		dx=-dx;
	if( y<0 || y>600)
		dy=-dy;
	x+=dx;
	y+=dy;
}
setInterval(drawSeven,23); 
$('#seven .sevenButton').click(function() {
	$('#myCanvasSeven').animate({ opacity: 1}, 510);
});
//================8================
$( "#eight .eightButton" ).click(function() {
	$("html, body").animate({ scrollTop: "-=3000px"}, 1500);
	$('#eight .eightButton h2').delay(100).animate({opacity: 1}, 1500);
	$("html, body").delay(1000).animate({ scrollTop: "+=3000px"}, 1500);
});
//================9================
$( "#nine .nineButton" ).click(function() {
	$('html, body').animate({ scrollTop: '+=800px'}, 800);
	$('#nine .nineButton h3').animate({opacity: 1}, 500);
});
//================10================
$( '#ten .tenButton' ).click(function() {
	$('#ten p').animate({ 'line-height': '50%'}, 1000);
});
//================11================
$('#eleven .elevenButton').click(function() {
	$('#eleven p').animate({ 'letter-spacing': '-5px'}, 1000);
});
//================12================
$('#twelve .twelveButton').click(function() {
	$('.ballTwelve').animate({left:'-=400px'}, 410);
	$('.ballTwelve').delay(500).animate({top:'+=300px'}, 310);
	$('.ballTwelve').delay(400).animate({left:'+=900px'}, 710);
	$('.ballTwelve').delay(300).animate({top:'-=300px'}, 310);
	$('.ballTwelve').delay(200).animate({left:'-=500px'}, 710);
});
//================13================
$('#thirteen .thirteenButton').click(function() {
	$('.ballThirteen').animate({opacity: 0}, 710);
	$('.ballThirteen').delay(200).animate({opacity: 1}, 710);
	$('.ballThirteen').animate({opacity: 0}, 710);
	$('.ballThirteen').delay(200).animate({opacity: 1}, 710);
	$('.ballThirteen').animate({opacity: 0}, 710);
	$('.ballThirteen').delay(200).animate({opacity: 1}, 710);
});
//================14================
$('#fourteen .fourteenButton').click(function() {
	$(this).animate({ opacity: 0}, 510);
	$(this).animate({ top: '+=300px'}, 510);
	$(this).animate({ opacity: 1}, 510);
	$(this).animate({ top: '-=300px'}, 510);
});
//================15================
$('#fifteen .fifteenButton').click(function() {
	$(this).animate({ width: '800px'}, 510);
	$(this).animate({ top: '200px'}, 510);
});
//================16================
$('#sixteen .sixteenButton').click(function() {
	$(this).animate({ 
		top: '250px',
		opacity: '0.5',
		height: '300px',
		width: '400px',
		color: '476e9e'
	}, 710);
	$(this).delay(500).animate({ 
		opacity: 1,
		height: '25px'
	}, 510);
});
//================17================
$('#seventeen .seventeenButton').click(function() {
	$(this).jqFloat({
		width: 1200,
		height: 1600,
		speed: 300
	}, 710);
});
//================18================
$('#eighteen .eighteenButton').click(function() {
	$(this).animate({ 
		fontSize:'3rem',
		height:'140px'
	}, 710);
});
//================19================
$('#nineteen .nineteenButton').click(function() {
	$('#nineteen h2').animate({ opacity:1}, 710);
	$('#nineteen h3').animate({ opacity:1}, 710);
	$(this).animate({ height:'70px'}, 710);
});
//================20================
$('#twenty .twentyButton').click(function() {
	$(this).animate({ 'border-radius':'10px'}, 710);
});
//================21================
$('#twentyOne .twentyOneButton').click(function() {
	$(this).animate({ height: '250'}, 710);
	$('#twentyOne h2').animate({ opacity:1}, 710);
	$('.ballTwentyOne').delay(500).animate({opacity: 1}, 710)
});
//================22================
$('#twentyTwo .twentyTwoButton').click(function() {
	$(this).animate({'border-radius':'5px'}, 710);
	$(this).animate({top:'200px'}, 710);
	$(this).animate({'border-radius':'50%'}, 710);
	$(this).animate({height:'100px'}, 710);
});
//================23================
$('#twentyThree .twentyThreeButton').click(function() {
	$(this).animate({ top:'210px'}, 710);
	$(this).animate({'border-radius':'30%'}, 1010);
	$(this).animate({ height: '200px'}, 310);
	$('.ballTwentyThreeOne').animate({top:'-200px'},710);
	$('.ballTwentyThreeTwo').animate({top:'-300px'},710);
	$('.ballTwentyThreeOne').animate({opacity:1},710);
	$('.ballTwentyThreeTwo').animate({opacity:1},710);
});
//================24================
$('.twentyFourButton').click(function(){
        if ($('.twentyFourButton h2').data('count')) { // already been clicked
            $('.twentyFourButton h2').data('count', $('.twentyFourButton h2').data('count') + 1); // add one
        } else { // first click
            $('.twentyFourButton h2').data('count', 1); // initialize the count
        }
        $('.twentyFourButton h2').html($('.twentyFourButton h2').data('count')); // show it
    });
//================25================
$('#twentyFive .twentyFiveButton').click(function() {
	$(this).animate({ top:'500px', left:'300px'}, 710);
	$(this).animate({ left:'-400px'}, 710);
	$(this).animate({ top:'-60px', left:'-300px'}, 710);
});
//================26================
$('#twentySix .twentySixButton').click(function() {
	$(this).animate({ top:'500px', left:'500px'}, 710);
	$(this).animate({ left:'-1500px'}, 710);
});
//================27================
$('#twentySeven .twentySevenButton').click(function() {
	var win = window.open('https://www.youtube.com/watch?v=07RuX-r5DqQ/', '_blank');
	if (win) {
    //Browser has allowed it to be opened
    win.focus();
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
}
});
//================28================
$('#twentyEight .twentyEightButton').click(function() {
	$('#twentyEight iframe').animate({ opacity:1}, 710);
});   
//================29================
$('#twentyNine .twentyNineButton').click(function() {
	$(this).css({ '-webkit-filter': "grayscale(100%)"});
});
//================30================
$('#thirty .thirtyButton').click(function() {
	$("html, body").animate({ scrollTop: "-=700px"}, 1000);
	$('#twentyNine .twentyNineButton').css({ '-webkit-filter': "grayscale(50%)"});
});
//================31================
$('#thirtyOne .thirtyOneButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================32================
$('#thirtyTwo .thirtyTwoButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================33================
$('#thirtyThree .thirtyThreeButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================34================
$('#thirtyFour .thirtyFourButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================35================
$('#thirtyFive .thirtyFiveButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================36================
$('#thirtySix .thirtySixButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================37================
$('#thirtySeven .thirtySevenButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================38================
$('#thirtyEight .thirtyEightButton').click(function() {
	$(this).css({ '-webkit-filter':'brightness(200%)'}, 710);
});
//================39================
$('#thirtyNine .thirtyNineButton').click(function() {
	$("html, body").animate({ scrollTop: "-=700px"}, 1000);
	$('#thirtyEight .thirtyEightButton').css({'-webkit-filter':'brightness(100%)'}, 710);
	$(this).css({'-webkit-filter':'brightness(50%)'}, 710);
	$( this ).after( "<h2>Oops, you recovered, but I am dark now...</h2>" );
});
// //================40================
// $('#forty .fortyButton').click(function() {
// 	$('#forty iframe').animate({ opacity:1}, 710);
// });
$('#forty .fortyButton').click(function() {
	$( '#toggle' ).toggle( "explode" );
});
//================41================
$('#fortyOne .fortyOneButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================42================
$('#fortyTwo .fortyTwoButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================43================
$('#fortyThree .fortyThreeButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================44================
$('#fortyFour .fortyFourButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================45================
$('#fortyFive .fortyFiveButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================46================
$('#fortySix .fortySixButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================47================
$('#fortySeven .fortySevenButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================48================
$('#fortyEight .fortyEightButton').click(function() {
	$(this).css({ '-webkit-filter':'contrast(300%)'}, 710);
});
//================49================
$('#fortyNine .fortyNineButton').click(function() {
	$("html, body").animate({ scrollTop: "-=700px"}, 1000);
	$('#fortyEight .fortyEightButton').css({ '-webkit-filter':'none'}, 710);
});
// //================50================
$('#fifty .fiftyButton').click(function() {
	$('#fifty iframe').animate({ opacity:1}, 710);
});
//================51================
$('#fiftyOne .fiftyOneButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================52================
$('#fiftyTwo .fiftyTwoButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================53================
$('#fiftyThree .fiftyThreeButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================54================
$('#fiftyFour .fiftyFourButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================55================
$('#fiftyFive .fiftyFiveButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================56================
$('#fiftySix .fiftySixButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================57================
$('#fiftySeven .fiftySevenButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================58================
$('#fiftyEight .fiftyEightButton').click(function() {
	$(this).css({ '-webkit-filter':'drop-shadow(8px 8px 10px #f25a41)'}, 710);
});
//================59================
$('#fiftyNine .fiftyNineButton').click(function() {
	$("html, body").animate({ scrollTop: "-=700px"}, 1000);
	$('#fiftyEight .fiftyEightButton').css({ '-webkit-filter':'none'}, 710);
});
// //================60================
$('#sixty .sixtyButton').click(function() {
	$('#sixty iframe').animate({ opacity:1}, 710);
});
//================61================
$('#sixtyOne .sixtyOneButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================62================
$('#sixtyTwo .sixtyTwoButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================63================
$('#sixtyThree .sixtyThreeButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================64================
$('#sixtyFour .sixtyFourButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================65================
$('#sixtyFive .sixtyFiveButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================66================
$('#sixtySix .sixtySixButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================67================
$('#sixtySeven .sixtySevenButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================68================
$('#sixtyEight .sixtyEightButton').click(function() {
	$(this).css({ '-webkit-filter':'blur(5px)'});
});
//================69================
$('#sixtyNine .sixtyNineButton').click(function() {
	$("html, body").animate({ scrollTop: "-=700px"}, 1000);
	$('#sixtyEight .sixtyEightButton').css({ '-webkit-filter':'none'});
});
// //================70================
$('#seventy .seventyButton').click(function() {
	$('#seventy iframe').animate({ opacity:1}, 710);
});
//================71================
$('#seventyOne .seventyOneButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================72================
$('#seventyTwo .seventyTwoButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================73================
$('#seventyThree .seventyThreeButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================74================
$('#seventyFour .seventyFourButton').click(function() {
	$(this).css({		
		'-webkit-animation-duration': '1s',
		'-webkit-animation-delay': '0.5s',
		'-webkit-animation-iteration-count': 'infinite'
	});
});
//================75================
$('#seventyFive .seventyFiveButton').click(function() {
	$('.ballContainer').css({ '-webkit-filter':'none'});
});
$('#seventyFive .seventyFiveButton').click(function() {
	$( this ).after( "<h2>Following buttons might ruin your screen, #75, #99 and cmd R will reset everything</h2>" );
});
//================76================
$('#seventySix .seventySixButton').click(function() {
	$('#seventySix').css({ '-webkit-filter':'sepia(100%)'});
});
//================77================
$('#seventySeven .seventySevenButton').click(function() {
	$('#seventySeven').css({ '-webkit-filter':'saturate(9)'});
});
//================78================
$('#seventyEight .seventyEightButton').click(function() {
	$(this).css({ '-webkit-filter':'hue-rotate(90deg)'}, 710);
});
//================79================
$('#seventyNine .seventyNineButton').click(function() {
	$("html, body").animate({ scrollTop: "-=700px"}, 1000);
	$('#seventyEight .seventyEightButton').css({ '-webkit-filter':'none'});
});
// //================80================
$('#eighty .eightyButton').click(function() {
	$('#eighty iframe').animate({ opacity:1}, 710);
});
//================81================
$('#eightyOne .eightyOneButton').click(function() {
	$('#eightyOne').css({ '-webkit-filter':'opacity(40%)'});
});
//================82================
$('#eightyTwo .eightyTwoButton').click(function() {
	$(this).css({ '-webkit-filter':'sepia(100%)'}, 710);
});
//================83================
$('#eightyThree .eightyThreeButton').click(function() {
	$("html, body").animate({ scrollTop: "-=700px"}, 1000);
	$('#eightyTwo .eightyTwoButton').css({ '-webkit-filter':'none'});
});
//================84================
$('#eightyFour .eightyFourButton').click(function() {
	$(this).css({ '-webkit-filter':'saturate(8)'});
});
//================85================
$('#eightyFive .eightyFiveButton').click(function() {
	$("html, body").animate({ scrollTop: "-=700px"}, 1000);
	$('#eightyFour .eightyFourButton').css({ '-webkit-filter':'none'});
});
//================86================
$('#eightySix .eightySixButton').click(function() {
	$(this).css({ '-webkit-filter':'opacity(40%)'});
});
//================87================
$('#eightySeven .eightySevenButton').click(function() {
	$("html, body").animate({ scrollTop: "-=700px"}, 1000);
	$('#eightySix .eightySixButton').css({ '-webkit-filter':'opacity(100%)'});
});
//================88================
$('#eightyEight .eightyEightButton').click(function() {
	$(this).css({ '-webkit-filter':'invert(100%)'});
});
//================89================
$('#eightyNine .eightyNineButton').click(function() {
	$("html, body").animate({ scrollTop: "-=700px"}, 1000);
	$('#eightyEight .eightyEightButton').css({ '-webkit-filter':'none'});
});
//================90================
$('#ninety .ninetyButton').click(function() {
	$('#ninety iframe').animate({ opacity:1}, 710);
});
//================91================html, body
$('#ninetyOne .ninetyOneButton').click(function() {
	$('#ninetyOne').css({ '-webkit-filter':'invert(100%)'});
});
//================92================
$('#ninetyTwo .ninetyTwoButton').click(function() {
	$('#ninetyTwo').css({ '-webkit-filter':'blur(8px)'});
});
//================93================
$('#ninetyThree .ninetyThreeButton').click(function() {
	$('#ninetyThree').css({ '-webkit-filter':'brightness(200%)'});
});
//================94================
$('#ninetyFour .ninetyFourButton').click(function() {
	$('#ninetyFour').css({ '-webkit-filter':'contrast(200%)'});
});
//================95================
$('#ninetyFive .ninetyFiveButton').click(function() {
	$('#ninetyFive iframe').animate({ opacity:1}, 710);
}); 
//================96================
$('#ninetySix .ninetySixButton').click(function() {
	$('#ninetySix').css({ '-webkit-filter':'drop-shadow(8px 8px 10px #f25a41)'});
});
//================97================
$('#ninetySeven .ninetySevenButton').click(function() {
	$('#ninetySeven').css({ '-webkit-filter':'grayscale(100%)'});
});
//================98================
$('#ninetyEight .ninetyEightButton').click(function() {
	$('#ninetyEight').css({ '-webkit-filter':'hue-rotate(90deg)'});
});
//================99================
$('#ninetyNine .ninetyNineButton').click(function() {
	$('.ballContainer').css({ '-webkit-filter':'none'});
});
// var count = 0 ;
// $( "body" ).on( "click", "button", function() {
// 	$( this ).after( "<button>Haha, you click " + (++count) + " time(s) </button>" );
// });


});
