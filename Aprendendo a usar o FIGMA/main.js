const searchBox = document.querySelector(".search-box");
const navBtnContainer = document.querySelector(".nav-btn-container")
const searchBtn = document.querySelector(".search_icon")
const closeBtn = document.querySelector(".close_icon")

searchBtn.addEventListener("click", () => {
    searchBox.classList.add("active");
    navBtnContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    searchBox.classList.remove("active");
    navBtnContainer.classList.remove("active");
});