interface Card{
    suit:string
    card:number
}
let suits=['header','spades','diamonds','clubs']
function getCard(card:Card[]):number
function getCard(card:number):Card
function getCard(x):any{
    if(typeof x=='object'){
        let r=Math.floor(Math.random()*x.length)
        return r
    }
    if(typeof x=='number'){
        let suit=suits[Math.floor(x/13)]
        let card:Card={suit:suit,card:x%13}
        return card
    }
}
let cards=[
    {suit:'hearts',card:3},
    {suit:'spades',card:5},
    {suit:'diamonds',card:8},
    {suit:'clubs',card:10}
]