let menuItem = document.querySelectorAll('.menu__item');
let navItem = document.querySelectorAll('.nav__bar .nav__item');
let menuAnimation = anime.timeline({
easing: 'linear',
duration: 150,
autoplay:false,
});

menuAnimation.
add({
    targets: [menuItem[0]],
    translateY:8,
    rotate: 45,
},150)
.add({
    targets: [menuItem[1]],
    opacity:0, 
},150)
.add({
    targets: [menuItem[2]],
    translateY:-8, 
    rotate: -45,
},150)

.add({
    targets: '.nav__bar',
    opacity:[0,1],
    translateX:['100%','0%'],
},150)
.add({
    targets: [navItem, '.nav__bar .nav__button', 'nav__bar .nav__footer-social'],
    opacity:[0,1],
    translateX:['100%','0%'],
    delay: anime.stagger(50),
},150)


const menu = document.querySelector('.menu');
menu.addEventListener('click',()=>{
    menuAnimation.play();
    menuAnimation.finished.then(()=>{
        menuAnimation.reverse()
    })
})

const logoAnimation = anime.timeline({
    easing: 'linear',
    duration:500,
    autoplay:true,
})

logoAnimation
.add({
    targets:['.left', '.right'],
    scale: [0,1],
    delay: anime.stagger(100)
})

