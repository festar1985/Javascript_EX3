let input = ['How about no?', 'I', 'will', 'not', 'do', 'it!', '_'];

function main(input) {

    let output = [].concat(input);


    let symb = input[input.length - 1];


    output.pop();

    console.log(output.join(symb));
}

main(input)

console.log(input)