class Animal {
    name;
    weight;

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    toString(name,weight) {
        return 'Name: ' + name +' ; '+ 'Weight: ' + weight;
    }

}

let objAnimal1 = new Animal('Elephant',45.6);
let name1 = objAnimal1.getName();
let weight1 = objAnimal1.getWeight()
console.log(objAnimal1.toString(name1,weight1));
let objAnimal2 = new Animal('mouse1',1.3);
let name2 = objAnimal2.setName("Mouse");
let weight2 = objAnimal2.getWeight()
name2 = objAnimal2.getName()
console.log(objAnimal2.toString(name2,weight2));