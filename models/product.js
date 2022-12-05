const fs = require('fs');
const path= require('path');
const routeDir = require('../util/path');


const p = path.join(routeDir,'data','products.json');

const getProductFromFile = (cb) => {

   fs.readFile(p,(err, fileContent)=> {
     if(err) {
       return cb([]);
     }
     cb(JSON.parse(fileContent));
   })
}


module.exports = class Product {
    constructor(title) {
       this.title = title;
    }
   
    save() {
      getProductFromFile(products =>{
         products.push(this);
         fs.writeFile(p,JSON.stringify(products), (err)=>{
            console.log(err);
         });
      });
    }

    static fetchAll(cb) {
      getProductFromFile(cb)
    }
}