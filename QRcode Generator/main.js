const qrCode=document.querySelector(".qrcode");
const qrText=document.querySelector(".qrtext");
const Download=document.querySelector(".download");
const Share=document.querySelector(".share");

qrText.addEventListener("input",handleQRText);
'Share.addEventListener("click",handleShare);'

const defaultURL="https://ayushh02.github.io/Portfolio/";

let text=defaultURL;

function handleQRText(e){
    const value=e.target.value;
    text=value;
    if(!value){
        text=defaultURL;
    }
    generateQRCode();
}

function generateQRCode(){
    let size="1000X1000";
    let data=text;
    let URL=` https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${data}`
    qrCode.src=URL;
    Download.setAttribute("href",URL)
}


    