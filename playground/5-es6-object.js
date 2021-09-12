const name = 'Hai Tuan'
const userAge = 22
const user = {
    name, 
    age: userAge,
    location: 'Ho Chi Minh',
}

console.log(user)

const product = {
    label: 'Red notebook',
    price: 3, 
    stock: 201, 
    salePrice: undefined,
}

// const label = product.label
// const stock = product.stock

// const {label:rename, stock, rating = 10} = product
// console.log(rename)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)