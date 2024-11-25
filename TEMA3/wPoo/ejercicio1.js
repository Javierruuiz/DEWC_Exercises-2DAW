class Persona{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.stomach = [];
    }


    eat(){
        if (this.stomach.length <10){
        return this.stomach.push(moreFood);
        }else{
            return "no es posible añadir nada al estomago"
        }
    }

    poop(){
        return this.stomach = [];
    }

    toString(){
        return this.name , this.age
    }
}
