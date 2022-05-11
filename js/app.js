// clickable thing
const memory8gb = document.getElementById("8-gb-memory")
const memory16gb = document.getElementById("16-gb-memory")

const storage256gb = document.getElementById("256gb-storage")
const storage512gb = document.getElementById("512gb-storage")
const storage1tb = document.getElementById("1tb-storage")

const freeDelivery = document.getElementById("free-delivery")
const paidDelivery = document.getElementById("paid-delivery")



function totalPriceStatus() {
    const extraMemory = document.getElementById("extra-memory").innerText
    const extraStorage = document.getElementById("extra-storage").innerText
    const deliveryCharge = document.getElementById("delivery-charge").innerText
    const totalPrice = document.getElementById("total-price")
    totalPrice.innerText = 1200 + parseInt(extraMemory) + parseInt(extraStorage) + parseInt(deliveryCharge)
    console.log(totalPrice.innerText)
}
function updateproductPrice(productId, price) {
    const product = document.getElementById(productId)
    product.innerText = price;
}
// memory
memory8gb.addEventListener('click', function () {
    updateproductPrice("extra-memory", 0)
    totalPriceStatus()
})
memory16gb.addEventListener('click', function () {
    updateproductPrice("extra-memory", 180)
    totalPriceStatus()
})
// storage
storage256gb.addEventListener('click', function () {
    updateproductPrice("extra-storage", 0)
    totalPriceStatus()
})
storage512gb.addEventListener('click', function () {
    updateproductPrice("extra-storage", 100)
    totalPriceStatus()
})
storage1tb.addEventListener('click', function () {
    updateproductPrice("extra-storage", 180)
    totalPriceStatus()
})
// delivery
freeDelivery.addEventListener('click', function () {
    updateproductPrice("delivery-charge", 0)
    totalPriceStatus()
})
paidDelivery.addEventListener('click', function () {
    updateproductPrice("delivery-charge", 20)
    totalPriceStatus()
})