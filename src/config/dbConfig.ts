
import "reflect-metadata";
import { DataSource } from "typeorm";

//set DB connection
export const appDataSource = new DataSource({
    type:"mariadb",
    host:"localhost",
    port:3306,
    username:'nodejsmysqlts',
    password:'nodejsmysqlts',
   database:'typeOrmTsNodeJsMysql',
   entities:["src/entities/*{.ts,.js}"],
   synchronize:false,
   logging:true
       
});

module.exports = {
    appDataSource:appDataSource
};