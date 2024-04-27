const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function futureProhects() {
    const elemC = document.querySelector("#elem-container");
    const fixed = document.querySelector("#fixed-img");

    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    const elems = document.querySelectorAll(".elem")
    elems.forEach((e) => {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-img")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function allProjects() {
    const design = document.querySelector(".design");
    const project = document.querySelector(".project");
    const execution = document.querySelector(".Execution");

    const dpeImage = document.querySelector(".dpe-right-img");

    design.addEventListener("click", function () {
        dpeImage.src = "./assets/design.webp"
        design.classList.toggle("active");
        project.classList.remove("active");
        execution.classList.remove("active");
    })
    project.addEventListener("click", function () {
        dpeImage.src = "./assets/projects.webp"
        project.classList.toggle("active");
        design.classList.remove("active");
        execution.classList.remove("active");
    })
    execution.addEventListener("click", function () {
        dpeImage.src = "./assets/execution.webp"
        execution.classList.toggle("active");
        design.classList.remove("active");
        project.classList.remove("active");
    })
}

function footer() {
    const page6 = document.querySelector("#page6")
    const footerdiv = document.querySelector(".footer")
    page6.addEventListener("mouseenter", function(){
        footerdiv.style.zIndex = "999"
    })
    page6.addEventListener("mouseleave", function(){
        footerdiv.style.zIndex = "";
    });
}

futureProhects();
allProjects();
footer();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 20
});

const loader = document.querySelector("#loader");
setTimeout(()=>{
    loader.style.top = "-100%"
},3000)