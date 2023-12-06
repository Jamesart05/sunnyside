const openModalFeatures = document.querySelector('.items1')
const openModalCompany = document.querySelector('.items2')
const modalFeatures = document.querySelector('.drop-nav1')
const modalCompany = document.querySelector('.drop-nav2')
const ham = document.querySelector('.ham')
const mobileModal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')
const arrow1 = document.querySelector('.arrow1')
const arrow2 = document.querySelector('.arrow2')
const mobileFeaturesModal = document.querySelector('.mobile_features')
const mobileCompanyModal = document.querySelector('.mobile_company')
const feature = document.querySelector('.feature')
const companys = document.querySelector('.companys')
const arrow3 = document.querySelector('.arrow3')
const arrow4 = document.querySelector('.arrow4')

openModalFeatures.addEventListener('click', () => {
    modalFeatures.classList.toggle('hidden')
    modalCompany.classList.add('hidden')
    arrow2.src = `images/icon-arrow-down.svg`
    if(modalFeatures.classList.contains('hidden')){
        console.log('yes');
        arrow1.src = `images/icon-arrow-down.svg`
    }else{
        arrow1.src = `images/icon-arrow-up.svg`
    }
})

openModalCompany.addEventListener('click', () => {
    modalCompany.classList.toggle('hidden')
    modalFeatures.classList.add('hidden')
    arrow1.src = `images/icon-arrow-down.svg`
    if(modalCompany.classList.contains('hidden')){
        console.log('yes');
        arrow2.src = `images/icon-arrow-down.svg`
    }else{
        arrow2.src = `images/icon-arrow-up.svg`
    }
    // ham.setAttribute("src", 'images/icon-arrow-down.svg')
})

ham.addEventListener('click', ()=>{
    mobileModal.classList.toggle('hidden')
})

closeModal.addEventListener('click', ()=>{
    mobileModal.classList.toggle('hidden')
})


mobileFeaturesModal.addEventListener('click', () => {
    feature.classList.toggle('hidden')
    companys.classList.add('hidden')
    arrow4.src = `images/icon-arrow-down.svg`
    if(feature.classList.contains('hidden')){
        console.log('yes');
        arrow3.src = `images/icon-arrow-down.svg`
    }else{
        arrow3.src = `images/icon-arrow-up.svg`
    }
})

mobileCompanyModal.addEventListener('click', () => {
    companys.classList.toggle('hidden')
    feature.classList.add('hidden')
    arrow3.src = `images/icon-arrow-down.svg`
    if(companys.classList.contains('hidden')){
        console.log('yes');
        arrow4.src = `images/icon-arrow-down.svg`
    }else{
        arrow4.src = `images/icon-arrow-up.svg`
    }
    // ham.setAttribute("src", 'images/icon-arrow-down.svg')
})