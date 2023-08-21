let i = 0;
let DiscountPrize = 0;
let totalPrize = 0;
let coupon = 'SELL200';
let active = false;

const totalPrizeBox = document.getElementById('totalPrizeBox');
const discountBox = document.getElementById('discountBox');
const afterdiscountBox = document.getElementById('afterdiscountBox');
const PurchaseBtn = document.getElementById('PurchaseBtn');
const couponBtn = document.getElementById('couponBtn');
const couponInput = document.getElementById('couponInput');
const alertBtn = document.getElementById('alert_btn');
const divAlert = document.getElementById('div_alert');


function Alert_function(msg) {
    divAlert.classList.add('div_alert_open');

    document.getElementById('closealert').addEventListener('click', function () {
        divAlert.classList.remove('div_alert_open');
    })
    document.getElementById('msg').innerText = msg;
}


function addProduct(event) {
    i++
    const addProduct_sell = event.currentTarget;
    event.currentTarget.classList.add('scale_card');

    const card_title = addProduct_sell.querySelector('.card-title').innerText;
    const targetElement = event.currentTarget.classList;
    const prize = addProduct_sell.querySelector('.prize').innerText;

    const card_items = document.getElementById('card_items');


    card_items.insertAdjacentHTML('beforeend', '<h1 class="mane-head"><p>' + i + ". " + card_title + '</p></h1>')


    totalPrize += parseFloat(prize);

    totalPrizeBox.innerText = totalPrize;

    if (totalPrize > 0) {
        PurchaseBtn.removeAttribute('disabled');

        if (totalPrize >= 200) {
            couponBtn.removeAttribute('disabled');

            couponBtn.addEventListener('click', function () {
                if (couponInput.value === coupon) {
                    const discount = (totalPrize * 20) / 100;
                    DiscountPrize = discount;
                    discountBox.innerText = DiscountPrize;
                    active = true;
                    totalPrizeBox.innerText = totalPrize;
                    afterdiscountBox.innerText = totalPrize - DiscountPrize;
                } else {
                    Alert_function('Invalid Coupon Code. Please try again')
                }
            })

            if (active === true) {

                const discount = (totalPrize * 20) / 100;
                DiscountPrize = discount;
                discountBox.innerText = DiscountPrize;
            }
        }
        totalPrizeBox.innerText = totalPrize;
        afterdiscountBox.innerText = totalPrize - DiscountPrize;
    }
    setTimeout(function () {
        targetElement.remove('scale_card');
    }, 200)
}

function GoHome(Event){
  window.location.reload();
} 
 