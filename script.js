const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const pop = document.getElementById('pop-up');
const body = document.getElementById('body')

openMenu.addEventListener('click',()=>{
    closeMenu.style.display = "block"
    openMenu.style.display = "none";
    pop.style.top = '50%'
})
closeMenu.addEventListener('click',()=>{
    closeMenu.style.display = "none"
    openMenu.style.display = "block"
    pop.style.top = '-50%'
})

