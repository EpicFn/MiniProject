let current_value = 0;
let previous_value = 0;

// html 요소 지정

const Cbutton = document.querySelectorAll(".button");
const previous_value_screen = document.querySelector(".post_calculation");
const current_value_screen = document.querySelector(".calculation");


// event 추가
    //마우스 오버 감지

for(let i=0; i<Cbutton.length; i++){
Cbutton[i].addEventListener('mouseenter', function(){
    Cbutton[i].classList.add("mouse_entered"); 
});

Cbutton[i].addEventListener('mouseleave',function(){
    Cbutton[i].classList.remove("mouse_entered");
});

Cbutton[i].addEventListener('click', function(event){button_action(event);});
}


//함수
function button_action(event) {
    var classes = event.target.classList;

    if(classes.contains("number_button")){
        console.log(parseInt(event.target.innerHTML));
        current_value = current_value*10 + parseInt(event.target.innerHTML);
    }    

    set_value();
}

function set_value(){
    current_value_screen.innerHTML = current_value;
    previous_value_screen.innerHTML = previous_value;
}


//초기화
set_value();