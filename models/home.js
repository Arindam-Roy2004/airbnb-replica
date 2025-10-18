const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtils');
// const registerHomes = [];
module.exports = class Home {
  constructor(houseName, location, description, price, bedrooms, bathrooms) {
    this.houseName = houseName;
    this.location = location;
    this.description = description;
    this.price = price;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }

  save() {
    console.log("In save method");
    console.log(this);
    Home.fetchAll((registerHomes) => {
      registerHomes.push(this);
      const homeDataPath = path.join(rootDir, 'data', 'homes.json');
      fs.writeFile(homeDataPath, JSON.stringify(registerHomes), (err) => {
        console.log(err);
      });
    });

    // registerHomes.push(this);
    // const homeDataPath = path.join(rootDir,'data','homes.json');
    // fs.writeFile(homeDataPath, JSON.stringify(registerHomes), (err)=>{
    //   console.log(err);
    // });
  }

  static fetchAll(callback) {
    console.log("In fetch all method");
    const homesDataPath = path.join(rootDir, 'data', 'homes.json');

    fs.readFile(homesDataPath, (err, data) => {
      console.log('File read', (err, data));
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
    // return JSON.parse(homesData);
  }

}