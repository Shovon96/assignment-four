function cubeNumber(number) {
    if(number >= 0){
        const cubeNum = number * number * number;
        return cubeNum;
    }else{
        return "Invalid Input"
    }
}

function matchFinder(string1, string2) {
    if(string1.includes(string2)){
        return true;
    }else if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return "Invalide Input";
    }else{
        return false;
    }
}

function sortMaker(arr) { 
    if (arr[0] == arr[1]) {
        return "equal";
    }
    else if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input";
    } 
    else {
        let jar1 = 0;
        let jar2 = 1;
        while (jar1 < jar2) {
            if (arr[jar1] < arr[jar2]) {
                let tempoJar = arr[jar1];
                arr[jar1] = arr[jar2];
                arr[jar2] = tempoJar;
            }
            jar1++;
        }
        return arr;
    }
}

function findAddress(obj) {
    if (typeof obj != 'object'){
        return "invalid object";
    }else{
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';
        return street + ',' + house + ',' + society;
    }
}

function canPay(changeArray, totalDue) {
    if (changeArray.length == 0) {
        return "You have no money"
    } else {
        let money = 0;
        for (let i = 0; i < changeArray.length; i++) {
            let index = changeArray[i];
            money += index;
        }
        return money >= totalDue;
    }


}