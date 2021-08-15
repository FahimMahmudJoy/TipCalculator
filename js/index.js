let bill = document.querySelector('.bill-input')
let people = document.querySelector('.num-people')
let five = document.querySelector('.t5')
let ten = document.querySelector('.t10')
let fifteen = document.querySelector('.t15')
let twentyFive = document.querySelector('.t25')
let fifty = document.querySelector('.t50')
let custom = document.querySelector('.custom')
let reset = document.querySelector('.reset')
var amount = 0
var persons = 0
let TipPerPerson = 0
let BillPerPerson = 0

bill.addEventListener('change', e => {
    amount = e.target.value
})

people.addEventListener('change', e => {
    persons = e.target.value;
})

five.addEventListener('click', e => {
    if (persons == 0) {
        setTimeout(() => {
            document.querySelector('.cant-be-zero').textContent = ''
            people.setAttribute('style', 'border: none')
        }, 1500);
        document.querySelector('.cant-be-zero').textContent = 'Can\'t be zero'
        people.setAttribute('style', 'border: 2px solid orangered')
    }
    else {
        TipPerPerson = ((amount * 0.05) / persons).toFixed(2)
        BillPerPerson = (parseFloat((amount / persons)) + parseFloat(TipPerPerson)).toFixed(2)
        document.querySelector('.tip-amount-fig').textContent = TipPerPerson
        document.querySelector('.total-fig').textContent = BillPerPerson
    }

})

ten.addEventListener('click', e => {
    if (persons == 0) {
        setTimeout(() => {
            document.querySelector('.cant-be-zero').textContent = ''
            people.setAttribute('style', 'border: none')
        }, 1500);
        document.querySelector('.cant-be-zero').textContent = 'Can\'t be zero'
        people.setAttribute('style', 'border: 2px solid orangered')
    }
    else {
        TipPerPerson = ((amount * 0.1) / persons).toFixed(2)
        document.querySelector('.tip-amount-fig').textContent = TipPerPerson
        BillPerPerson = (parseFloat((amount / persons)) + parseFloat(TipPerPerson)).toFixed(2)
        document.querySelector('.total-fig').textContent = BillPerPerson
    }

})

fifteen.addEventListener('click', e => {
    if (persons == 0) {
        setTimeout(() => {
            document.querySelector('.cant-be-zero').textContent = ''
            people.setAttribute('style', 'border: none')
        }, 1500);
        document.querySelector('.cant-be-zero').textContent = 'Can\'t be zero'
        people.setAttribute('style', 'border: 2px solid orangered')
    }
    else {
        TipPerPerson = ((amount * 0.15) / persons).toFixed(2)
        document.querySelector('.tip-amount-fig').textContent = TipPerPerson
        BillPerPerson = (parseFloat((amount / persons)) + parseFloat(TipPerPerson)).toFixed(2)
        document.querySelector('.total-fig').textContent = BillPerPerson
    }

})

twentyFive.addEventListener('click', e => {
    if (persons == 0) {
        setTimeout(() => {
            document.querySelector('.cant-be-zero').textContent = ''
            people.setAttribute('style', 'border: none')
        }, 1500);
        document.querySelector('.cant-be-zero').textContent = 'Can\'t be zero'
        people.setAttribute('style', 'border: 2px solid orangered')
    }
    else {
        TipPerPerson = ((amount * 0.25) / persons).toFixed(2)
        document.querySelector('.tip-amount-fig').textContent = TipPerPerson
        BillPerPerson = (parseFloat((amount / persons)) + parseFloat(TipPerPerson)).toFixed(2)
        document.querySelector('.total-fig').textContent = BillPerPerson
    }

})

fifty.addEventListener('click', e => {
    if (persons == 0) {
        setTimeout(() => {
            document.querySelector('.cant-be-zero').textContent = ''
            people.setAttribute('style', 'border: none')
        }, 1500);
        document.querySelector('.cant-be-zero').textContent = 'Can\'t be zero'
        people.setAttribute('style', 'border: 2px solid orangered')
    }
    else {
        TipPerPerson = ((amount * 0.5) / persons).toFixed(2)
        document.querySelector('.tip-amount-fig').textContent = TipPerPerson
        BillPerPerson = (parseFloat((amount / persons)) + parseFloat(TipPerPerson)).toFixed(2)
        document.querySelector('.total-fig').textContent = BillPerPerson
    }

})

custom.addEventListener('change', e => {
    if (persons == 0) {
        setTimeout(() => {
            document.querySelector('.cant-be-zero').textContent = ''
            people.setAttribute('style', 'border: none')
        }, 1500);
        document.querySelector('.cant-be-zero').textContent = 'Can\'t be zero'
        people.setAttribute('style', 'border: 2px solid orangered')
    }
    else {
        TipPerPerson = ((amount * e.target.value) / (100 * persons)).toFixed(2)
        document.querySelector('.tip-amount-fig').textContent = TipPerPerson
        BillPerPerson = (parseFloat((amount / persons)) + parseFloat(TipPerPerson)).toFixed(2)
        document.querySelector('.total-fig').textContent = BillPerPerson
    }

})

// ----> Reset Function <---- //

reset.addEventListener('click', e => {
    amount = 0
    persons = 0
    bill.value = ''
    people.value = ''
    custom.value = ''
    amount = 0
    persons = 0
    document.querySelector('.tip-amount-fig').textContent = '$0.00'
    document.querySelector('.total-fig').textContent = '$0.00'
})