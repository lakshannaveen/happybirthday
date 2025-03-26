$(document).ready(function () {
    $("#showMessageBtn").click(function () {
        $("#messageContainer").fadeIn(500, function () {
            $(".flower").css({ opacity: 1, transform: "scale(1)" });
            $(".message").css({ opacity: 1, transform: "translateY(0)" });
            
            // Generate floating hearts
            for (let i = 0; i < 10; i++) {
                createHeart();
            }
        });
    });
});

function createHeart() {
    let heart = $("<div class='heart'>❤️</div>");
    let xPos = Math.random() * ($(window).width() - 50);
    let delay = Math.random() * 3;

    heart.css({
        left: xPos + "px",
        bottom: 0,
        animationDelay: delay + "s"
    });

    $("body").append(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}
