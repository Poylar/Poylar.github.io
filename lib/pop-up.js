"use strict";

var btnTriggerPopUp = document.querySelectorAll('.main-button');
var popUpBox = document.getElementById('popup');
var popUpFilter = document.getElementById('filterpop');
var speedSettings = 5;
btnTriggerPopUp.forEach(function (btnTriggerPopUp) {
  btnTriggerPopUp.addEventListener('click', function () {
    var visibleValue = 0;
    var id = setInterval(visible, speedSettings);

    function visible() {
      if (visibleValue == 0.9900000000000007) {
        clearInterval(id);
      } else {
        visibleValue = visibleValue + .01;
        popUpBox.style.opacity = visibleValue;
        console.log(visibleValue);
      }
    }

    popUpBox.style.display = "flex";
    popUpFilter.style.display = "block";
  });
  popUpFilter.addEventListener('click', function () {
    popUpBox.style.display = "none";
    popUpFilter.style.display = "none";
    popUpBox.style.opacity = "0";
  });
});