
let total = 0 ;
function handleClick(target){
   const itemNameContainer = document.getElementById('items-container');
   const itemName = target.parentNode.childNodes[1].childNodes[3].childNodes[1].innerText;
   const ol = document.createElement('ol');
   ol.innerText = itemName;
   itemNameContainer.appendChild(ol);
   const priceTotal = target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0];
   total = parseInt(total) + parseInt(priceTotal);
   document.getElementById('total-price').innerText = total;
  
}

