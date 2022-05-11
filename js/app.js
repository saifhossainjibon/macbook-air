function totalPriceStatus() {
    const extraMemory = document.getElementById("extra-memory").innerText
    const extraStorage = document.getElementById("extra-storage").innerText
    const deliveryCharge = document.getElementById("delivery-charge").innerText
    const totalPrice = document.getElementById("total-price")
    const discountTotalPrice = document.getElementById("discount-total-price")
    totalPrice.innerText = 1200 + parseInt(extraMemory) + parseInt(extraStorage) + parseInt(deliveryCharge)
    discountTotalPrice.innerText = totalPrice.innerText
}
function updateproductPrice(productId, price) {
    const product = document.getElementById(productId)
    product.innerText = price;
}
// memory
document.getElementById("8-gb-memory").addEventListener('click', function () {
    updateproductPrice("extra-memory", 0)
    totalPriceStatus()
})
document.getElementById("16-gb-memory").addEventListener('click', function () {
    updateproductPrice("extra-memory", 180)
    totalPriceStatus()
})
// storage
document.getElementById("256gb-storage").addEventListener('click', function () {
    updateproductPrice("extra-storage", 0)
    totalPriceStatus()
})
document.getElementById("512gb-storage").addEventListener('click', function () {
    updateproductPrice("extra-storage", 100)
    totalPriceStatus()
})
document.getElementById("1tb-storage").addEventListener('click', function () {
    updateproductPrice("extra-storage", 180)
    totalPriceStatus()
})
// delivery
document.getElementById("free-delivery").addEventListener('click', function () {
    updateproductPrice("delivery-charge", 0)
    totalPriceStatus()
})
document.getElementById("paid-delivery").addEventListener('click', function () {
    updateproductPrice("delivery-charge", 20)
    totalPriceStatus()
})

document.getElementById("promo-code-button").addEventListener('click', function () {
    const promoInput = document.getElementById("promo-code-input")
    const totalPrice = document.getElementById("total-price")
    let discountTotalPrice = document.getElementById("discount-total-price")
    const notifyPromo = document.getElementById("notify-promo-code")

    if (promoInput.value == "saif") {
        // promoInput.setAttribute = "disabled"
        discountTotalPrice.innerText = (parseFloat(totalPrice.innerText) / 100) * 90;
        notifyPromo.style.color = "green"
        notifyPromo.innerText = "Promo Code Added. Reduced 20%"
        promoInput.value = ""
    }
    else {
        notifyPromo.style.color = "red"
        notifyPromo.innerText = "Promo Code invalid, please try again"
    }

})