function preloaderBlock() {
    function a(a) {
        a.preventDefault()
    }
    var b = document.querySelector(".preloader");
}

window.addEventListener && window.addEventListener("DOMContentLoaded", function () {
        document.body.className += " dom-loaded", preloaderBlock()
    }),
    window.addEventListener && window.addEventListener("load", function () {
        setTimeout(function () {
            document.body.className += " loaded";
        }, 3500)
    })

//initialize AOS transitions
AOS.init({
    duration: 1000,
    mirror: false,
})
