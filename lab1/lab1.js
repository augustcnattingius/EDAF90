'use strict';
const imported = require("./inventory.js");
//console.log(imported.inventory['Sallad']);

let result = {
    foundation: "Foundations :",
    protein: "Proteins :",
    extra: "Extras :",
    dressing: "Dressings :"
};

Object.keys(imported.inventory).forEach(key => {
    if (imported.inventory[key].foundation) {
        result.foundation += key + ",";
    }
    else if (imported.inventory[key].protein) {
        result.protein += key + ",";
    }
    else if (imported.inventory[key].extra) {
        result.extra += key + ",";
    }
    else if (imported.inventory[key].dressing) {
        result.dressing += key + ",";
    }
});

console.log(
    result.foundation + 
    "\n" +
    result.protein +
    "\n" +
    result.extra +
    "\n" +
    result.dressing
);

class salad {
    constructor() {
        this.foundation = [];
        this.protein = [];
        this.extra = [];
        this.dressing = [];
    }
    add(type, selection) {
        if(type == "foundation") {
            this.foundation.push(selection);
        }
        else if(type == "protein") {
            this.protein.push(selection);
        }
        else if(type == "extra") {
            this.extra.push(selection);
        }
        else if (type == "dressing") {
            this.dressing.push(selection);
        }
    }
    remove(type, selection) {
        if(type == "foundation") {
            this.foundation.splice(this.foundation.indexOf(selection), 1);
        }
        else if(type == "protein") {
            this.protein.splice(this.protein.indexOf(selection), 1);
        }
        else if(type == "extra") {
            this.extra.splice(this.extra.indexOf(selection), 1);
        }
        else if (type == "dressing") {
            this.dressing.splice(this.dressing.indexOf(selection), 1);
        }
    }
    price() {
        return this.foundation.concat(this.protein, this.extra, this.dressing).reduce((acc, curr) => {
            return acc + imported.inventory[curr].price;
        }, 0); 
    }

}
let mySalad = new salad();
mySalad.add("foundation", "Sallad");
mySalad.add("protein", "Kycklingfilé");
mySalad.add("dressing", "Ceasardressing");
mySalad.add("extra", "Avocado");
mySalad.add("extra", "Böngroddar");
console.log(mySalad);
console.log(mySalad.price());
mySalad.remove("extra", "Avocado")
console.log(mySalad);
console.log(mySalad.price());
class ExtraGreenSalad extends salad {
    price () {
        return this.foundation.concat(this.protein, this.extra, this.dressing).reduce((acc, curr) => {
            if (imported.inventory[curr].foundation){
                return acc + imported.inventory[curr].price * 1.3;
            } else {
                return acc + imported.inventory[curr].price * 0.5;
            }
        }, 0);
    }
}
let myExtraGreenSalad = new ExtraGreenSalad();
myExtraGreenSalad.add("foundation", "Sallad");
myExtraGreenSalad.add("protein", "Kycklingfilé");
myExtraGreenSalad.add("dressing", "Ceasardressing");
myExtraGreenSalad.add("extra", "Avocado");
myExtraGreenSalad.add("extra", "Böngroddar");
console.log(myExtraGreenSalad);
console.log(myExtraGreenSalad.price());
myExtraGreenSalad.remove("extra", "Avocado")
console.log(myExtraGreenSalad);
console.log(myExtraGreenSalad.price());

class GourmetSalad extends salad {
    add(type, selection, size = 1) {
        if(type == "foundation") {
            this.foundation.push({selection: selection, size: size});
        }
        else if(type == "protein") {
            this.protein.push({selection: selection, size: size});
        }
        else if(type == "extra") {
            this.extra.push({selection: selection, size: size});
        }
        else if (type == "dressing") {
            this.dressing.push({selection: selection, size: size});
        }
    }
    price() {
        return this.foundation.concat(this.protein, this.extra, this.dressing).reduce((acc, curr) => {
                return acc + imported.inventory[curr.selection].price * curr.size;
            }, 0); 
        
    }    
}

let myGourmetSalad = new GourmetSalad();
myGourmetSalad.add("foundation", "Sallad", 0.5);
myGourmetSalad.add("protein", "Kycklingfilé", 1.5);
myGourmetSalad.add("dressing", "Ceasardressing", 0.3);
myGourmetSalad.add("extra", "Avocado", 2);
myGourmetSalad.add("extra", "Böngroddar", 1.4);
console.log(myGourmetSalad);
console.log(myGourmetSalad.price());
myGourmetSalad.remove("extra", "Avocado")
console.log(myGourmetSalad);
console.log(myGourmetSalad.price());
