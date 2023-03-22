/*for ([initialization]; [condition]; [iteration] [loop body] ){

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);

  }

  return gifts;
}

wrapGifts(gifts);*/


const cardNames = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards, event) {
    const newArray = []
    for (let i = 0; i < cards.length; i++ ) {
        newArray.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
    return newArray;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(number){
    let skip = number
    while (skip >= 0) {
        console.log(skip--);
    }

}

countDown(10);
