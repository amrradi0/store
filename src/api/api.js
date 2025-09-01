import axios from "axios";

 export const prodcutsData = async () => {
    const proudcuts = await axios.get('https://fakestoreapi.com/products');
    return proudcuts
};