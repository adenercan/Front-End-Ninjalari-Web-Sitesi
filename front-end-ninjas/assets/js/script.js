let i = 0;

const changeTheme = document.querySelector("#change-theme");
const page = document.querySelector(".page");
const hamburger = document.querySelector("#nav");
const navMenu = document.querySelector(".nav-Menu");
const themeIcon = document.querySelector(".material-symbols-outlined");
const carousel = document.querySelector(".carousel");

changeTheme.addEventListener("click", themeChange);
hamburger.addEventListener("click", openMenu);

function openMenu(){
    navMenu.classList.toggle("active");
}

function themeChange(){
    page.classList.toggle("darkTheme");
    
    const isDark = page.classList.contains("darkTheme");
    
    if(isDark){
        
        if(themeIcon){
            themeIcon.textContent = "light_mode";
        }
        localStorage.setItem("site_theme", "dark");
    }
    else{
        if(themeIcon){
            themeIcon.textContent = "dark_mode";
        }
        localStorage.setItem("site_theme", "light");
    }
    
}


function loadSavedTheme(){
    const savedTheme = localStorage.getItem("site_theme");
    
    if(savedTheme === "dark"){
        page.classList.toggle("darkTheme");
        if(themeIcon){
            themeIcon.textContent = "light_mode" ;
        }
        else{
            themeIcon.textContent = "dark_mode" ;
        }
    }
}

loadSavedTheme();

if (carousel) {
    const prev = document.querySelector(".carousel-btn.prev-btn");
    const next = document.querySelector(".carousel-btn.next-btn");
    const totalCards = carousel.children.length;
    
    function getCardWidth(){
        const card = carousel.children[0];
        const style = getComputedStyle(card);
        return card.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
    }
    
    function updateCarousel(){
        const cardWidth = getCardWidth();
        carousel.style.transform = `translateX(${-i * cardWidth}px)`;
    }
    
    next.addEventListener("click", () => {
        console.log("buton");
        
        i = (i + 1) % totalCards;
        updateCarousel();
    });
    
    prev.addEventListener("click", () => {
        i = (i - 1 + totalCards) % totalCards;
        updateCarousel();
    });
    
    window.addEventListener("resize", updateCarousel);
    window.addEventListener("load", updateCarousel);
}
