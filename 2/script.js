const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const next2 = document.getElementById('next2')

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive = currentActive +1

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive = currentActive -1

    if(currentActive < 1) {
        currentActive = 1
    }
    
    update()
})





next2.addEventListener('click', () => {
    currentActive = currentActive +5

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length -1)  / (circles.length -1) * 100 + '%'

    if(currentActive == 1) {
        prev.disabled = true
    } else if(currentActive == circles.length) {
        next.disabled = true
        next2.disabled = true
        prev.disabled = false
    } else {
        prev.disabled = false
        next.disabled = false
        next2.disabled = false
        
    }
}