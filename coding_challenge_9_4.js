function camelCase(...names) {
    let counter = 1;

    for (let name of names) {
        name = name.toLowerCase().trim();
        name = name.slice(0, name.indexOf('_')) + name[name.indexOf('_') + 1].toUpperCase() + name.slice(name.indexOf('_') + 2, name.length);

        console.log(name.padEnd(20) + '✔'.repeat(counter));
        counter++;
    }
}

camelCase('underscore_case', ' first_name', 'Some_Variable', '  calculate_AGE', 'delayed_departure');