//Gets Data From Contactus Page Form And Formats It Using Premade Template On EmailJS Website
//Sends Email To Page Admin Gmail

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("user_uMuGSSF3tAvdDaO6bEES3");  
})

let contactForm = $('#contactForm');

contactForm.submit(function(event){
    event.preventDefault();

    

    let service_id = "gmail";
    let formTemplate_id = "milestone_project2";

    contactForm.find("button").text("Sending...");
    emailjs.sendForm(service_id,formTemplate_id,contactForm[0]) //contactForm[0] gets values from input bars
    .then (function(){
        alert("Your email has been sent.");
        contactForm.find("button").text("Send");
    }, function(err){
        alert("Sending email has failed!\r\n Please try again later.\r\n Response:\n" + JSON.stringify(err));
        contactForm.find("button").text("Send");
    });
    return false;
});