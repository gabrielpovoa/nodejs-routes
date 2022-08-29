interface productType {
    title: string;
    price: number
}

const data: productType[] = [
    { title: 'MAÇA', price: 2.00 },
    { title: 'BANANA', price: 19.99 },
    { title: 'BERGAMOTA', price: 0.8 },
    { title: 'MAMÃO', price: 34.6 },
    { title: 'Blueberry', price: 15.99 }
];

export const Product = {
    getAll: (): productType[] => {
        return data
    },
    getFromPriceAfter: (price: number): productType[] => {
        return data.filter(item => item.price >= price)
    },
}