var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 20
});
function footerclick() {
    const page6 = document.querySelector("#page6")
    const footerdiv = document.querySelector(".footer")
    page6.addEventListener("mouseenter", function(){
        footerdiv.style.zIndex = "999"
    })
    page6.addEventListener("mouseleave", function(){
        footerdiv.style.zIndex = "";
    });
}
// footerclick();


