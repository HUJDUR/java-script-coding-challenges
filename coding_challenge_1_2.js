const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;

if (dolphins > koalas && dolphins >= 100) {
    console.log(`Dolphins win! ${dolphins}`);
} else if (koalas > dolphins && koalas >= 100) {
    console.log(`Koalas win! ${koalas}`);
} else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
    console.log(`It's a draw! ${dolphins} and ${koalas}`);
} else {
    console.log(`There is no winner! ${dolphins} and ${koalas}`);
}