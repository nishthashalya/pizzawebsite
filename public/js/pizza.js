// Navbar Highlight
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("#navbar a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if(link.getAttribute("href") === currentPage) {
            link.style.backgroundColor = "gold";
            link.style.color = "black";
            link.style.fontWeight = "bold";
        }
    });
});

// Animated Intro Text
window.addEventListener("DOMContentLoaded", function() {
    const introText = document.querySelector(".intro-text");
    introText.style.opacity = 0;
    introText.style.transform = "translateY(40px)";
    setTimeout(() => {
        introText.style.transition = "opacity 1s, transform 1s";
        introText.style.opacity = 1;
        introText.style.transform = "translateY(0)";
    }, 200);
});

//  Order Button Animation
const orderBtn = document.querySelector("button");
if(orderBtn) {
    orderBtn.addEventListener("click", function(e) {
        orderBtn.style.transform = "scale(1.1)";
        setTimeout(() => {
            orderBtn.style.transform = "scale(1)";
        }, 150);
    });
}

// 4. Footer Year Update
const footer = document.querySelector("footer");
if(footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; | All rights reserved @ ${year}`;
}
