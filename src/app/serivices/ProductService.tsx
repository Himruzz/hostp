import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase{
    static getProducts = async (route:any)=>{
        var productResponse = await fetch(this.getUrl(route));
        var products = await productResponse.json();
        return products;
    };
}