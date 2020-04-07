class TypeScript{
    version : string;

    constructor(version: string) {
        this.version = version;
    }

    info(name:string){
        return `[${name}]: TypeScript version ${this.version}`
    }
}

class Car {
    readonly model : string;
    readonly numberOfWheels : number = 4;

    constructor(model: string) {
        this.model = model;
    }
}

class Car2 {
    readonly numberOfWheels : number = 4;
    constructor(readonly model:string) {}
}

////

class Animal {
    protected  voice:string='';
    public color: string;

    constructor() {
        this.go();
    }

    private go(){
        console.log('Go');
    }
}

class Cat extends Animal{
    public setVoice(voice:string):void {
        this.voice = voice;
    }
}

const cat = new Cat();
cat.setVoice('test');
console.log(cat.color);
//cat.voice

////////////////
abstract class Component {
    abstract render():void;
    abstract info():string;
}

class AppComponent extends Component{

    info(): string {
        return 'This is info';
    }

    render(): void {
        console.log('Component on order')
    }

}

