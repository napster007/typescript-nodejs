import "reflect-metadata";
import express from 'express';
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Profile } from "./entities/Profile";
import { Company } from "./entities/Company";
import { Product } from "./entities/Product";
import {appDataSource} from "./config/dbConfig";
const app = express();

app.use(express.json());

const port = 9070;

import applicationFormRouter from "./routes/appllicationFrom.routes";
app.use( applicationFormRouter);

// app.get('/', async (req,res)=>{
//     //res.send("Hello form the Express world");
//     // const userRepo = appDataSource.getRepository(User);
//     // const profileRepo = appDataSource.getRepository(Profile);
//     //////Create User
//     // let profile : Profile = new Profile();
//     // profile.gender = "female";
//     // profile.photo = "this is a photo";

//     // let user: User = new User();
//     // user.email = "sample3@email.com";
//     // user.firstname = "Sample3";
//     // user.lastname = "Name3";
//     // user.profile = profile;
//     // const userInserted = await userRepo.save(user);
//     //res.json(userInserted);

//     //get all records
//     // const allRecords = await userRepo.find();
//     // res.json(allRecords);

//     // const getRecord = await userRepo.findOne({where : {
//     //     id:3
//     // }});

//     // if(!getRecord){
//     //     return res.status(404).send("No Data Found");
//     // }

//     // getRecord.email = "newemail@gmail.com";
//     // getRecord.firstname = "Test";
//     // getRecord.lastname = "Name";
//     // getRecord.profile.gender="Male";
//     // getRecord.profile.photo ="No photo";

//     // const updateRecord = await userRepo.save(getRecord);
//     // res.json(updateRecord);
//     //res.json(getRecord);


//     //delete Record
//     //await userRepo.delete(3);
    
//     //await profileRepo.delete(3);
//     //res.send("Profile deleted");
   
//     const compnayRepo = appDataSource.getRepository(Company);

//     //insert
//     let products : Product[] = [];
//     let iphone = new Product();
//     iphone.name="Nokia";
//     iphone.description="3210";
//     iphone.price = 100;

//     let ipad = new Product();
//     ipad.name="Nokia";
//     ipad.description="3310";
//     ipad.price = 1500;

//     let macBook = new Product();
//     macBook.name="Nokia";
//     macBook.description="3220";
//     macBook.price = 500;

//     products.push(iphone,ipad,macBook);

//     let company : Company =  new Company();
//     company.name ="Nokia";
//     company.description="Another Company";
//     company.products = products;

//     const dataInserted = await compnayRepo.save(company);

//     res.json(dataInserted);
// });



//set DB connection
// const appDataSource = new DataSource({
//     type:"mariadb",
//     host:"localhost",
//     port:3306,
//     username:'nodejsmysqlts',
//     password:'nodejsmysqlts',
//    database:'typeOrmTsNodeJsMysql',
//    entities:["src/entities/*{.ts,.js}"],
//    migrationsRun: true,
//    synchronize:false,
//    logging:true
       
// });


//initialize DB connection
appDataSource.initialize().then(() => {
    console.log("Connected Successfull in MariaDB.");

    app.listen(port, ()=>{
        console.log(`Listening to port: ${port} `);

    });
}).catch((err) => { console.log("Error In connecting Database", err)});

