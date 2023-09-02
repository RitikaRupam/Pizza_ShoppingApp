//Data Modelling

class Pizza{
    constructor(id,name,price,url,desc){
        this.id=id;     //this is a keyword that holds the current calling object reference
        this.name=name;
        this.price=price;
        this.url=url;
        this.desc=desc;
        this.isAddedInCart=false;
    }
}
export default Pizza;