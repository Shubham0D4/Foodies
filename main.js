document.addEventListener("DOMContentLoaded", () =>{
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = (end+start)/10,
        increament = end > start ? 1:-1,
        step = Math.abs(Math.floor(duration / range)),
        timer= setInterval(() => {
            current += increament;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step)

    }
    counter("count1", 0, 99999998, 8000);
    counter("count2", 100, 1000, 9998);
    counter("count3", 0, 99998, 400);
    counter("count4", 0, 9998, 98);
    
})

// =======active navbar=======
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }

}

let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})