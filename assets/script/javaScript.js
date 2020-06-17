const hamburger = document.querySelector(".hamburger");
const closebtn = document.querySelectorAll(".closebtn");


$(hamburger).click(function() {
    $(".sidenav").addClass("menu-width");
    $("#backdrop").addClass("backdrop");
    $("body").addClass("scroll-prevent");
});

$(closebtn).click(function() {
    $(".sidenav").removeClass("menu-width");
    $("#backdrop").removeClass("backdrop");
    $("body").removeClass("scroll-prevent");
});
  
$('span').hide();

$('.attractions-btn').on('click',function(event) {
    let dataValue = $(this).attr("data-value");
    let hiddenText = '.' + dataValue;

    $(hiddenText).slideToggle('slow');
});