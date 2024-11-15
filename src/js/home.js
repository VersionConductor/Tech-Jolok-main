// Add a active link 
const list = document.getElementById("navbar_link");
const links = list.querySelectorAll("a");


links.forEach((nav,index) => {
    nav.addEventListener("click", () => {
    
        links.forEach(content => {
             content.classList.remove("active");
            });
        nav.classList.add("active");
    });
});
