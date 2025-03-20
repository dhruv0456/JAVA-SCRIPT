// print table  of n like 2 * 1 = 2


const number1 = parseInt(prompt('Enter an integer: '));

for(let i = 1; i <= 10; i++) {

    const result = i * number1;

    console.log(`${number1} * ${i} = ${result}`);
}