import {createConnection} from "typeorm";


const main = async ()=>{
     
    try{
        await createConnection({
            type:"mariadb",
            host:"localhost",
            port:3306,
            username:"nodetsorm",
            password:"nodetsorm",
            database:"banksys"
        });
        console.log("Connected to Mariadb")
    }catch(error){
        console.error("Cant Connect to Mariadb")
    }
}