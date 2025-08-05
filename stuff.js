document.querySelectorAll(".tab-content").forEach(content => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".tab-content").forEach(a => {
            a.classList.remove("active");
            a.setAttribute("aria-selected", "true");
        });
        document.querySelcetorAll('.tab-button').forEach(btn => {
            button.hidden = false;
        });

        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        const tabPanel = document.querySelector(btn.getAttribute("data-target"));
        tabPanel.hidden = false;

    });
});


var imgs = [
    "images/IMG_5982.png",
    "images/IMG_5983.png",
    "images/IMG_5986.png",
    "images/IMG_5990.png",
]

var btn = document.querySelector(".main-image-button")
var img = document.querySelector(".main-image")
var counter = 2;

btn.addEventListener("click", function() {
    img.src = imgs[counter]
    counter = (counter + 1) % imgs.length;
});