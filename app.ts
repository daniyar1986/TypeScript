const el = this.document.getElementById("content");

class User {
    name: string;
    age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const tom : User = new User("Danik",33);

el.innerHTML = "Name : " +tom.name + " Age:"+tom.age;