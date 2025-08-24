class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    tinhDienTich(): number {
        return this.width * this.height;
    }

    tinhChuVi(): number {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(10, 5);
console.log("Dien Tich:", rect.tinhDienTich());
console.log("Chu Vi:", rect.tinhChuVi());
