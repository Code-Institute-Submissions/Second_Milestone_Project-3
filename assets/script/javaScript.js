const hamburger = document.querySelector(".hamburger");
const closebtn = document.querySelectorAll(".closebtn");

//Mobile Nav Bar Adds Class, Prevents On Scroll
$(hamburger).click(function() {
    $(".sidenav").addClass("menu-width");
    $("#backdrop").addClass("backdrop");
    $("body").addClass("scroll-prevent");
});

//Mobile Nav Bar Removes Class
$(closebtn).click(function() {
    $(".sidenav").removeClass("menu-width");
    $("#backdrop").removeClass("backdrop");
    $("body").removeClass("scroll-prevent");
});

//Hides All Span Elements
$('span').hide();

//Gets Value From Attr Of Clicked Button On Attraction Page, Unhides Span Element 
$('.attractions-btn').on('click',function(event) {
    let dataValue = $(this).attr("data-value");
    let hiddenText = '.' + dataValue;

    $(hiddenText).slideToggle('slow');
});