function printLabel(labelObject : {label : string, size: number}) {
    console.log(labelObject.label);
    console.log(labelObject.size);
}

let myObj = {
    size : 10,
    label : "Size 10 Object"
};

printLabel(myObj);

interface LabeledValue {
    label : String;
}

console.log("Interface");
function printLabe2(labelObject : LabeledValue) {
    console.log(labelObject.label);
}
printLabe2(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config : SquareConfig):{color: string; area: number} {
    let newSquare = {color:"white", area : 100};

    if (config.color){
        newSquare.color = config.color;
    }
    if (config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color:"black", width:20});
console.log(mySquare);

interface Point {
    readonly x: number;
    readonly y : number;
}

let p1:Point = {x:10, y:20};
console.log(p1.x +" "+p1.y);
//p1.y = 6; //error readonly

// @ts-ignore
let  a: number[] = [1,2,3,4];
let ro: ReadonlyArray<number> = a;
console.log(ro);
//ro[0]=2; //readonly array

