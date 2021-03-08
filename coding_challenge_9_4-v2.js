function camelCase(...names) {

    for (const [i, name] of names.entries()) {
        const [first, second] = name.trim().toLowerCase().split('_');

        const output = first + second.replace(second[0], second[0].toUpperCase());
        console.log(`${output.padEnd(20)}${'✔'.repeat(i + 1)}`);
    }


}

camelCase('underscore_case', ' first_name', 'Some_Variable', '  calculate_AGE', 'delayed_departure');