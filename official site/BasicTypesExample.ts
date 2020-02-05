let isDone: boolean = false;
console.log(isDone);
let decimal: number = 6;
console.log(decimal);
let hex: number = 0xfff;
console.log(hex);
let binary: number = 0b0111;
console.log(binary);
let octal : number = 0x10;
console.log(octal);

let color : string ="blue";
color = 'red';
console.log(color);

let fullName: string = `Daniyar Myrzakanov`;
let age : number = 33;
let sentence : string = `Hello my name is ${fullName}
I will be `+(age+1) + " years old next month";
console.log(sentence);

let list: number[] = [1,2,3];
console.log(list);

let list2: Array<number> = [4,5,6];
console.log(list2);

let x:[string,number];
x = ["Danik",33];
console.log(x);
console.log(x[0].length);
console.log(x[1]);

enum Color {
    Red,Green,Blue
}

let  c:Color = Color.Red;
console.log(c);

let  colorName: string = Color[0];
console.log(colorName);

let notSure: any = 4;
console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);

let listAny: any[] = [1, true, "free"];
console.log(listAny);

function warnUser():void {
    console.log("This is any warning message");
}

warnUser();

let unusable: void = undefined;
unusable = null;
console.log(unusable);

let u : undefined = undefined;
let n : null = null;
console.log(u+" "+n);

// function error(message: string): never {
//     throw new Error(message);
// }

// error("Error");
//
// declare function create(o:object | null):void;
//
// create({prop:0});
// create(null);

let someValue : any = "This is a string";
let strLength : number = (<string>someValue).length;
console.log(strLength);

let  strLength2 : number = (someValue as string).length;
console.log(strLength2);
