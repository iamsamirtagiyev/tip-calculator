const tipAmount = document.querySelector("#tip-amount")
const totalPerPerson = document.querySelector("#total-per-person")
const billAmount = document.querySelector("#bill-amount")
const numberOfPeople = document.querySelector("#number-of-people")
const calculate = document.querySelector("#calculate")

calculate.addEventListener('click', ()=>{
    const percent = document.querySelector("input[name='tip']:checked")
    let total = parseFloat(billAmount.value) * parseFloat(numberOfPeople.value)
    totalPerPerson.innerHTML = total - (total * parseFloat(percent.value) / 100)
    tipAmount.innerHTML = parseFloat(billAmount.value) - (parseFloat(billAmount.value) * parseFloat(percent.value) / 100)
})