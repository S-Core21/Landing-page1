let featuresMenu = document.getElementById('features')
let companyMenu = document.getElementById('company')
let featuresMenuDropdown = document.getElementById('list1')
let companyMenuDropdown = document.getElementById('list2')
let featuresArrowUp = document.getElementById('arrow-up1')
let companyArrowUp = document.getElementById('arrow-up2')
let featuresArrowDown = document.getElementById('arrow-down1')
let companyArrowDown = document.getElementById('arrow-down2')
let removeAllMenu = document.getElementById('menu')
let menuBar = document.getElementById('menu-bar')
let navBar = document.getElementById('navbar')
let querry = window.matchMedia('(max-width: 420px)')
let company = document.getElementById('company')
let career = document.getElementById('career')
let closeBar = document.getElementById('close-bar')


if(querry.matches){
navBar.style.cssText = 'display: none;' 
}


featuresMenu.addEventListener('click', () => {
    if(!querry.matches){
    featuresMenuDropdown.style.display = 'flex'
    featuresArrowDown.style.display = 'none'
    featuresArrowUp.style.display = 'block'
}else if(querry.matches){
    featuresMenuDropdown.style.display = 'flex'
    company.style.cssText = 
    'padding-top: 10.2rem'
    companyMenuDropdown.style.display = 'none'
    career.style.cssText = 
    ' padding-top: -7.5rem; padding-bottom: -.5rem'
}
})

companyMenu.addEventListener('click', () => {
    if(!querry.matches){
    companyMenuDropdown.style.display = 'flex'
    companyArrowDown.style.display = 'none'
    companyArrowUp.style.display = 'block'
}else if(querry.matches){
    featuresMenuDropdown.style.display = 'none'
    company.style.cssText = 
    'padding-top: -10.2rem'
    companyMenuDropdown.style.display = 'flex'
    career.style.cssText = 
    ' padding-top: 7.5rem; padding-bottom: .5rem'
}
})

removeAllMenu.addEventListener('mouseover', ()=> {
    companyMenuDropdown.style.display = 'none'
    featuresMenuDropdown.style.display = 'none'
    featuresArrowDown.style.display = 'block'
    featuresArrowUp.style.display = 'none'
    companyArrowDown.style.display = 'block'
    companyArrowUp.style.display = 'none'
})



menuBar.addEventListener('click', () => {
    menuBar.style.display = 'none'
    closeBar.style.display = 'block'
   navBar.style.cssText = 'display: flex;' 
   featuresMenuDropdown.style.display = 'none'
   companyMenuDropdown.style.display = 'none'
})

closeBar.addEventListener('click', () => {
    navBar.style.cssText = 'display: none;' 
    closeBar.style.display = 'none'
    menuBar.style.display = 'block'
    featuresMenuDropdown.style.display = 'none'
    companyMenuDropdown.style.display = 'none'
    company.style.cssText = 'padding-top: -10.2rem'
    career.style.cssText = 'padding-top: -7.5rem; padding-bottom: -.5rem'
})



