// ES8 New Features

// 1) Object keys and values

let obj = {
    a: 'one',
    b: 'two',
    c: 'three'
};

// keys is ES6 feature
let keys = Object.keys(obj);
console.log(keys);

// below are new ES8 features

let values = Object.values(obj);
console.log(values);

let entries = Object.entries(obj);
console.log(entries);

// 2) Asynchronous Functions

async function async_one() {
    return "one";
}

async_one().then(response => console.log(response));

async function async_two() {
    return "two";
}

async function async_error() {
    throw new Error('Issue with async!');
}
async_error().then(response => console.log(response)).catch(error => console.log(error));

async function async_three() {
    const one = await async_one();
    console.log(one);
    const two = await async_two();
    console.log(two);
}

async_three();

async function async_four() {
    const [res_one, res_two] = await Promise.all(
        [async_one(), async_two()]
    )

    console.log(res_one, res_two);
}

async_four();