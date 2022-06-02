/*
const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log('i is ' + i)
  for (let j = 0; j < vowels.length; j++) {
    //console.log('j is ' + j)
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
if (input[i] === 'e') {
  resultArray.push(input[i]);
}
if (input[i] === 'u') {
  resultArray.push(input[i]);
}
}
console.log(resultArray.join('').toUpperCase());
*/
const inputValue = () => {
    const input = document.getElementById('input-text-to-convert').value;
    return input;
}
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const whaleTalk = () => {
    const input = inputValue().toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const resultArray = [];

    for (let i = 0; i< input.length; i++) {
        //console.log('i is ' + i)
        for (let j = 0; j < vowels.length; j++) {
            //console.log('j is ' + j)
            if (input[i] === vowels[j]) {
                resultArray.push(vowels[j]);
            }
        }
        if (input[i] == 'e') {
            resultArray.push(input[i]);
        }
        if (input[i] == 'u') {
            resultArray.push(input[i]);
        }
    }

    return resultArray.join('').toUpperCase();
}

convert.addEventListener('click', () => {
    result.innerHTML = whaleTalk()
})


