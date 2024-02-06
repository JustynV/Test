
const prime = primo => {

    let divisores = 0;

    for(let i = 1; i<=primo; i++){
        if (primo % i == 0){
            divisores++;
        }
    }
    if(divisores == 2){
        return true
    }

    return false
}

const cantidad = 15

let i = 0
let primoTemp = 1

while (i < cantidad) {
    if(prime(primoTemp) || false){
        console.log(i+1, "->", primoTemp)
        i++
    }
    primoTemp++
}