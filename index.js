// // Code your solutions in this file
// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. happy birthday to me!`);
//     debugger;
// }

const { default: buildExternalHelpers } = require("@babel/core/lib/tools/build-external-helpers");


const gifts= ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i=0; i < gifts.length;i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);


const nameList = []

// names =["Guadalupe", "Ollie", "Aki"]

function namesArray(name){
    debugger;
    return nameList.push(name);

}

// namesArray("Guadalupe", "Ollie", "Aki")


function writeCards(nameList,event){
    // const nameList = []

    // for (b = 0; b<names.length;b++){
    //     namesArray(names[b])
    // }




    for ( let i = 0; i < nameList.length; i++){
        nameList[i]  = `Thank you, ${nameList[i]}, for the wonderful ${event} gift!`;
        // debugger;
    }
    return nameList;

}

writeCards();

// console.log(`The following people came to my party ${nameList}`);
console.log(nameList)



//while  loops

// function wrapGifts(gifts){
//     let i = 0;
//     while (i < gifts.length){
//         console.log(`Wrapped ${gifts[i]} and a added a bow`);
//         i++
//     }
//     return gifts

// }
//  wrapGifts(gifts);



//  for (count= 0; count < 10: count++){
//     console.log(count);
//  }


//  let countDown = 0;
//  while(countDown < 10){
//     console.log(countDown++);

//  }

 function countDown(number){
    let count = 0;
    while (count <= number){
        console.log(count++);
    }
    return count;
 }

 countDown(10);