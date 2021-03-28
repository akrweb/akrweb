let nav = document.querySelector(".nav_100");
let name_box = document.querySelector(".name_box_100");
let nav_list_box = document.querySelector(".nav_list_box_100");
let name_items = document.querySelectorAll(".name_items_100");
// let nav_bg = document.querySelector(".nav_bg");

// let med = window.matchMedia("max-width: 1024px");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
        nav.classList.add("nav");
        name_box.classList.add("name_box");
        nav_list_box.classList.add("nav_list_box");
        name_items.forEach(element => {
            element.classList.add("name_items");
            // element.style.animationPlayState = "paused";
        });
        // name_bg.classList.add("nav_bg");
    }
    else {
        nav.classList.remove("nav");
        name_box.classList.remove("name_box");
        nav_list_box.classList.remove("nav_list_box");
        name_items.forEach(element => {
            element.classList.remove("name_items");
            // element.style.animationPlayState = "running";
        });        // name_bg.classList.remove("nav_bg");

    }
});



// document.getElementById("home").addEventListener('click', () => {
//     this.classList.add("active");
//     this.style.color = "red";
// });

// x.addEventListener("click", () =>{
//     x.classLint.add("active");
// });

// function inp(){
//     const input = document.getElementById("Name");
//     input.style.backgroundColor = 'black';
//     input.style.userSelect = 'none';
// };
// let blogs = document.querySelectorAll(".blogs");
// blogs[1].addEventListener("click",() =>{
//     document.getElementById("blog_frame").style.zIndex = "1";
// });

function blog() {
    let blog_frame = document.getElementById("blog_frame");
    blog_frame.style.zIndex = "1";
    blog_frame.style.marginTop = "0";
    blog_frame.style.borderBottom = "2px solid rgba(255, 255, 255, 0.349)";
    blog_frame.style.transition = "0.7s";

};

window.addEventListener("scroll", () => {
    document.body.style.setProperty(
        "--scroll", window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
}, false
);

// for (let i = 0; i < 5; i++) {
//     x[i].addEventListener("click", () => {
//         for (let j = 0; j < 5; j++) {
//             if (x[j].classList.contains("active")) {
//                 x[j].classList.remove("active");
//             }
//         }
//         x[i].classList.add("active");
//     });
// };

let y = document.querySelectorAll(".project_items_link");
for (let i = 0; i < y.length; i++) {
    y[i].addEventListener("click", () => {
        for (let j = 0; j < y.length; j++) {
            if (y[j].classList.contains("act")) {
                y[j].classList.remove("act");
            }
        }
        y[i].classList.add("act");
    });
};

let x = document.querySelectorAll("#nav #nav_list_box .option_items");
window.addEventListener("scroll", () => {
    let win = scrollY;

    if (win >= 0 && win < 410) {
        for (let j = 0; j < 5; j++) {
            if (x[j].classList.contains("active")) {
                x[j].classList.remove("active");
            }
        }
        document.getElementById("Home").classList.add("active");
    }
    if (win >= 410 && win < 990) {
        for (let j = 0; j < 5; j++) {
            if (x[j].classList.contains("active")) {
                x[j].classList.remove("active");
            }
        }
        document.getElementById("Project").classList.add("active");
    }
    if (win >= 990 && win < 1525) {
        for (let j = 0; j < 5; j++) {
            if (x[j].classList.contains("active")) {
                x[j].classList.remove("active");
            }
        }
        document.getElementById("Service").classList.add("active");
    }
    if (win >= 1525 && win < 2100) {
        for (let j = 0; j < 5; j++) {
            if (x[j].classList.contains("active")) {
                x[j].classList.remove("active");
            }
        }
        document.getElementById("About").classList.add("active");
    }
    if (win >= 2100) {
        for (let j = 0; j < 5; j++) {
            if (x[j].classList.contains("active")) {
                x[j].classList.remove("active");
            }
        }
        document.getElementById("Contact").classList.add("active");
    }
});