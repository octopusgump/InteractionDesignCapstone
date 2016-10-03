$(document).ready(function(){
	$('.cell').click(function() {
		var randomDiv = getRandomDiv();
		$( "#" + randomDiv ).jqFloat({
			width: 1200,
			height: 1000,
			speed: 3000
		});
	});
});
//get a random div
function getRandomDiv(){
	var allDiv =[
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
	];
	var selectDiv= allDiv[Math.floor(Math.random() * 100)];
	return selectDiv;
}	