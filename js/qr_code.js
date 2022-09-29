let input = document.querySelector(".container input");
let btn = document.querySelector(".container button");
let imgBox = document.querySelector(".container .qr-code");
let qrImg = document.querySelector(".qr-code img");

btn.onclick = function() {
  if(!input.value) return;
    btn.innerHTML = 'Generating...';
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    imgBox.style.display = "flex";
    qrImg.onload = function() {
    btn.innerHTML = "Generate QR Code";
    }
}
input.onkeyup = function(e) {

  imgBox.style.display = "none";

  if(e.key == 'Enter')
    btn.click();

}