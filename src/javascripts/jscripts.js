const express = require('express');
const router = express.Router();

import '../css/styles_montreal.css';

//<!-- H1_TYPEWRITER -->
		
var i = 0;
var txt = 'LET THE LIGHT BE';
var speed = 200;
function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typewriter").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
}



//<!-- ABOUT_EXPAND -->

$(document).ready(function(){
    typeWriter();
    $("#flip").click(function(){
        $("#panel").toggle('slow');
    });
});

//<!-- DROPDOWN_BTN -->

$(document).ready(function(){
    $("#dropdown_btn").click(function(){
        $("#dropdown_content").animate({
        height: 'toggle',
        width: 'toggle'
        }, 500);
    });
    $("#dropdown_content").click(function(){
        $("#dropdown_content").animate({
        height: 'toggle',
        }, 500);
    });
});

//<!--  SCROLL_UP -->

$(function () {
    $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 200,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 1000,           // Speed back to top (ms)
        easingType: 'easeOutBack',   // Scroll to top easing (see http://easings.net/)
        animation: 'slide',          // Fade, slide, none
        animationSpeed: 200,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: false, // Text for element, can contain HTML
        scrollTitle: "Scroll Up",    // Set a custom <a> title if required.
        scrollImg: true,             // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    });
});

//<!--  SCROLL_TO  -->

$(document).ready(function () {
    $('#aboutLink').click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 1000)
  }), 
    $('#servicesLink').click(function (){
      $('html, body').animate({
        scrollTop: $("#services").offset().top
      }, 1000)
    }),
    $('#portfolioLink').click(function (){
      $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
      }, 1000)
    }),
    $('#contactLink').click(function (){
        $('html, body').animate({
          scrollTop: $("#contact").offset().top
        }, 1000)
    }),
    $('div.works_so_far_box').click(function (){
        $('html, body').animate({
          scrollTop: $("#contact").offset().top
        }, 1000)
    })
  });

module.exports = jscripts;
 /*When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}*/
