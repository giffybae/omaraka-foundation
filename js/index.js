var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++; 
    if (slideIndex > slides.length) {
        slideIndex = 1}
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
}


// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function(event) {
//     if (!event.target.matches(".dropbtn")) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains("show")) {
//                 openDropdown.classList.remove("show");
//             }
//         }
//     }
// };

function myFunction() {
    var x= document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display ="block"
    }
}


function initMap() {
    var location = {lat: -25.363, lng:131.044};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom:4,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}


console.log (userValue)
function messageBtn() {
    document.getElementsByClassName('email').value = alert("We have received your message")
}
