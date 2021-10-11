const totalPrice = document.querySelector('.total-price');
const basicNumber = document.querySelector('#basic_number');
const seniorNumber = document.querySelector('#senior_number');
const basicNumberMinusTicket = document.querySelector('#basic_number_minus_ticket');
const basicNumberPlusTicket = document.querySelector('#basic_number_plus_ticket');
const seniorNumberMinusTicket = document.querySelector('#senior_number_minus_ticket');
const seniorNumberPlusTicket = document.querySelector('#senior_number_plus_ticket');
const permanentExhibition = document.querySelector('#Permanent_exhibition');
const temporaryExhibition = document.querySelector('#Temporary_exhibition');
const combinedAdmission = document.querySelector('#Combined_admission');
const selectTicket = document.querySelector('#select_ticket');
const testRight = document.querySelector('.right');

// let totalPriceDigit = total();
const state = {
    pricePermanentExhibition: 20,
    priceTemporaryExhibition: 25,
    priceCombinedAdmission: 40,
    basicNumberValue: 1,
    seniorNumberValue: 1,
    totalExchange: 0,
    typeTicket: 'Permanent-exhibition',
    total: function() {
        if (this.typeTicket === 'Permanent-exhibition') return this.totalExchange = basicNumber.value * this.pricePermanentExhibition + seniorNumber.value * (this.pricePermanentExhibition / 2);
        if (this.typeTicket === 'Temporary-exhibition') return this.totalExchange = basicNumber.value * this.priceTemporaryExhibition + seniorNumber.value * (this.priceTemporaryExhibition / 2);
        if (this.typeTicket === 'Combined-admission') return this.totalExchange = basicNumber.value * this.priceCombinedAdmission + seniorNumber.value * (this.priceCombinedAdmission / 2);
    },
    update: function() {
        basicNumberPoppup.value = this.basicNumberValue;
        seniorNumberPoppup.value = this.seniorNumberValue;
        seniorNumber.value = this.seniorNumberValue;
        basicNumber.value = this.basicNumberValue;
        selectTicket.value = this.typeTicket;
        if (this.typeTicket === 'Permanent-exhibition') {
            permanentExhibition.checked = true;
        } else { permanentExhibition.checked = false; }
        if (this.typeTicket === 'Temporary-exhibition') {
            temporaryExhibition.checked = true;
        } else { temporaryExhibition.checked = false; }
        if (this.typeTicket === 'Combined-admission') {
            combinedAdmission.checked = true;
        } else { combinedAdmission.checked = false; }
    },
}


basicNumberMinusTicket.addEventListener('click', () => {
    state.basicNumberValue = basicNumber.value;
    totalPrice.innerHTML = state.total();
    state.update();
})
basicNumberPlusTicket.addEventListener('click', () => {
    state.basicNumberValue = basicNumber.value;
    totalPrice.innerHTML = state.total();
    state.update();
})
seniorNumberMinusTicket.addEventListener('click', () => {
    state.seniorNumberValue = seniorNumber.value;
    totalPrice.innerHTML = state.total();
    state.update();
})
seniorNumberPlusTicket.addEventListener('click', () => {
    state.seniorNumberValue = seniorNumber.value;
    totalPrice.innerHTML = state.total();
    state.update();
})

permanentExhibition.addEventListener('click', () => {
    state.typeTicket = permanentExhibition.value;
    totalPrice.innerHTML = state.total();
    state.update();
})
temporaryExhibition.addEventListener('click', () => {
    state.typeTicket = temporaryExhibition.value;
    totalPrice.innerHTML = state.total();
    state.update();
})
combinedAdmission.addEventListener('click', () => {
    console.log(combinedAdmission.value);
    state.typeTicket = combinedAdmission.value;
    totalPrice.innerHTML = state.total();
    state.update();
})

// poppup
const basicNumberMinusPoppup = document.querySelector('#basic_number_minus_poppup');
const basicNumberPlusPoppup = document.querySelector('#basic_number_plus_poppup');
const seniorNumberMinusPoppup = document.querySelector('#senior_number_minus_poppup');
const seniorNumberPlusPoppup = document.querySelector('#senior_number_plus_poppup');
const basicNumberPoppup = document.querySelector('#basic_number_poppup');
const seniorNumberPoppup = document.querySelector('#senior_number_poppup');


basicNumberMinusPoppup.addEventListener('click', () => {
    state.basicNumberValue = basicNumberPoppup.value;
    totalPrice.innerHTML = state.total();
    state.update();
});
basicNumberPlusPoppup.addEventListener('click', () => {
    state.basicNumberValue = basicNumberPoppup.value;
    totalPrice.innerHTML = state.total();
    state.update();
});
seniorNumberMinusPoppup.addEventListener('click', () => {
    state.seniorNumberValue = seniorNumberPoppup.value;
    totalPrice.innerHTML = state.total();
    state.update();
});
seniorNumberPlusPoppup.addEventListener('click', () => {
    state.seniorNumberValue = seniorNumberPoppup.value;
    totalPrice.innerHTML = state.total();
    state.update();
});
testRight.addEventListener('click', () => {
    console.log(selectTicket.value);
    console.log(selectTicket.options);
    console.log(selectTicket.selectedIndex);
})
selectTicket.addEventListener('click', () => {
    state.typeTicket = selectTicket.value;
    totalPrice.innerHTML = state.total();
    console.log(state);
    state.update();

})