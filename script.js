document.querySelectorAll(".menu li a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelectorAll(".menu li a").forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});
