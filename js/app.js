// @ts-nocheck
let sections = document.querySelectorAll("section");
let navbarItems = document.querySelectorAll('.main-navigation__item');

window.onscroll = () =>{
    sections.forEach(($=> {
        let top = window.scrollY;
        let offsetTop = $.offsetTop;
        let offsetHeight = $.offsetHeight;
        let id = $.getAttribute("id");

        if(top >= offsetTop && top < offsetTop + offsetHeight+400){
            navbarItems.forEach(j=> {
                j.classList.remove("active");
                if(j.querySelector('a').getAttribute('href') == '#' + id){
                    j.classList.add('active');
                }
            })
        }
    }))
}