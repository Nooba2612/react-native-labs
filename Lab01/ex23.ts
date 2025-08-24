interface Payment {
    pay(amount: number): void;
}

class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Thanh toán ${amount} bằng tiền mặt.`);
    }
}

class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Thanh toán ${amount} bằng thẻ ngân hàng.`);
    }
}

const cash: Payment = new CashPayment();
cash.pay(100000);

const card: Payment = new CardPayment();
card.pay(500000);
