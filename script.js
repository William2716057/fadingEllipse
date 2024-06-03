document.body.addEventListener("animationend", (ev) => {
    if (ev.animationName === "fadeIn") {
        ev.target.classList.add("fadeIn--after");
    }
});