let menu = document.getElementById('menu')
let x = document.getElementById('X')
let nav = document.getElementById('nav')

menu.addEventListener('click', () => {
  if(nav.style.display === 'none') {
    nav.style.display = 'block'
  }
})

x.addEventListener('click', () => {
  if(nav.style.display === 'block') {
    nav.style.display = 'none'
  }
})
