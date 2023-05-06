//import { PI, Person, generateRandomNumber } from "./modules";
//import { PI as myPi} from "./modules";
import * as myCode from  "./modules";

console.log(myCode.PI)
const user: myCode.Person = {
    id: 1,
    name: "Melina"
}
console.log(user)
console.log(myCode.generateRandomNumber());

//aqui para compilar dbemos configurar nuestro tscongig.json
//"target": "ES2015",
// "moduleResolution": "node",
//"outDir": "./dist",  
