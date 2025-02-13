document.addEventListener("DOMContentLoaded", function () {
    const pageTransition = document.createElement("div");
    pageTransition.classList.add("page-transition");
    document.body.appendChild(pageTransition);

    setTimeout(() => {
        pageTransition.remove();
    }, 1000);

    // Typing Animation
    const typingText = document.querySelector(".typing-text");
    if (typingText) {
        typingText.style.display = "inline-block";
    }

    // Smooth Scrolling
    document.querySelectorAll("a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Live Animations in Empty Space
    for (let i = 0; i < 20; i++) {
        let star = document.createElement("div");
        star.classList.add("floating-star");
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 5 + 2}s`;
        document.body.appendChild(star);
    }
});

// Floating animations
document.head.insertAdjacentHTML("beforeend", `
    <style>
        .floating-star {
            position: absolute;
            width: 5px;
            height: 5px;
            background: white;
            border-radius: 50%;
            opacity: 0.5;
            animation: floatStars linear infinite;
        }

        @keyframes floatStars {
            from { transform: translateY(0px); opacity: 1; }
            to { transform: translateY(-100vh); opacity: 0; }
        }
    </style>
`);
