const hamburger = document.querySelector(".hamburger");
const closebtn = document.querySelectorAll(".closebtn");




$(hamburger).click(function() {
    $(".sidenav").addClass("menu-width");
    $("#backdrop").addClass("backdrop");
})

$(closebtn).click(function() {
    $(".sidenav").removeClass("menu-width");
    $("#backdrop").removeClass("backdrop");
})
  