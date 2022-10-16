const icon = document.querySelector(".icon");
const ulLinks = document.querySelector("ul");
document.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
    if (e.target.parentElement === icon) {
        ulLinks.classList.toggle("show_links");
    } else {
        ulLinks.classList.remove("show_links");
    }
});
