const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtils');
const registerHomes = [];
module.exports = class Home {
  constructor(houseName,location,description,price,bedrooms,bathrooms){
    this.houseName = houseName;
    this.location = location;
    this.description = description;
    this.price = price;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }

  save(){
    console.log("In save method");
    console.log(this);
    registerHomes.push(this);
    const homeDataPath = path.join(rootDir,'data','homes.json');
    fs.writeFile(homeDataPath, JSON.stringify(registerHomes), (err)=>{
      console.log(err);
    });
  }

  static fetchAll(){
    console.log("In fetch all method");
    const homesDataPath = path.join(rootDir,'data','homes.json');

    try {
      const data = fs.readFileSync(homesDataPath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.log('Error reading file:', err.message);
      return [];
    }
    // return JSON.parse(homesData);
  }

}