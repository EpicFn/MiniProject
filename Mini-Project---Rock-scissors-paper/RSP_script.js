//html 요소 지정

const rock_Button = document.querySelector(".selector#rock_image");
const scissors_Button = document.querySelector(".selector#scissors_image");
const paper_Button = document.querySelector(".selector#paper_image");

const player_hand = document.querySelector(".hand_image#left_side_hand>i");
const AI_hand = document.querySelector(".hand_image#right_side_hand>i");

const win_lose = document.querySelector("#win-loss");

player_hand.classList.add("fa-regular");
AI_hand.classList.add("fa-regular");



//event 추가
    //마우스 오버 감지
rock_Button.addEventListener('mouseenter', function(){
    rock_Button.classList.add("mouse_entered_button");
} )
rock_Button.addEventListener('mouseleave', function(){
    rock_Button.classList.remove("mouse_entered_button");
})

scissors_Button.addEventListener('mouseenter', function(){
    scissors_Button.classList.add("mouse_entered_button");
} )
scissors_Button.addEventListener('mouseleave', function(){
    scissors_Button.classList.remove("mouse_entered_button");
})

paper_Button.addEventListener('mouseenter', function(){
    paper_Button.classList.add("mouse_entered_button");
} )
paper_Button.addEventListener('mouseleave', function(){
    paper_Button.classList.remove("mouse_entered_button");
})

    //클릭 감지

// fa-regular fa-hand-back-fist : rock
//fa-regular fa-hand-scissors : scisscors 
//fa-regular fa-hand : paper

function reset_image(hand){
    hand.classList.remove("fa-hand-back-fist");
    hand.classList.remove("fa-hand-scissors");
    hand.classList.remove("fa-hand");
}

function set_image_rock(hand){
    reset_image(hand);
    hand.classList.add("fa-hand-back-fist");
}

function set_image_scissors(hand){
    reset_image(hand);
    hand.classList.add("fa-hand-scissors");
}

function set_image_paper(hand){
    reset_image(hand);
    hand.classList.add("fa-hand");
}

// 0 <= x <= 1
// 0 <= x <= 2
// 1 <= x <= 3
function game(player_pick){
    //AI 패 변환
    var AI_pick = Math.floor(Math.random() * 3) + 1;
    switch(AI_pick){
        case 1:
            set_image_rock(AI_hand);
            break;
        case 2:
            set_image_scissors(AI_hand);
            break;
        case 3:
            set_image_paper(AI_hand);
            break;
        default:
            break;
    }

    //player 패 변환
    switch(player_pick){
        case 1:
            set_image_rock(player_hand);
            break;
        case 2:
            set_image_scissors(player_hand);
            break;
        case 3 :
            set_image_paper(player_hand);
            break;
        default:
            reset_image(player_hand);
    }

    


    //승부 결과 처리
    switch(player_pick - AI_pick){
        case 0 :
            win_lose.innerHTML = "DRAW";
            break;
        case -1:
            win_lose.innerHTML = "WIN";            
            break;
        case 2:
            win_lose.innerHTML = "WIN";            
            break;
        case 1:
            win_lose.innerHTML = "LOSE";            
            break;
        case -2:
            win_lose.innerHTML = "LOSE";            
            break;
        default:
            win_lose.innerHTML = "ERROR";   
            console.log(player_pick + " " + AI_pick);         
            //error
    }
}

rock_Button.addEventListener('click', function() {game(1)});
scissors_Button.addEventListener('click', function() {game(2)});
paper_Button.addEventListener('click', function() {game(3)});