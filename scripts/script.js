'use strict';
// get elements

let userBillEl = document.getElementById('user-bill');
let tipPercentEl = document.querySelectorAll('.tip-percent');
let peopleInputEl = document.getElementById('people-input');
let tipAmountEl = document.getElementById('tip-amount');
let totalAmountEl = document.getElementById('total-amount');
let resetBtnEl = document.getElementById('reset-btn');
let customTipEl = document.getElementById('custom-tip');

// global variables

let peoples, tipPercent, bill;

// functions
// initial set up

function init() {
  bill = 0;
  peoples = 0;
  tipPercent = 0;

  tipAmountEl.innerText = '$' + '0.00';
  totalAmountEl.innerText = '$' + '0.00';
  peopleInputEl.value = null;
  userBillEl.value = null;
  customTipEl.value = null;
}

// calculate bill

function calcBill(tipPercent) {
  peoples = Number(peopleInputEl.value);
  bill = Number(userBillEl.value);
  const totalTip = bill * tipPercent;
  const totalBill = bill + totalTip;
  const tipPerPeople = totalTip / peoples;
  const billPerPeople = totalBill / peoples;

  tipAmountEl.innerText = '$' + tipPerPeople.toFixed(2);
  totalAmountEl.innerText = '$' + billPerPeople.toFixed(2);

  peopleInputEl.value = null;
  userBillEl.value = null;
  customTipEl.value = null;
}

// event listeners

// tip elements
for (let i = 0; i < tipPercentEl.length; i++) {
  tipPercentEl[i].addEventListener('click', function () {
    tipPercent = Number(this.value) / 100;
    calcBill(tipPercent);
  });
}

// custom tip
customTipEl.addEventListener('change', function () {
  tipPercent = Number(this.value) / 100;
  calcBill(tipPercent);
});

// reset btn
resetBtnEl.addEventListener('click', function () {
  init();
});
