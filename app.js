const tipAmount = document.querySelector("#tip-amount")
const totalPerPerson = document.querySelector("#total-per-person")
const billAmount = document.querySelector("#bill-amount")
const numberOfPeople = document.querySelector("#number-of-people")
const calculate = document.querySelector("#calculate")

calculate.addEventListener('click', ()=>{
    const percent = document.querySelector("input[name='tip']:checked")
    let total = Number(billAmount.value) * Number(numberOfPeople.value)
    totalPerPerson.innerHTML = total - (total * Number(percent.value) / 100)
    tipAmount.innerHTML = Number(billAmount.value) - (Number(billAmount.value) * Number(percent.value) / 100)
})