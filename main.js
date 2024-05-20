const formContainerEl = document.getElementById("formContainer");

madeQrImg = document.getElementById("QrImg");

QRConatinnerEl = document.getElementById("QRConatinner");

inputEl = document.getElementById("input");

const btnEl = document.getElementById("btn");

// Show Data In Front


const ShowQRCodeFront = (url) => {
   
    if(!url)return; 

    btnEl.innerText = "Generating QR Code...."
    madeQrImg.src = url;


   const onloadpage = () => {
 

    const setTimeInterval =  setInterval(() => {
        QRConatinnerEl.classList.add("show");
        clearInterval(setTimeInterval);
        btnEl.innerText = "Generate QR Code";
    }, 500)
        
   };

   madeQrImg.addEventListener("load",onloadpage);
};



// QR Rest


const  InputEmptyReset = () => {
 
if(!inputEl.value.trim()){
QRConatinnerEl.classList.remove("show")
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










