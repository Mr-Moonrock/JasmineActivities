describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
    billAmtInput.value = 120;
    tipAmtInput.value = 30;
    });

it('should add a new payment to allPayments on submitPaymentInfo()', function () {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('120');
    expect(allPayments['payment1'].tipAmt).toEqual('30');
    expect(allPayments['payment1'].tippercent).toEqual(25);
});

it('should not submit with a negative input on createCurPayment()', function () {
    billAmt = billAmtInput.value = '';
    tipAmt = tipAmtInput.value = '';

    let curPayment = createCurPayment();

    expect(curPayment).toEqual(undefined);
});

it('should up update #paymentTable with appendPaymentTable()', function () {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;
    appendPaymentTable(curPayment);

    let currentTdList = document.querySelectorAll('#paymentTable tbody tr td');
    expect(currentTdList.length).toEqual(4);
    expect(currentTdList[0].innerText).toEqual('$100');
    expect(currentTdList[1].innerText).toEqual('$20');
    expect(currentTdList[2].innerText).toEqual('%20');
    expect(currentTdList[3].innerText).toEqual('X');
});

it('should create a new payment on createCurPayment()', function () {
    let expectedPayment = {
        billAmt: '120',
        tipAmt: '30',
        tipPercent: 25,
    }
    expect(createCurrentPayement()).toEqual(expectedPayment);
});

afterEach(function() {
    // teardown logic
    allPayments = {};
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    paymentTbody.innerHTML = '';
    billAmtInput.value = '';
    tipAmtInput.value = '';
  });
});