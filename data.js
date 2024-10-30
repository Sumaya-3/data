const fs = require('fs');

const saveData = (data) => {
    const jsonData = JSON.stringify(data);
    fs.writeFileSync('peopleData.json', jsonData);
    console.log('Data saved');
};

const loadData = () => {
    try {
        const data = fs.readFileSync('peopleData.json');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

module.exports = {
    saveData,
    loadData
};