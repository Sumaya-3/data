const yargs = require('yargs');
const { saveData, loadData } = require('./data');

const argv = yargs.argv;

const command = argv._[0];

if (command === 'add') {
    const data = loadData();
    const newData = {
        id: argv.id,
        firstName: argv.firstName,
        lastName: argv.lastName,
        age: argv.age,
        city: argv.city
    };
    data.push(newData);
    saveData(data);
} else if (command === 'list') {
    const data = loadData();
    console.log(data);
} else if (command === 'view') {
    const data = loadData();
    const person = data.find(person => person.id === argv.id);
    if (person) {
        console.log(person);
    } else {
        console.log('Person not found.');
    }
} else if (command === 'delete') {
    if (argv.id) {
        const data = loadData();
        const newData = data.filter(person => person.id !== argv.id);
        saveData(newData);
    } else {
        saveData([]);
    }
} else {
    console.log('Invalid command');
}