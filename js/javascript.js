$(document).ready(function(){

//1
$( "p" ).click(function() {
	$( this ).slideUp();
});

//2
var count = 0 ;
$( "body" ).on( "click", "button", function() {
	$( this ).after( "<button>Haha, you click " + (++count) + " time(s) </button>" );
});

//3
$( "div.test" ).on({
	click: function() {
		$( this ).toggleClass( "active" );
	}, mouseenter: function() {
		$( this ).addClass( "inside" );
	}, mouseleave: function() {
		$( this ).removeClass( "inside" );
	}
});

//4
$( document.body ).click(function() {
	$( "div:hidden:first" ).fadeIn( "slow" );
});

$( "li" ).hover(
	function() {
		$( this ).append( $( "<span> ***</span>" ) );
	}, function() {
		$( this ).find( "span:last" ).remove();
	}
	);

$( "li.fade" ).hover(function() {
	$( this ).fadeOut( 100 );
	$( this ).fadeIn( 500 );
});

});
