import "reflect-metadata";
import express from 'express';
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Profile } from "./entities/Profile";
const app = express();

app.use(express.json());

const port = 9070;



app.get('/', async (req,res)=>{
    //res.send("Hello form the Express world");
    const userRepo = appDataSource.getRepository(User);
    const profileRepo = appDataSource.getRepository(Profile);
    
    let profile : Profile = new Profile();
    profile.gender = "female";
    profile.photo = "this is a photo";

    let user: User = new User();
    user.email = "sample3@email.com";
    user.firstname = "Sample3";
    user.lastname = "Name3";
    user.profile = profile;
    const userInserted = await userRepo.save(user);

res.json(userInserted);
});





//set DB connection
const appDataSource = new DataSource({
    type:"mariadb",
    host:"localhost",
    port:3306,
    username:'nodejsmysqlts',
    password:'nodejsmysqlts',
   database:'typeOrmTsNodeJsMysql',
   entities:["src/entities/*{.ts,.js}"],
   migrationsRun: true,
   logging:true
       
});





//initialize DB connection
appDataSource.initialize().then(() => {
    console.log("Connected Successfull in MariaDB.");

    app.listen(port, ()=>{
        console.log(`Listening to port: ${port} `);

    });
}).catch((err) => { console.log("Error In connecting Database", err)});

