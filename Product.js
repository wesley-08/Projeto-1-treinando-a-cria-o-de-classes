class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addToStock(quantity) {
        this.inStock += quantity;
    }

    calculateDiscount(discountPercentage) {
        const discountAmount = (this.price * discountPercentage) / 100;
        return this.price - discountAmount; 
    }
}

const product = new Product("Notebook", "Notebook Nitro 5", 1000.00);

product.addToStock(10); 

console.log(`Nome do produto: ${product.name}`);
console.log(`Descrição do produto: ${product.description}`);
console.log(`Valor do produto: R$${product.price.toFixed(2)}`);
console.log(`Quantidade no estoque: ${product.inStock}`);
console.log("==================================");

const discount = 5; 
const newPrice = product.calculateDiscount(discount);

console.log(`Desconto no produto: ${discount}%`);
console.log(`Novo valor do produto: R$${newPrice.toFixed(2)}`);