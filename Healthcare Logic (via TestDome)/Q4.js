let table = {
    1 : "A",
    2 : "B",
    3 : "C",
    4 : "D",
    5 : "E",
    6 : "F",
    7 : "G",
    8 : "H",
    9 : "I",
    10 : "J",
    11 : "K",
    12 : "L",
    13 : "M",
    14 : "N",
    15 : "O",
    16 : "P",
    17 : "Q",
    18 : "R",
    19 : "S",
    20 : "T",
    21 : "U",
    22 : "V",
    23 : "W",
    24 :"X",
    25 : "Y",
    26 : "Z"
}

function numbersToLetters(stringOfNumbers) {
    let translation = "";
    // Your code here
    for (i in stringOfNumbers) {
        // console.log(stringOfNumbers[i]);
        for (y in table){
            // console.log(table[y]);
            if (stringOfNumbers[i] == y) {
                if (translation = "") {
                    translation = table[y];
                } else {
                    translation = `${translation}` + `${table[y]}`;
                    console.log(translation);
                }
            }
            y++;
        }
        i++
    }
    return translation
  }
  
  console.log(numbersToLetters('20 5 19 20+4 15 13 5'));