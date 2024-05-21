const formContainerEl = document.getElementById("formContainer");

madeQrImg = document.getElementById("QrImg");

QRConatinnerEl = document.getElementById("QRConatinner");

inputEl = document.getElementById("input");

const btnEl = document.getElementById("btn");

const Qrlink = document.getElementById("Qrlink");

const QrUrlEl  = document.getElementById("QrUrl");

const pTagEl = document.getElementById("pTag");

// Show Data In Front


const ShowQRCodeFront = (url) => {
   
    if(!url)return; 

    btnEl.innerText = "Generating QR Code...."
    madeQrImg.src = url;
    QrUrlEl.innerText= url;
   

   const onloadpage = () => {
       const setTimeInterval =  setInterval(() => {
        QrUrlEl.style.display="block"
        QRConatinnerEl.classList.add("show");
        clearInterval(setTimeInterval);
        btnEl.innerText = "Generate QR Code";
       
    }, 500)
        
   };

   madeQrImg.addEventListener("load",onloadpage);




    const copyClipboard = () => { 
    const elemnt = QrUrlEl;
    navigator.clipboard.writeText(elemnt.innerText).then(()=> {
       alert("Link Copied to Clipboard");
    })

}


QrUrlEl.addEventListener("click",copyClipboard);



};







// QR Rest


const  InputEmptyReset = () => {
 
if(!inputEl.value.trim()){
QRConatinnerEl.classList.remove("show")
QrUrlEl.style.display="none"
}
}


inputEl.addEventListener("keyup",InputEmptyReset)

    

// FORM Data Complete


const GetFornData = (event) => {
    event.preventDefault();

    const formdataIn = new FormData(formContainerEl);
    const formdataStored = formdataIn.get("textStr")

    const MadeQRCode = 
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${formdataStored}`; 
   

    ShowQRCodeFront(MadeQRCode);
    
}



formContainerEl.addEventListener("submit", GetFornData)







