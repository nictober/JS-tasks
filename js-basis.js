//Задание 1 

const string = "Привет! Как дела?";

const Vowels = ["у", "е", "ы", "а", "о", "э", "я", "и","ю"];

const getVowels = function (SomeString) {
    let FilteredVowels = "";   //что мы делаем здесь? Зачем?

    for (let i = 0; i < SomeString.length; i++){
        const CurrentLetter = SomeString[i];

        // if (CurrentLetter === "и" || CurrentLetter === "е" || 
        // CurrentLetter === "а" ) {
        //     FilteredVowels = FilteredVowels + CurrentLetter; 
        // }

        if (Vowels.indexOf(CurrentLetter) !== -1) {
            FilteredVowels += CurrentLetter;
        }
    }

    return FilteredVowels;
}

console.log (getVowels(string));


//Задание 2

const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}
];

let getWorthyWorkers = workersArr => {
    const worthyArr = [];

    for (let i = 0; i < workersArr.length; i++){
        const CurrentWorker = workersArr[i];

        if (CurrentWorker.salary > 1000) {
            worthyArr.push(CurrentWorker.name);
        }
    }

    return worthyArr;
};

console.log(getWorthyWorkers(workers));



//Задание 3

const path = "/users/download/index.html";

const isHtml = someStr => {
    const requiredPart = ".html";
    const htmlPart = someStr.slice(-5);

    if (requiredPart === htmlPart) {
        return true;
    } else {
        return false;
    }
};

console.log(isHtml(path))



//Задание 4 (Дополнительное)

const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => {
    return num % 2 === 0; 
}

const filterArray = (arrayToFilter, filterFn) => {
    const filteredArray = [];

    for (let i = 0; i < arrayToFilter.length; i++) {
        if (filterFn(arrayToFilter[i]) === true){
            filteredArray.push(arrayToFilter[i]);
            console.log("добавлен элемент в массив");
        }
    }
    return filteredArray;
}

console.log(filterArray(mixedArray, isEven));