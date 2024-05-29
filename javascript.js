let alertt = document.getElementById('alert');
let tasanim = document.getElementById('tasanim');
let tasanim_2 = document.getElementById('tasanim_2');
let song_1 = document.getElementById("song_1"); 
let song_2 = document.getElementById("song_2"); 
let song_3 = document.getElementById("song_3"); 
let song_4 = document.getElementById("song_4"); 
let song_5 = document.getElementById("song_beffortas"); 
let song_victory = document.getElementById('song_7');
let song_snake = document.getElementById('song_snake');
let ball = document.getElementById('ball');
let ball2 = document.getElementById('ball_2');
let demo = document.getElementById('demo');
let demo_2 = document.getElementById('demo_2');
let zzz = document.getElementById('zzz');
let xxx = document.getElementById('xxx');
let roll = document.getAnimations('roll');
let inejctor = document.getElementById('inejctor');
let song_6 = document.getElementById('song_6');
let inejctor_button = document.getElementById('inejctor_button');
let tas_injector = document.getElementById('tas_injector');
let modal = document.getElementById('modal');
let main_game_shower = document.getElementById('main_game_shower')
let stop_btn = 0;
let gv ;
let vg;
let score = 1;

let score_2 = 1;
let tt;
let online_1 = 1;
let online_2= 0;
let player_1234 = 0;

const tas = [1,2,3,4,5,6]
const faketas = [1,2,3,4,5,6]


function player_1(){
    song_6.play(); 
    player_1234 = 1;
if(player_1234 === 1){
    song_6.play(); 
    tasanim.classList.remove('hidden')
    inejctor_button.innerHTML ='  <button onclick="online_player_1()""  class="button rr1 "  id="btn"> Roll  </button>'
    ball.classList.remove('hidden');
    modal.classList.add('hidden');
    main_game_shower.classList.remove('hidden');
}

}
function player_2(){
    song_6.play(); 
    player_1234 = 2;
if(player_1234 === 2){
    inejctor_button.innerHTML ='<button onclick="online_player_2()""  class="button rr1 "  id="btn"> Roll  </button>'
    tasanim.classList.remove('hidden')
    tasanim_2.classList.remove('hidden')
    ball.classList.remove('hidden');
    ball2.classList.remove('hidden');
    modal.classList.add('hidden');
    main_game_shower.classList.remove('hidden');

}
}

function online_player_2(){
     if(online_1 === 1){
        online_1 = 0;
        online_2 = 1;
   
        start_cooldown();
     }
     else if (online_2 === 1){
        online_2 = 0;
        online_1 = 1;
       
        start_cooldown_2();
     }
}
function online_player_1(){
    if(online_1 === 1){
  
       start_cooldown();
    }

}

function start_cooldown(){ 
    
    random_numer_tasbazi()
    setTimeout(clear,1000)
    document.getElementById("btn").disabled = true; 
    setTimeout(doit,1001)
}
function random_numer_tasbazi(){

    tt = setInterval(randomnumbashow,25);

}
function clear(){
    clearInterval(tt)
}

function randomnumbashow(){

    rr = Math.floor(Math.random() * 6);
 zzz.innerHTML = faketas[rr];

}
function btn_stopper(){
    
    document.getElementById("btn").disabled = false;
    document.getElementById('btn').classList.remove('cap');
    tasanim.classList.remove('cap');
    tasanim.classList.remove('aaa');
}

function doit(){
  
    setTimeout(btn_stopper,3000)
    tasanim.classList.add('aaa');
    tasanim.classList.add('cap');
    document.getElementById('btn').classList.add('cap');
    if(player_1234 === 2){
        document.getElementById('btn').classList.add('rr2');
    }
   
    r  = Math.floor(Math.random() * 6);
  score += tas[r]
gv = score; 
zzz.innerHTML = tas[r];
song_1.play(); 


if( gv === 2){
    ball.style.left ='85px'
    ball.style.top ='20px'
}
else if(gv === 3){
    ball.style.left ='150px'
    ball.style.top ='20px'
}
else if(gv === 4){
    song_2.play(); 
    score += 21 ;
    ball.style.left ='215px'
    ball.style.top ='20px'
 
   
   
    
}
else if(gv === 5){
    ball.style.left ='280px'
    ball.style.top ='20px'
}
else if(gv === 6){
    ball.style.left ='345px'
    ball.style.top ='20px'
}
else if(gv === 7){
    ball.style.left ='410px'
    ball.style.top ='20px'
}
else if(gv === 8){
    ball.style.left ='470px'
    ball.style.top ='20px'
}
else if(gv === 9){
    ball.style.left ='535px'
    ball.style.top ='20px'
}
else if(gv === 10){
    ball.style.left ='600px'
    ball.style.top ='20px'
}
else if(gv === 11){
    ball.style.left ='600px'
    ball.style.top ='-40px'
}
else if(gv === 12){
    ball.style.left ='535px'
    ball.style.top ='-40px'
}
else if(gv === 13){
    song_2.play(); 
    score +=33  ;
    ball.style.left ='470px'
    ball.style.top ='-40px'
    
}
else if(gv === 14){
    ball.style.left ='410px'
    ball.style.top ='-40px'
}
else if(gv === 15){
    ball.style.left ='345px'
    ball.style.top ='-40px'
}
else if(gv === 16){
    ball.style.left ='280px'
    ball.style.top ='-40px'
}
else if(gv === 17){
    ball.style.left ='215px'
    ball.style.top ='-40px'
}
else if(gv === 18){
    ball.style.left ='150px'
    ball.style.top ='-40px'
}
if( gv === 19){
    ball.style.left ='85px'
    ball.style.top ='-40px'
}
if( gv === 20){
    ball.style.left ='20px'
    ball.style.top ='-40px'
}

else if(gv === 30){
    ball.style.left ='600px'
    ball.style.top ='-100px'
}

else if(gv === 29){
    ball.style.left ='535px'
    ball.style.top ='-100px'
}
else if(gv === 28){
    ball.style.left ='470px'
    ball.style.top ='-100px'
}
else if(gv === 27){
    ball.style.left ='410px'
    ball.style.top ='-100px'
}
else if(gv === 26){
    ball.style.left ='345px'
    ball.style.top ='-100px'
}
else if(gv === 25){
    ball.style.left ='280px'
    ball.style.top ='-100px'
}
else if(gv === 24){
    ball.style.left ='215px'
    ball.style.top ='-100px'
}
else if(gv === 23){
    ball.style.left ='150px'
    ball.style.top ='-100px'
}
if( gv === 22){
    ball.style.left ='85px'
    ball.style.top ='-100px'
}
if( gv === 21){
    ball.style.left ='20px'
    ball.style.top ='-100px'
}


else if(gv === 31){
    ball.style.left ='600px'
    ball.style.top ='-165px'
}

else if(gv === 32){
    ball.style.left ='535px'
    ball.style.top ='-165px'
}
else if(gv === 33){
    score += 16;
    song_2.play()
    ball.style.left ='470px'
    ball.style.top ='-165px'
}
else if(gv === 34){
    ball.style.left ='410px'
    ball.style.top ='-165px'
}
else if(gv === 35){
    ball.style.left ='345px'
    ball.style.top ='-165px'
}
else if(gv === 36){
    ball.style.left ='280px'
    ball.style.top ='-165px'
}
else if(gv === 37){
    ball.style.left ='215px'
    ball.style.top ='-165px'
}
else if(gv === 38){
    ball.style.left ='150px'
    ball.style.top ='-165px'
}
if( gv === 39){
    ball.style.left ='85px'
    ball.style.top ='-165px'
}
if( gv === 40){
    song_3.play(); 
    song_snake.play(); 
    score -= 37
    ball.style.left ='20px'
    ball.style.top ='-165px'
}

else if(gv === 50){
    score += 19;
    song_2.play()
    ball.style.left ='600px'
    ball.style.top ='-225px'
}

else if(gv === 49){
    ball.style.left ='535px'
    ball.style.top ='-225px'
}
else if(gv === 48){
    ball.style.left ='470px'
    ball.style.top ='-225px'
}
else if(gv === 47){
    ball.style.left ='410px'
    ball.style.top ='-225px'
}
else if(gv === 46){
    ball.style.left ='345px'
    ball.style.top ='-225px'
}
else if(gv === 45){
    ball.style.left ='280px'
    ball.style.top ='-225px'
}
else if(gv === 44){
    ball.style.left ='215px'
    ball.style.top ='-225px'
}
else if(gv === 43){
    ball.style.left ='150px'
    ball.style.top ='-225px'
}
if( gv === 42){
    song_2.play(); 
    score += 21;
    ball.style.left ='85px'
    ball.style.top ='-225px'
    
}
if( gv === 41){
    ball.style.left ='20px'
    ball.style.top ='-225px'
}


else if(gv === 51){
    ball.style.left ='600px'
    ball.style.top ='-285PX'
}

else if(gv === 52){
    ball.style.left ='535px'
    ball.style.top ='-285PX'
}
else if(gv === 53){
    ball.style.left ='470px'
    ball.style.top ='-285PX'
}
else if(gv === 54){
    ball.style.left ='410px'
    ball.style.top ='-285PX'
}
else if(gv === 55){
    ball.style.left ='345px'
    ball.style.top ='-285PX'
}
else if(gv === 56){
    ball.style.left ='280px'
    ball.style.top ='-285PX'
}
else if(gv === 57){
    ball.style.left ='215px'
    ball.style.top ='-285PX'
}
else if(gv === 58){
    ball.style.left ='150px'
    ball.style.top ='-285PX'
}
if( gv === 59){
    ball.style.left ='85px'
    ball.style.top ='-285PX'
}
if( gv === 60){
    ball.style.left ='20px'
    ball.style.top ='-285PX'
}

else if(gv === 70){
    ball.style.left ='600px'
    ball.style.top ='-345px'
}

else if(gv === 69){
    ball.style.left ='535px'
    ball.style.top ='-345px'
}
else if(gv === 68){
    ball.style.left ='470px'
    ball.style.top ='-345px'
}
else if(gv === 67){
    ball.style.left ='410px'
    ball.style.top ='-345px'
}
else if(gv === 66){
    ball.style.left ='345px'
    ball.style.top ='-345px'
}
else if(gv === 65){
    ball.style.left ='280px'
    ball.style.top ='-345px'
}
else if(gv === 64){
    ball.style.left ='215px'
    ball.style.top ='-345px'
}
else if(gv === 63){
    ball.style.left ='150px'
    ball.style.top ='-345px'
}
if( gv === 62){
    song_2.play(); 
    score +=19;
    ball.style.left ='85px'
    ball.style.top ='-345px'
}
if( gv === 61){
    ball.style.left ='20px'
    ball.style.top ='-345px'
}
else if(gv === 71){
    ball.style.left ='600px'
    ball.style.top ='-405px'
}

else if(gv === 72){
    ball.style.left ='535px'
    ball.style.top ='-405px'
}
else if(gv === 73){
    ball.style.left ='470px'
    ball.style.top ='-405px'
}
else if(gv === 74){
    song_2.play(); 
    score +=18;
    ball.style.left ='410px'
    ball.style.top ='-405px'
}
else if(gv === 75){
    ball.style.left ='345px'
    ball.style.top ='-405px'
}
else if(gv === 76){
    ball.style.left ='280px'
    ball.style.top ='-405px'
}
else if(gv === 77){
    ball.style.left ='215px'
    ball.style.top ='-405px'
}
else if(gv === 78){
    ball.style.left ='150px'
    ball.style.top ='-405px'
}
if( gv === 79){
    ball.style.left ='85px'
    ball.style.top ='-405px'
}
if( gv === 80){
    ball.style.left ='20px'
    ball.style.top ='-405px'
}
else if(gv === 90){
    ball.style.left ='600px'
    ball.style.top ='-470px'
}

else if(gv === 89){
    song_3.play(); 
    song_snake.play(); 
    score -= 36;
    ball.style.left ='535px'
    ball.style.top ='-470px'
}
else if(gv === 88){
    ball.style.left ='470px'
    ball.style.top ='-470px'
}
else if(gv === 87){
    song_3.play(); 
    song_snake.play(); 
    score -= 50
    ball.style.left ='410px'
    ball.style.top ='-470px'
}
else if(gv === 86){
    ball.style.left ='345px'
    ball.style.top ='-470px'
}
else if(gv === 85){
    ball.style.left ='280px'
    ball.style.top ='-470px'
}
else if(gv === 84){
    ball.style.left ='215px'
    ball.style.top ='-470px'
}
else if(gv === 83){
    ball.style.left ='150px'
    ball.style.top ='-470px'
}
if( gv === 82){
    ball.style.left ='85px'
    ball.style.top ='-470px'
}
if( gv === 81){
    ball.style.left ='20px'
    ball.style.top ='-470px'
}
else if(gv === 71){
    ball.style.left ='600px'
    ball.style.top ='-405px'
}

else if(gv === 72){
    ball.style.left ='535px'
    ball.style.top ='-405px'
}
else if(gv === 73){
    ball.style.left ='470px'
    ball.style.top ='-405px'
}
else if(gv === 74){
    ball.style.left ='410px'
    ball.style.top ='-405px'
}
else if(gv === 75){
    ball.style.left ='345px'
    ball.style.top ='-405px'
}
else if(gv === 76){
    ball.style.left ='280px'
    ball.style.top ='-405px'
}
else if(gv === 77){
    ball.style.left ='215px'
    ball.style.top ='-405px'
}
else if(gv === 78){
    ball.style.left ='150px'
    ball.style.top ='-405px'
}
if( gv === 79){
    ball.style.left ='85px'
    ball.style.top ='-405px'
}
if( gv === 80){
    ball.style.left ='20px'
    ball.style.top ='-405px'
}
else if(gv === 91){
    ball.style.left ='600px'
    ball.style.top ='-535px'
}

else if(gv === 92){
    ball.style.left ='535px'
    ball.style.top ='-535px'
}
else if(gv === 93){
    ball.style.left ='470px'
    ball.style.top ='-535px'
}
else if(gv === 94){
    ball.style.left ='410px'
    ball.style.top ='-535px'
}
else if(gv === 95){
    ball.style.left ='345px'
    ball.style.top ='-535px'
}



else if(gv === 96){
    song_3.play(); 
    song_snake.play(); 
    score -= 55;
    ball.style.left ='280px'
    ball.style.top ='-535px'
}
else if(gv === 97){
    ball.style.left ='215px'
    ball.style.top ='-535px'
}
else if(gv === 98){
    ball.style.left ='150px'
    ball.style.top ='-535px'
}
if( gv === 99){
    ball.style.left ='85px'
    ball.style.top ='-535px'
}
if( gv === 100){
    ball.style.left ='20px'
    ball.style.top ='-535px'
    song_4.play()
    setTimeout(restart_page,3000);
    stop_btn = 1;
    tasanim.classList.add('cap');
    document.getElementById('btn').classList.add('cap');
    alertt.classList.remove('rr2');
    alertt.classList.add('rr1');
    alertt.innerHTML = 'shoma barande shodid';
}

else if (gv > 100 && tas[r] === 1){
    score -= tas[r]
    alertt.classList.remove('rr2');
    alertt.classList.add('rr1');
    alertt.innerHTML = 'dobare tas bendaz ';
}
else if (gv > 100 && tas[r] === 2){
    score -= tas[r]
    alertt.classList.remove('rr2');
    alertt.classList.add('rr1');
    alertt.innerHTML = 'dobare tas bendaz ';
}
else if (gv > 100 && tas[r] === 3){
    score -= tas[r]
    alertt.classList.remove('rr2');
    alertt.classList.add('rr1');
    alertt.innerHTML = 'dobare tas bendaz ';
}
else if (gv > 100 && tas[r] === 4){
    score -= tas[r]
    alertt.classList.remove('rr2');
    alertt.classList.add('rr1');
    alertt.innerHTML = 'dobare tas bendaz ';
}
else if (gv > 100 && tas[r] === 5){
    score -= tas[r];
    alertt.classList.remove('rr2');
    alertt.classList.add('rr1');
    alertt.innerHTML = 'dobare tas bendaz ';
}
else if (gv > 100 && tas[r] === 6){
    score -= tas[r]
    alertt.classList.remove('rr2');
    alertt.classList.add('rr1');
    alertt.innerHTML = 'dobare tas bendaz ';
}
 if(gv === 99 && tas[r] > 1){
    score = 99;
}
 if(gv === 98 && tas[r] > 2){
    score = 98;
}





}


//////////////////////////////////////////

function start_cooldown_2(){ 
    
    random_numer_tasbazi_2()
    setTimeout(clear_2,1000)
    document.getElementById("btn").disabled = true; 
    setTimeout(doit2,1001)
}
function random_numer_tasbazi_2(){

    ttt = setInterval(randomnumbashow_2,25);

}
function clear_2(){
    clearInterval(ttt)
   
}

function randomnumbashow_2(){
    rr = Math.floor(Math.random() * 6);
 xxx.innerHTML = faketas[rr];
}
function btn_stopper_2(){
    document.getElementById("btn").disabled = false;
    document.getElementById('btn').classList.remove('cap');
    tasanim_2.classList.remove('cap');
    tasanim_2.classList.remove('aaa');
}


function doit2(){
    tasanim_2.classList.add('aaa');
    document.getElementById('btn').classList.remove('rr2');
    document.getElementById('btn').classList.add('rr1');
    setTimeout(btn_stopper_2,3000)
    tasanim_2.classList.add('cap');
    document.getElementById('btn').classList.add('cap');
    r_2  = Math.floor(Math.random() * 6);
  score_2 += tas[r_2]
vg = score_2; 
xxx.innerHTML = tas[r_2];

song_1.play(); 


if( vg === 2){
    ball2.style.left ='85px'
    ball2.style.top ='20px'
}
else if(vg === 3){
    ball2.style.left ='150px'
    ball2.style.top ='20px'
}
else if(vg === 4){
    song_2.play(); 
    score_2 += 21 ;
    ball2.style.left ='215px'
    ball2.style.top ='20px'
 
   
   
    
}
else if(vg === 5){
    ball2.style.left ='280px'
    ball2.style.top ='20px'
}
else if(vg === 6){
    ball2.style.left ='345px'
    ball2.style.top ='20px'
}
else if(vg === 7){
    ball2.style.left ='410px'
    ball2.style.top ='20px'
}
else if(vg === 8){
    ball2.style.left ='470px'
    ball2.style.top ='20px'
}
else if(vg === 9){
    ball2.style.left ='535px'
    ball2.style.top ='20px'
}
else if(vg === 10){
    ball2.style.left ='600px'
    ball2.style.top ='20px'
}
else if(vg === 11){
    ball2.style.left ='600px'
    ball2.style.top ='-40px'
}
else if(vg === 12){
    ball2.style.left ='535px'
    ball2.style.top ='-40px'
}
else if(vg === 13){
    song_2.play(); 
    score_2 +=33  ;
    ball2.style.left ='470px'
    ball2.style.top ='-40px'
    
}
else if(vg === 14){
    ball2.style.left ='410px'
    ball2.style.top ='-40px'
}
else if(vg === 15){
    ball2.style.left ='345px'
    ball2.style.top ='-40px'
}
else if(vg === 16){
    ball2.style.left ='280px'
    ball2.style.top ='-40px'
}
else if(vg === 17){
    ball2.style.left ='215px'
    ball2.style.top ='-40px'
}
else if(vg === 18){
    ball2.style.left ='150px'
    ball2.style.top ='-40px'
}
if( vg === 19){
    ball2.style.left ='85px'
    ball2.style.top ='-40px'
}
if( vg === 20){
    ball2.style.left ='20px'
    ball2.style.top ='-40px'
}

else if(vg === 30){
    ball2.style.left ='600px'
    ball2.style.top ='-100px'
}

else if(vg === 29){
    ball2.style.left ='535px'
    ball2.style.top ='-100px'
}
else if(vg === 28){
    ball2.style.left ='470px'
    ball2.style.top ='-100px'
}
else if(vg === 27){
    ball2.style.left ='410px'
    ball2.style.top ='-100px'
}
else if(vg === 26){
    ball2.style.left ='345px'
    ball2.style.top ='-100px'
}
else if(vg === 25){
    ball2.style.left ='280px'
    ball2.style.top ='-100px'
}
else if(vg === 24){
    ball2.style.left ='215px'
    ball2.style.top ='-100px'
}
else if(vg === 23){
    ball2.style.left ='150px'
    ball2.style.top ='-100px'
}
if( vg === 22){
    ball2.style.left ='85px'
    ball2.style.top ='-100px'
}
if( vg === 21){
    ball2.style.left ='20px'
    ball2.style.top ='-100px'
}


else if(vg === 31){
    ball2.style.left ='600px'
    ball2.style.top ='-165px'
}

else if(vg === 32){
    ball2.style.left ='535px'
    ball2.style.top ='-165px'
}
else if(vg === 33){
    score_2 += 16;
    song_2.play()
    ball2.style.left ='470px'
    ball2.style.top ='-165px'
}
else if(vg === 34){
    ball2.style.left ='410px'
    ball2.style.top ='-165px'
}
else if(vg === 35){
    ball2.style.left ='345px'
    ball2.style.top ='-165px'
}
else if(vg === 36){
    ball2.style.left ='280px'
    ball2.style.top ='-165px'
}
else if(vg === 37){
    ball2.style.left ='215px'
    ball2.style.top ='-165px'
}
else if(vg === 38){
    ball2.style.left ='150px'
    ball2.style.top ='-165px'
}
if( vg === 39){
    ball2.style.left ='85px'
    ball2.style.top ='-165px'
}
if( vg === 40){
    song_3.play(); 
    song_snake.play(); 
    score -= 37
    ball2.style.left ='20px'
    ball2.style.top ='-165px'
}

else if(vg === 50){
    score_2 += 19;
    song_2.play()
    ball2.style.left ='600px'
    ball2.style.top ='-225px'
}

else if(vg === 49){
    ball2.style.left ='535px'
    ball2.style.top ='-225px'
}
else if(vg === 48){
    ball2.style.left ='470px'
    ball2.style.top ='-225px'
}
else if(vg === 47){
    ball2.style.left ='410px'
    ball2.style.top ='-225px'
}
else if(vg === 46){
    ball2.style.left ='345px'
    ball2.style.top ='-225px'
}
else if(vg === 45){
    ball2.style.left ='280px'
    ball2.style.top ='-225px'
}
else if(vg === 44){
    ball2.style.left ='215px'
    ball2.style.top ='-225px'
}
else if(vg === 43){
    ball2.style.left ='150px'
    ball2.style.top ='-225px'
}
if( vg === 42){
    song_2.play(); 
    score_2 += 21;
    ball2.style.left ='85px'
    ball2.style.top ='-225px'
    
}
if( vg === 41){
    ball2.style.left ='20px'
    ball2.style.top ='-225px'
}


else if(vg === 51){
    ball2.style.left ='600px'
    ball2.style.top ='-285PX'
}

else if(vg === 52){
    ball2.style.left ='535px'
    ball2.style.top ='-285PX'
}
else if(vg === 53){
    ball2.style.left ='470px'
    ball2.style.top ='-285PX'
}
else if(vg === 54){
    ball2.style.left ='410px'
    ball2.style.top ='-285PX'
}
else if(vg === 55){
    ball2.style.left ='345px'
    ball2.style.top ='-285PX'
}
else if(vg === 56){
    ball2.style.left ='280px'
    ball2.style.top ='-285PX'
}
else if(vg === 57){
    ball2.style.left ='215px'
    ball2.style.top ='-285PX'
}
else if(vg === 58){
    ball2.style.left ='150px'
    ball2.style.top ='-285PX'
}
if( vg === 59){
    ball2.style.left ='85px'
    ball2.style.top ='-285PX'
}
if( vg === 60){
    ball2.style.left ='20px'
    ball2.style.top ='-285PX'
}

else if(vg === 70){
    ball2.style.left ='600px'
    ball2.style.top ='-345px'
}

else if(vg === 69){
    ball2.style.left ='535px'
    ball2.style.top ='-345px'
}
else if(vg === 68){
    ball2.style.left ='470px'
    ball2.style.top ='-345px'
}
else if(vg === 67){
    ball2.style.left ='410px'
    ball2.style.top ='-345px'
}
else if(vg === 66){
    ball2.style.left ='345px'
    ball2.style.top ='-345px'
}
else if(vg === 65){
    ball2.style.left ='280px'
    ball2.style.top ='-345px'
}
else if(vg === 64){
    ball2.style.left ='215px'
    ball2.style.top ='-345px'
}
else if(vg === 63){
    ball2.style.left ='150px'
    ball2.style.top ='-345px'
}
if( vg === 62){
    song_2.play(); 
    score_2 +=19;
    ball2.style.left ='85px'
    ball2.style.top ='-345px'
}
if( vg === 61){
    ball2.style.left ='20px'
    ball2.style.top ='-345px'
}
else if(vg === 71){
    ball2.style.left ='600px'
    ball2.style.top ='-405px'
}

else if(vg === 72){
    ball2.style.left ='535px'
    ball2.style.top ='-405px'
}
else if(vg === 73){
    ball2.style.left ='470px'
    ball2.style.top ='-405px'
}
else if(vg === 74){
    song_2.play(); 
    score_2 +=18;
    ball2.style.left ='410px'
    ball2.style.top ='-405px'
}
else if(vg === 75){
    ball2.style.left ='345px'
    ball2.style.top ='-405px'
}
else if(vg === 76){
    ball2.style.left ='280px'
    ball2.style.top ='-405px'
}
else if(vg === 77){
    ball2.style.left ='215px'
    ball2.style.top ='-405px'
}
else if(vg === 78){
    ball2.style.left ='150px'
    ball2.style.top ='-405px'
}
if( vg === 79){
    ball2.style.left ='85px'
    ball2.style.top ='-405px'
}
if( vg === 80){
    ball2.style.left ='20px'
    ball2.style.top ='-405px'
}
else if(vg === 90){
    ball2.style.left ='600px'
    ball2.style.top ='-470px'
}

else if(vg === 89){
    song_3.play(); 
    song_snake.play(); 
    score_2 -= 36;
    ball2.style.left ='535px'
    ball2.style.top ='-470px'
}
else if(vg === 88){
    ball2.style.left ='470px'
    ball2.style.top ='-470px'
}
else if(vg === 87){
    song_3.play(); 
    song_snake.play(); 
    score_2 -= 50
    ball2.style.left ='410px'
    ball2.style.top ='-470px'
}
else if(vg === 86){
    ball2.style.left ='345px'
    ball2.style.top ='-470px'
}
else if(vg === 85){
    ball2.style.left ='280px'
    ball2.style.top ='-470px'
}
else if(vg === 84){
    ball2.style.left ='215px'
    ball2.style.top ='-470px'
}
else if(vg === 83){
    ball2.style.left ='150px'
    ball2.style.top ='-470px'
}
if( vg === 82){
    ball2.style.left ='85px'
    ball2.style.top ='-470px'
}
if( vg === 81){
    ball2.style.left ='20px'
    ball2.style.top ='-470px'
}
else if(vg === 71){
    ball2.style.left ='600px'
    ball2.style.top ='-405px'
}

else if(vg === 72){
    ball2.style.left ='535px'
    ball2.style.top ='-405px'
}
else if(vg === 73){
    ball2.style.left ='470px'
    ball2.style.top ='-405px'
}
else if(vg === 74){
    ball2.style.left ='410px'
    ball2.style.top ='-405px'
}
else if(vg === 75){
    ball2.style.left ='345px'
    ball2.style.top ='-405px'
}
else if(vg === 76){
    ball2.style.left ='280px'
    ball2.style.top ='-405px'
}
else if(vg === 77){
    ball2.style.left ='215px'
    ball2.style.top ='-405px'
}
else if(vg === 78){
    ball2.style.left ='150px'
    ball2.style.top ='-405px'
}
if( vg === 79){
    ball2.style.left ='85px'
    ball2.style.top ='-405px'
}
if( vg === 80){
    ball2.style.left ='20px'
    ball2.style.top ='-405px'
}
else if(vg === 91){
    ball2.style.left ='600px'
    ball2.style.top ='-535px'
}

else if(vg === 92){
    ball2.style.left ='535px'
    ball2.style.top ='-535px'
}
else if(vg === 93){
    ball2.style.left ='470px'
    ball2.style.top ='-535px'
}
else if(vg === 94){
    ball2.style.left ='410px'
    ball2.style.top ='-535px'
}
else if(vg === 95){
    ball2.style.left ='345px'
    ball2.style.top ='-535px'
}



else if(vg === 96){
    song_3.play(); 
    song_snake.play(); 
    score -= 55;
    ball2.style.left ='280px'
    ball2.style.top ='-535px'
}
else if(vg === 97){
    ball2.style.left ='215px'
    ball2.style.top ='-535px'
}
else if(vg === 98){
    ball2.style.left ='150px'
    ball2.style.top ='-535px'
}
if( vg === 99){
    ball2.style.left ='85px'
    ball2.style.top ='-535px'
}
if( vg === 100){
    ball2.style.left ='20px'
    ball2.style.top ='-535px'
    song_4.play()
    setTimeout(restart_page,3000);
    document.getElementById("btn").disabled = true; 
    tasanim.classList.add('cap');
    document.getElementById('btn').classList.add('cap');
    alertt.classList.remove('rr1');
    alertt.classList.add('rr2');
    alertt.innerHTML = 'shoma barande shodid';
}

else if (vg > 100 && tas[r_2] === 1){
    score_2 -= tas[r_2]
    alertt.classList.remove('rr1');
    alertt.classList.add('rr2');
    alertt.innerHTML = 'dobare tas bendaz ';
}
else if (vg > 100 && tas[r_2] === 2){
    score_2 -= tas[r_2]
    alertt.classList.remove('rr1');
    alertt.classList.add('rr2');
    alertt.innerHTML = 'dobare tas bendaz ';
}
else if (vg > 100 && tas[r_2] === 3){
    score_2 -= tas[r_2]
    alertt.classList.remove('rr1');
    alertt.classList.add('rr2');
    alertt.innerHTML = 'dobare tas bendaz ';
}
else if (vg > 100 && tas[r_2] === 4){
    score_2 -= tas[r_2]
    alertt.classList.remove('rr1');
    alertt.classList.add('rr2');
    alertt.innerHTML = 'dobare tas bendaz ';
}
else if (vg > 100 && tas[r_2] === 5){
    score_2 -= tas[r_2];
    alertt.classList.remove('rr1');
    alertt.classList.add('rr2');
    alertt.innerHTML = 'dobare tas bendaz ';
}
else if (vg > 100 && tas[r_2] === 6){
    score_2 -= tas[r_2]
    alertt.classList.remove('rr1');
    alertt.classList.add('rr2');
    alertt.innerHTML = 'dobare tas bendaz ';
}
 if(vg === 99 && tas[r_2] > 1){
    score_2 = 99;
}
 if(vg === 98 && tas[r_2] > 2){
    score_2 = 98;
}





}



function restart_page(){
    location.reload()
}