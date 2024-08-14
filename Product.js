class Product {
    constructor(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addToStock(quantity) {
        this.inStock += quantity;
        console.log(`
            Nome do produto: ${product.name}
            Descrição do produto: ${product.description}
            Valor do produto: R$${product.price.toFixed(2)}
            Quantidade no estoque: ${product.inStock}
            `);
    }

    calculateDiscount(discount) {
        this.price = this.price - (discount * this.price / 100)
        console.log(`
                ==================================
                Desconto no produto: ${discount}%
                Novo valor do produto: R$${newPrice.toFixed(2)}
            `)
    }
}

const Notebook = new Product("Notebook", "Notebook Nitro 5", 1000.00);
Notebook.addToStock(10)
Notebook.calculateDiscount(5)
