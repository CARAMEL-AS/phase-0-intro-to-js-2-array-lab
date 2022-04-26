const cats = ["Milo", "Otis", "Garfield"]
 console.log(cats);

 function destructivelyAppendCat(ralph){
    cats.push(ralph);
}
 
function destructivelyPrependCat(bob){
    cats.unshift(bob);
}

function destructivelyRemoveLastCat(ralph){
    cats.pop(ralph);
}

function destructivelyRemoveFirstCat(milo){
    cats.shift(milo);
}

function appendCat(broom){
    const Milo = [...cats,broom];
    return Milo;
}

function prependCat(arnold){
    const Otis = [arnold,...cats]
    return Otis;
}

function removeLastCat(){
    const lastCat = cats[cats.length - 1];
    return cats.filter(cat => {return cat !== lastCat});
}


function removeFirstCat(){
    return cats.filter(cat => {return cat !== cats[0]});
}



