import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    id: String,
    name: {
        type: String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
});
// Create the model || collections
export const Product = model("Products", productSchema);