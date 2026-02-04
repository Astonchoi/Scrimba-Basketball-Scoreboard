let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')

const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 10,
  shapes: ["star"],
  colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ["star"],
  });
}

function plusButton(btn){
    let buttonId = btn.id
    
    // home / guest
    let place = buttonId.split('-')[0]
    // 1 / 2 / 3
    let score = Number(buttonId.split('-')[2])
    
    // update the text of scoreEl
    if (place === 'home' && Number(homeScoreEl.textContent) < 10 && Number(guestScoreEl.textContent) < 10){
        homeScoreEl.textContent = Number(homeScoreEl.textContent) + score
        if (Number(homeScoreEl.textContent) >= 10){
            shoot()
        }
    }
    else if(place === 'guest' && Number(guestScoreEl.textContent) < 10 && Number(homeScoreEl.textContent) < 10){
        guestScoreEl.textContent = Number(guestScoreEl.textContent) + score
        if (Number(guestScoreEl.textContent) >= 10){
            shoot()
        }
    }
}

function newgame(){
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}

