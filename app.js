const addButton = document.getElementsByClassName('addBtn');
let sum = 0;
for (const num of addButton) {
  num.addEventListener('click', function () {
    //player name price catagoery section ---------

    const BadgetValue = setInnerTextParsint('BadgetValue');
    if (BadgetValue <= 0) {
      alert('bahi tumr ar taka nai ');
      return;
    }
    const cartValue = setInnerTextParsint('CountPlayer');
    if (cartValue + 1 > 6) {
      alert('your limet is over');
      return;
    }

    num.setAttribute('disabled', false);
    const player = num.parentNode.parentNode.childNodes[1].innerText;
    const price =
      num.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    const cetaGorey =
      num.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    //creat element with javascript -------
    const contener = document.getElementById('conteners');
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    p1.innerText = player;
    p2.innerText = price;
    p3.innerText = cetaGorey;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.classList.add('flex', 'justify-between');
    contener.appendChild(div);
    // count value nad decrige value --

    sum++;
    const CountPlayer = (document.getElementById('CountPlayer').innerText =
      sum);

    const LeftPlayer = setInnerTextParsint('leftPlayer');
    const leftPalyerValue = LeftPlayer - 1;
    const elementValue = setInnerText('leftPlayer', leftPalyerValue);

    //---------total cost section js used------
    const totalCost = setInnerTextParsint('tottalCost');
    const allTotalPrice = totalCost + parseInt(price);
    setInnerText('tottalCost', allTotalPrice);
    //---------grind total cost section js used------
    const GrindCost = setInnerTextParsint('grindTotal');
    const GarndTotallPrice = GrindCost + parseInt(price);
    setInnerText('grindTotal', GarndTotallPrice);

    //updet the buget value ---------

    const buget = setInnerTextParsint('BadgetValue');

    const bugetValue = (document.getElementById('BadgetValue').innerText =
      buget - price);
  });
}

//-----descount total price ----------

const applyBtnCopun = document.getElementById('applyBtnCopun');
applyBtnCopun.addEventListener('click', function () {
  const inputSection = document.getElementById('inputSection').value;
  if (inputSection === 'Love20') {
    const totalValue = setInnerTextParsint('tottalCost');
    const finalValue = totalValue * 0.2;
    const finalGrandTotal = totalValue - finalValue;

    setInnerText('descountPrice', finalValue);
    setInnerText('grindTotal', finalGrandTotal);
  } else {
    alert('Your copun code is rong');
  }
});

//-------all function is used for all section-----------
function setInnerTextParsint(element) {
  const elements = document.getElementById(element).innerText;
  const elementd = parseInt(elements);
  return elementd;
}

function setInnerText(element, value) {
  const elementsVl = document.getElementById(element);
  const elemt = (elementsVl.innerText = value);
  return elemt;
}
