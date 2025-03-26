$(document).ready(function () {
    $("#showMessageBtn").click(function () {
        $(".content").fadeIn(500, function () {
            $("#messageContainer").css("opacity", "1"); // Show message smoothly
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
        bottom: "0px",
        position: "fixed",
        animation: "floatUp 3s ease-in-out",
        opacity: 1
    });

    $("body").append(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}
