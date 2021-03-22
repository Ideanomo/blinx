import faker from 'faker';
let fake = faker;

let products = [];

for (let i=0; i<100; i++) {
    let singleProduct = {
        "productID": fake.random.number(100),
        "productName": fake.commerce.productName(),
        "category": fake.commerce.department(),
        "description": fake.commerce.productDescription(),
        "productPrice": fake.finance.amount(1, 10, 2),
        "inStock": fake.random.arrayElement([ true, false ]),
        "date": fake.date.between('2021-03-01', '2021-03-10'),
        "sales": fake.random.number(10)
    }
    products.push(singleProduct);
}

    const listAll = (req, res) => {
        return res.json(products);
    }

    const productByID = (req, res) => {
        const product = products.find(product => product.productID === parseInt(req.params.id));
        if (!product) res.status(404).send('The product with the given ID was not found');
        res.send(product)
    }

export default { listAll, productByID };