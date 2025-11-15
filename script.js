document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.querySelector(".dark-toggle");

    if(localStorage.getItem("dark") === "true"){
        document.documentElement.classList.add("dark");
    }

    toggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("dark", document.documentElement.classList.contains("dark"));
    });

    const links = document.querySelectorAll(".card-btn, a");

    links.forEach(link => {
        link.addEventListener("click", e => {
            if(link.target === "_blank") return;
            e.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = link.href;
            }, 300);
        });
    });
});

