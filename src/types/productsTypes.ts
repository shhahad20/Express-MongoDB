
export type Product = {
    id: string;
    name: string;
    price: number;
};

export type ProductInput = Omit<Product, 'id'>; // omit is used to create ProductInput type without 'id'