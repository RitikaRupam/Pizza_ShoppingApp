import makeNetworkCall from "./apiClient.js";    //only in the case of export default
import { URL } from "../utils/config.js";      //only in the case of export
import Pizza from "../models/pizza-model.js";

const pizzaOperations={
    pizzas:[],
    searchPizza(pizzaid){
        const pizzaObject=this.pizzas.find((pizza)=>pizza.id==pizzaid);
        pizzaObject.isAddedInCart=true; 
    },
    async getPizzas(){
        // API Client(Objects(Pizza))
        const data=await makeNetworkCall(URL);
        const pizzaJSON=data['Vegetarian'];
    
       const pizzas= pizzaJSON.map(singlePizza=>{
            const pizzaObject=new Pizza(singlePizza.id, singlePizza.name, singlePizza.price,singlePizza.assets.product_details_page[0].url,singlePizza.menu_description);
            return pizzaObject;
        })
        this.pizzas=pizzas;
        return pizzas;
        //Data Map to model(Conversion)
        //return model
    }
    
}
export default pizzaOperations;
/*
export async function getPizzas(){
    // API Client(Objects(Pizza))
    const data=await makeNetworkCall(URL);
    const pizzaJSON=data['Vegetarian'];

   const pizzas= pizzaJSON.map(singlePizza=>{
        const pizzaObject=new Pizza(singlePizza.id, singlePizza.name, singlePizza.price,singlePizza.assets.product_details_page[0].url,singlePizza.menu_description);
        return pizzaObject;
    })
    return pizzas;
    //Data Map to model(Conversion)
    //return model
}
*/