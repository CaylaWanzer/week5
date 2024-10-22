const things = []
const entities =  []

const spriteList = [] // things that can  move on the screen

function Position (px,py){
    return {
        x: px,
        y: py
    };
};

function Sprite(namePerameter, kindPerameter, posPerameter){
    return{
        health: 100,
        name: namePerameter,
        kind: kindPerameter,
        position: posPerameter
    };
};
spriteList.push(Sprite("Capt. Lee", "wizard", Position (10,5)));
spriteList.push(Sprite("venom", "parasite", Position(20, 10) ));
spriteList.push(Sprite("Capt. Lee", "wizard", Position (15,10)));
spriteList.push(Sprite("venom", "parasite", Position(20, 15) ));

function getHeroList(){
    for(let i = 0; i < spriteList.length; i++){
        if(spriteList[i].kind === "wizard"){
            // console.log(i, spriteList[i]);
            list.push(spriteList[i])
        };
    };
    return list;
};



function printHero(){
    for(let i = 0; i < spriteList.length; i++){
        if(spriteList[i].kind === "wizard"){
            console.log(i, spriteList[i]);
        };
    };
};
printHero()


function printAll(){

    for(let i = 0; i < spriteList.length; i++){
        console.log(spriteList[i])
    };
};

function printParasites(){
    for(let i = 0; i < spriteList.length; i++){
        if(spriteList[i].kind === "parasite"){
            console.log(i, spriteList[i]);
        };
    };
};

printParasites()

