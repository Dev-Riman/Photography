window.addEventListener("scroll", function() {
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", this.window.scrollY > 20);
});

let myBtn = document.getElementById("btn-back-to-top");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        myBtn.style.display = 'block';
    } else {
        myBtn.style.display = 'none';
    }
}

myBtn.addEventListener('click', backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}