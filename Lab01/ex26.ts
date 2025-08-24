type Product = {
    name: string;
    price: number;
    quantity: number;
};

class Order {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    calculateTotal(): number {
        return this.products.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
    }

    showOrder(): void {
        console.log("Danh sách sản phẩm:");
        this.products.forEach((p) => {
            console.log(`${p.name} - ${p.quantity} x ${p.price} = ${p.quantity * p.price}`);
        });
        console.log("Tổng cộng:", this.calculateTotal());
    }
}

const order = new Order();
order.addProduct({ name: "Sách", price: 100, quantity: 2 });
order.addProduct({ name: "Bút", price: 10, quantity: 5 });
order.addProduct({ name: "Vở", price: 20, quantity: 3 });

order.showOrder();
