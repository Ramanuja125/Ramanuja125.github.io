
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
});

// EmailJS integration
document.getElementById("send").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form reload

    const serviceID = "service_tk0e1nz"; // Your EmailJS service ID
    const templateID = "template_9yfipwi"; // Replace with your EmailJS template ID
    const userID = "1SRRPZQ8Tp7xLh_Ub"; // Replace with your EmailJS public key

    // Retrieve form values
    const form = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, form)
        .then(function(response) {
            alert("Message sent successfully! Thank you.");
        }, function(error) {
            alert("Failed to send message. Please try again. Error: " + error.text);
        });
});