const cardArray =[
   {
    name:'fries',
    img:'images/fries.png'

   },
   {
    name : 'cheeseburger',
    img :'images/cheeseburger.png'
   },
   {
    name :'hotdog',
    img:'images/hotdog.png'
   },
   {
    name : 'icecream',
    img:'images/ice-cream.png'
   },
   {
    name :'milkshake',
    img:'images/milkshake.png'
   },
   {
    name : 'pizza',
    img :'images/pizza.png'
   },
   {
    name:'fries',
    img:'images/fries.png'

   },
   {
    name : 'cheeseburger',
    img :'images/cheeseburger.png'
   },
   {
    name :'hotdog',
    img:'images/hotdog.png'
   },
   {
    name : 'icecream',
    img:'images/ice-cream.png'
   },
   {
    name :'milkshake',
    img:'images/milkshake.png'
   },
   {
    name : 'pizza',
    img :'images/pizza.png'
   }

]
cardArray.sort(()=>0.5-Math.random())  // randomly shuffels the images.

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

let cardsChosen = [];
let cardsChosenIds=[];
const cardsWon = [];

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionIdOne = cardsChosenIds[0];
    const optionIdTwo = cardsChosenIds[1];

    console.log(cards)
    console.log('check for match!');
    if (optionIdOne == optionIdTwo) {
        cards[optionIdOne].setAttribute('src','images/blank.png')
        cards[optionIdTwo].setAttribute('src','images/blank.png')

        alert('You have clicked the same image!');
    }


    if (cardsChosen[0]==cardsChosen[1]) {
        alert('You found a match!');
        cards[optionIdOne].setAttribute('src','images/white.png');
        cards[optionIdTwo].setAttribute('src','images/white.png');
        cards[optionIdOne].removeEventListener('click',flipCard);
        cards[optionIdTwo].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);

    }else {
        cards[optionIdOne].setAttribute('src','images/blank.png');
        cards[optionIdTwo].setAttribute('src','images/blank.png');
        alert('Sorry Try Again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML='Congratulations,You found them all!'

    }
}

function createBoard() {
    for (let i=0;i<cardArray.length;i++) {
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard)
        console.log(card,i)
        gridDisplay.appendChild(card);
    }
}
createBoard();

function flipCard() {
   let cardId = this.getAttribute('data-id') // this keyword is allowing us to interact with whatever element we clicked.
   cardsChosen.push(cardArray[cardId].name);
   cardsChosenIds.push(cardId);
   console.log(cardsChosenIds);
   this.setAttribute('src',cardArray[cardId].img);

   if(cardsChosen.length===2) {
       setTimeout(checkMatch,500)
    }
}

                                         