document.addEventListener("DOMContentLoaded", function () {
    var contactText = document.getElementById("contact-text");
    var contactPopup = document.getElementById("contact-popup");

    contactText.addEventListener("click", function () {
        togglePopup();
    });

    contactText.addEventListener("mouseover", function () {
        showPopup();
    });


    document.addEventListener("click", function (event) {
        if (!contactPopup.contains(event.target) && event.target !== contactText) {
            hidePopup();
        }
    });

    function showPopup() {
        contactPopup.style.display = "block";
    }

    function hidePopup() {
        contactPopup.style.display = "none";
    }

    function togglePopup() {
        if (contactPopup.style.display === "block") {
            hidePopup();
        } else {
            showPopup();
        }
    }
});
