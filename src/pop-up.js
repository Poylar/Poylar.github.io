let btnTriggerPopUp = document.querySelectorAll('.main-button');
let popUpBox = document.getElementById('popup');
let popUpFilter = document.getElementById('filterpop');
let firegun = [];
const speedSettings = 5;
btnTriggerPopUp.forEach((btnTriggerPopUp) => {
  btnTriggerPopUp.addEventListener('click', () => {
    let visibleValue = 0;
    let id = setInterval(visible, speedSettings);
    function visible() {
      if (visibleValue == 0.9900000000000007) {
        clearInterval(id)
      }
      else {
        visibleValue = visibleValue + .01;
        popUpBox.style.opacity = visibleValue;
        console.log(visibleValue)
      }
    }
    popUpBox.style.display = "flex";
    popUpFilter.style.display = "block"
  }
  )
  popUpFilter.addEventListener('click', () => {
    popUpBox.style.display = "none";
    popUpFilter.style.display = "none"
    popUpBox.style.opacity = "0"
  })
})