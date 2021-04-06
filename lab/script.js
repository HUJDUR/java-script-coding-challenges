class covjek {
    constructor(ime) {
        this.ime = ime;
    }

    jao() {
        console.log('jao');
    }
}

const nadir = new covjek('nadir');
console.log(nadir);

console.log(nadir.__proto__ === covjek.prototype);