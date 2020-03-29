$('.tab-resume').click(function () {
    $(".card,.work,.contact").hide('slow');
    $('.resume').show('slow');
    $('.l2').addClass('active');
    $(".l1,.l3,.l4").removeClass('active');
});
$('.tab-profile').click(function () {
    $(".resume,.work,.contact").hide('slow');
    $('.card').show('slow');
    $('.l1').addClass('active');
    $(".l3,.l2,.l4").removeClass('active');
    
});
$('.tab-work').click(function () {
    $(".card,.resume,.contact").hide('slow');
    $('.work').show('slow');
     $('.l3').addClass('active');
    $(".l1,.l2,.l4").removeClass('active');
});
$('.tab-contact').click(function () {
    $(".card,.work,.resume").hide('slow');
    $('.contact').show('slow');
    $('.l4').addClass('active');
    $(".l1,.l2,.l3").removeClass('active');
});

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Java Devloper.", "Web Designer."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});