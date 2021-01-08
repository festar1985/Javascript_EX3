let input = ['remove', 'remove', 'remove', 'remove', 'remove'];

function main(a) {
    let result = [];
    let initial = 1;
    for (i = 0; i < a.length; i++) {
        if (a[i] === "add") {
            result.push(initial + i);
        } else {
            result.pop();
        }
    }
    if (result.length == 0) {
        console.log("Empty");
    }
    console.log(result.join("\n"));
}

main(input);