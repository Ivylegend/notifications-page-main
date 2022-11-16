var read = document.querySelector(".read");
var unread = document.querySelectorAll(".unread");
var dot = document.querySelectorAll(".dot");
var number = document.querySelector(".number");

for (let i = 0; i < unread.length; i++) {
    read.addEventListener("click", function(){
        unread[i].style.backgroundColor = "white";
        dot[i].style.display = "none";
        number.textContent = 0;
        unread[i].classList.toggle("trans");
})

    unread[i].addEventListener("click", ()=>{
        unread[i].style.backgroundColor = "white";
        unread[i].classList.toggle("trans");
        dot[i].style.display = "none";
        number.textContent--;
        if(number.textContent < 0) {
            number.innerHTML = 0;
        }
    })

}