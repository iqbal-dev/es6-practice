class Father{
    constructor(){
        this.fatherName = 'mr. x'; 
    }
}

class Son extends Father{
    constructor() {
        super();
        this.sonName = 'Mr.Y';
    }
    print() {
        console.log(this.fatherName, this.sonName);
    }
}
const son = new Son();
console.log(son.fatherName)