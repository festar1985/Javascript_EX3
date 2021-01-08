let input = ['1', '2', '3', '4', '5', '6'];

function main(a) {

    let step = a.pop();
    step = +step
    for (i = 0; i < a.length; i = i + step) {
        console.log(a[i]);
    }

}

main(input);