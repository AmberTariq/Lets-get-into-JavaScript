class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    show(){
        console.log("Name: ", this.name);
        console.log("Age: ", this.age);
    }
}

 class jobPerson extends person{
     constructor(name, age, occupation){
         super(name, age);
         this.occupation = occupation;
     }
     show(){
         super.show();
         console.log("Occupation: ",this.occupation);
     }
 }
 
 let p1 = new jobPerson('Alice',21,'Architect');
 let p2 = new person('Kate',19);
 
 p1.show();
 p2.show();
