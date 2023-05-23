describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
    // initialization logic
    billAmtInput.value = 120;
    tipAmtInput.value = 30;
    submitPaymentInfo();
});

it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(30);

    billAmtInput.value = 250;
    tipAmtInput.value = 50;
    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(80);
});

it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(300);

    billAmtInput.value = 250;
    tipAmtInput.value = 50;
    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(550);
});

it('should sum total tip percent on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(20);

    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(40);
});

it('should sum tip percent of a single tip on calculateTipPercent()', function () {
    expect(calculateTipPercent(100, 23)).toEqual(23);
    expect(calculateTipPercent(111, 11)).toEqual(10);
});

it('should generate new td from value and append to tr on appendTd(tr, value)', function () {
    let newTr = document.createElement('tr');
    appendTd(newTr, 'test');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
});

it('should generate delete td and append to tr on appendDeletBtn(tr, type)', function () {
    let newTr = document.createElement('tr');
    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
});

afterEach(function() {
    // teardown logic
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
    });
});   