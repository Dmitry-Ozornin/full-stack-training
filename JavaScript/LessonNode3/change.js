const fs = require("fs");
const path = require("path");
const pathtoFile = path.join(__dirname, "person.json");
const personData = JSON.parse(fs.readFileSync(pathtoFile, "utf-8"));

for (let i = 0; i < personData.length; i++) {
    personData[i].age = personData[i].age - 10;
    personData[i].city = "Ekaterinburg";
    
}

fs.writeFileSync(pathtoFile, JSON.stringify(personData, null, 2));
