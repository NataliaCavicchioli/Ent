function positions(firstPlace, secondPlace, lastPlace){

    let places = [firstPlace, secondPlace, lastPlace]
    console.log(places)

    if(places[1] == "Daniel"){
        places[0] = "Daniel"
        places[1] = firstPlace
    }
    if(places[2] == "Daniel"){
       places[1] = "Daniel"
       places[2] = secondPlace
    }

console.log(`1º Colocado ${places[0]}`)
console.log(`2º Colocado ${places[1]}`)
console.log(`3º Colocado ${places[2]}`)
}

positions("Rafael", "Manoel", "Daniel")



