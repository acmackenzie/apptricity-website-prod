// MOBILE MENU
$(document).ready(function(){
	$('#menu').slicknav();
	$('.slicknav_menu').prepend('<div class="logo"><a href="/" title="Back to Homepage"><img src="/images/apptricity-logo-white.png" alt="Apptricity Company Logo"></a></div>'); 
});



// HOMEPAGE SLIDER/CAROUSEL
$( document ).ready(function( $ ) {
    	$( '#slider' ).sliderPro({
                width: '100%', //100% width and height of viewport: https://github.com/bqworks/slider-pro/issues/20
                height: 300,
				forceSize: 'fullWidth',
                arrows: true,
                buttons: true,
                waitForLayers: true,
                thumbnailWidth: 243,
                thumbnailHeight: 85,
                thumbnailPointer: true,
                autoplay: true,
                autoScaleLayers: false,
                breakpoints: {
                    500: {
                        thumbnailWidth: 120,
                        thumbnailHeight: 50
                    }
                }
            });
        });



// LIGHTBOX POPUP WINDOW
$(document).ready(function(){
	//Examples of how to assign the Colorbox event to elements
	$(".infographic").colorbox({rel:'infographic'});
	$(".callbacks").colorbox({
		onOpen:function(){ alert('onOpen: colorbox is about to open'); },
		onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
		onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
		onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
		onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
	});
	
	//Example of preserving a JavaScript event for inline calls.
	$("#click").click(function(){ 
		$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
	return false;
	});
	});



// COLLAPSIBLE MENU
jQuery(document).ready(function(){

$(".collapsible > li > a").on("click", function(e){
      
	if(!$(this).hasClass("active")) {
		
      // hide any open menus and remove all other classes
		$(".collapsible li ul").slideUp(350);
		$(".collapsible li a").removeClass("active");
      
		// open our new menu and add the open class
		$(this).next("ul").slideDown(350);
		$(this).addClass("active");
		
	}else if($(this).hasClass("active")) {
		
		$(this).removeClass("active");
		$(this).next("ul").slideUp(350);
	}
});

});



// ACCORDION
$(document).ready(function() {
	
$(".accordion dt").addClass("active");
$(".accordion dd").hide();

$(".accordion dt").click(function(){
$(this).next("dd").slideToggle("slow")
.siblings("dd:visible").slideUp("slow");
$(this).toggleClass("active");
$(this).siblings("dt").removeClass("active");
});

});


// RANDOM CONTENT
if (document.all || document.getElementById){ //if IE4 or NS6+
document.write('<style type="text/css">\n')
document.write('.dyncontent{display: none;}\n')
document.write('</style>')
}
 
var curcontentindex=0
var messages=new Array()
 
function getElementByClass(classname){
var inc=0
var alltags=document.all? document.all : document.getElementsByTagName("*")
for (i=0; i<alltags.length; i++){
if (alltags[i].className==classname)
messages[inc++]=alltags[i]
}
}
 
function rotatecontent(){
//get current message index (to show it):
curcontentindex=(curcontentindex<messages.length-1)? curcontentindex+1 : 0
//get previous message index (to hide it):
prevcontentindex=(curcontentindex==0)? messages.length-1 : curcontentindex-1
messages[prevcontentindex].style.display="none" //hide previous message
messages[curcontentindex].style.display="block" //show current message
}
 
 
window.onload=function(){
if (document.all || document.getElementById){
getElementByClass("dyncontent")
setInterval("rotatecontent()", 9000)
}
}


// RANDOM IMAGES http://jsfiddle.net/jtbowden/UNZR5/1/
$(function() {
    $('#fader img:not(:first)').hide();
    $('#fader img').css('position', 'absolute');
    $('#fader img').css('top', '0');
    $('#fader img').css('left', '50%');
    $('#fader img').each(function() {
        var img = $(this);
        $('<img>').attr('src', $(this).attr('src')).load(function() {
            img.css('margin-left', -this.width / 2 + 'px');
        });
    });

    var pause = false;
    
    function fadeNext() {
        $('#fader img').first().fadeOut().appendTo($('#fader'));
        $('#fader img').first().fadeIn();
    }

    function fadePrev() {
        $('#fader img').first().fadeOut();
        $('#fader img').last().prependTo($('#fader')).fadeIn();
    }

    $('#fader, #next').click(function() {
        fadeNext();
    });

    $('#prev').click(function() {
        fadePrev();
    });

    $('#fader, .button').hover(function() {
        pause = true;
    },function() {
        pause = false;
    });

    function doRotate() {
        if(!pause) {
            fadeNext();
        }    
    }
    
    var rotate = setInterval(doRotate, 6000);
});



// Fancybox Lightbox
$(document).ready(function() {

	/* This is basic - uses default settings */
	
	$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true,
		'autoDimensions': false,
		'height': 180,
		'width': 500
	});

	/* Apply fancybox to multiple items */
	
	$("a.group").fancybox({
		'transitionIn'  :  'elastic',
		'transitionOut' :  'elastic',
		'speedIn'       :   600, 
		'speedOut'      :   200, 
		'overlayShow'   :   false
	});
	
});