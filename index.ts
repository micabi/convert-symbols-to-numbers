import encrypted from './src/list/list';
import { changeTag } from "./src/changeTag";

const changedArray: string[] = [];

for ( let i: number = 0; i < encrypted.length; i++ ) {
  // console.log( `${ changeTag( encrypted[ i ] ) }` );
  changedArray.push( changeTag( encrypted[ i ] ) );
}

// console.log( changedArray );

const finalArray: string[] = [];
changedArray.forEach((element: string, index: number): void => {

  if(element === "0") {
    finalArray.push("1");
  } else {
    finalArray.push(element);
  }

  // console.log(`${index + 2} : ${finalArray[index]}`);
  console.log(`${Number(finalArray[index])},`);
});

