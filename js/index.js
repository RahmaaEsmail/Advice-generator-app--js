'use strict'
const adviceElement = document.querySelector('.advice')
const diceIcon = document.querySelector('.dice')
const copyIcon = document.querySelector('.copy')
const whatsappIcon = document.querySelector('.whatsapp')
const telegramIcon = document.querySelector('.telegram')
const pageUrl = location.href;


const getAdvice = async ()=> {
    const randomNum = Math.floor(Math.random() * 100)
    const data = await fetch(`https://api.adviceslip.com/advice/${randomNum}`);
    const result  = await data.json()
    
    setAdviceToBox(result.slip.advice)
} 


const setAdviceToBox = (data) => {
    adviceElement.innerHTML = data
}


const copyTextToclipboard = ()=> {
    navigator.clipboard.writeText(adviceElement.innerHTML)
    addCopyTooltip()
}

const addCopyTooltip = ()=> {
    copyIcon.dataset.content = 'Copied';
}

const replaceCopyTooltip = () => {
    copyIcon.dataset.content = 'Copy To clipboard';
}

const shareAdviceToWhatsapp = ()=> {
    const whatsappApi = `https://wa.me/?text=${pageUrl} . ${adviceElement.innerHTML}`
    window.open(URL = whatsappApi)
}

const shareToTelegram = ()=> {
    const telegramApi = `https://t.me/share/url?url=${pageUrl}&text=${adviceElement.innerHTML}`
    window.open(URL = telegramApi )
}

diceIcon.addEventListener('click',getAdvice)
copyIcon.addEventListener('click',copyTextToclipboard)
copyIcon.addEventListener('mouseout',replaceCopyTooltip)
whatsappIcon.addEventListener('click',shareAdviceToWhatsapp)
telegramIcon.addEventListener('click',shareToTelegram)