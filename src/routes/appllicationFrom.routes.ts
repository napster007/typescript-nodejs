import  {Router} from 'express';

import path from 'path';
import {asyncWriteFile} from '../utils/fileWriter';
import date from 'date-and-time';

import {appDataSource} from "../config/dbConfig";

import { User } from "../entities/User";
import { Profile } from "../entities/Profile";
import { Company } from "../entities/Company";
import { Product } from "../entities/Product";
import { ApplicationForm } from "../entities/ApplicationForm";
const router = Router();

let attachmentPath = "http://192.168.245.1/attachments/";

var jasper = require('node-jasper')({
    path: path.join('../../lib/jasperreports-6.20.0') ,
    reports: {
        hw: {
            jasper: path.join('../reports/S1_Application_Form.jasper'),
            jrxml: path.join('../reports/S1_Application_Form.jrxml'),
            conn: 'in_memory_json'
        }
    },
});


const dd = new Date("2022-09-26 09:37:57.686");
const formatedDate = date.format(dd,'MMMM D, YYYY' );





router.get('/testing', async (req,res)=>{
    //res.send("Hello form the Express world");
    // const userRepo = appDataSource.getRepository(User);
    // const profileRepo = appDataSource.getRepository(Profile);
    //////Create User
    // let profile : Profile = new Profile();
    // profile.gender = "female";
    // profile.photo = "this is a photo";

    // let user: User = new User();
    // user.email = "sample3@email.com";
    // user.firstname = "Sample3";
    // user.lastname = "Name3";
    // user.profile = profile;
    // const userInserted = await userRepo.save(user);
    //res.json(userInserted);

    //get all records
    // const allRecords = await userRepo.find();
    // res.json(allRecords);

    // const getRecord = await userRepo.findOne({where : {
    //     id:3
    // }});

    // if(!getRecord){
    //     return res.status(404).send("No Data Found");
    // }

    // getRecord.email = "newemail@gmail.com";
    // getRecord.firstname = "Test";
    // getRecord.lastname = "Name";
    // getRecord.profile.gender="Male";
    // getRecord.profile.photo ="No photo";

    // const updateRecord = await userRepo.save(getRecord);
    // res.json(updateRecord);
    //res.json(getRecord);


    //delete Record
    //await userRepo.delete(3);
    
    //await profileRepo.delete(3);
    //res.send("Profile deleted");
   
    const compnayRepo = appDataSource.getRepository(Company);

    //insert
    let products : Product[] = [];
    let iphone = new Product();
    iphone.name="Nokia";
    iphone.description="3210";
    iphone.price = 100;

    let ipad = new Product();
    ipad.name="Nokia";
    ipad.description="3310";
    ipad.price = 1500;

    let macBook = new Product();
    macBook.name="Nokia";
    macBook.description="3220";
    macBook.price = 500;

    products.push(iphone,ipad,macBook);

    let company : Company =  new Company();
    company.name ="Nokia";
    company.description="Another Company";
    company.products = products;

    const dataInserted = await compnayRepo.save(company);

    res.json(dataInserted);
    //res.send({message:"API is WORKING!"});
});

router.get('/reports/s1applicationform', async (req,res)=>{
    
    const applicationFormRepo = appDataSource.getRepository(ApplicationForm);
    
    const allRecords = await applicationFormRepo.findOne({where : {id:1}});
    //res.json(allRecords);

    var report = {
        report: 'hw',
        data: {
            dataset1: jasper.toJsonDataSource(
                        {
                            data:{}
                               
                        },
                        'data' 
                    ),
        },
            dataset: {
                applicationDate:formatedDate,
                referenceCode: allRecords?.reference_code,
                adTitle: allRecords?.ad_title,
                imagePath: req.query.imagePath,
                supportingDocuments: attachmentPath + allRecords?.supporting_attachment_reference,
                typeOfMedium:allRecords?.type_of_medium,
                mainDocument: attachmentPath + allRecords?.main_attachment_reference,
                qrCode:attachmentPath + "asc.jpg",
                company:{
                    companyName:allRecords?.company_id.description,
                    membersAffiliation:{
                        description:"Sample Affille"
                    }
                },
                brand:{description: allRecords?.brand_id.description},
                product:{
                    description:allRecords?.product_id.description,
                    category:{description: allRecords?.company_id.description},
                    
                },
                applicationOwner:{
                    firstName:"Firstname",
                    lastName:"lastname",
                    mobileNumber:"091543432432",
                        username:"SAMPLE",
                    company:{
                        companyName:"Sample Comply",
                        completeAddress:"ddfdfd",
                        membersAffiliation:{
                            description:"fdfdsfd"
                        },
                        
                        companyTelephoneNo:"656"
                    }
                }
                
        }
        
            
       
    };

    console.log(report);
    var pdf = jasper.pdf(report);
    res.set({
        'Content-type': 'application/pdf',
        'Content-Length': pdf.length
    });
    let fileName = "ASC"+report.dataset.referenceCode+".pdf";
    let directoryReports = "../generatedReports/";
    
    
    if( await asyncWriteFile(directoryReports + fileName,pdf)){
        console.log("Success creating file: "+fileName);
    }
    res.send(report);

    
});

export default router;