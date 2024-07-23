
import { Console } from 'console';
import db from '../oracle/connection';
import jwt from 'jsonwebtoken'; 
import env from '../env'
import enc from 'crypto-js';

class userController
{
  dbo = new db();

  Login = async (req:any,res:any)=>{
    try{
    var id = req.body.id;
    var pass = req.body.password;
   
    id = enc.AES.decrypt(id,env.encryptionKey).toString(enc.enc.Utf8);
    pass = enc.AES.decrypt(pass,env.encryptionKey).toString(enc.enc.Utf8);
 
    console.log(id);

    if(id=="admin" && pass=="pass@321#")
    {
        var token = jwt.sign({id:id},env.secretKey);
        res.json({jwt:token});
    }
    else
      res.sendStatus(401);
    }catch(e){
      res.send(e);
    }
  }


}

export default userController;

/*
exports.ProudctUpdate = (req,res)=>{
    
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  });


  var roll = req.body.roll;
  var nm = req.body.nm;

  con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "update t_data set nm = '" + nm + "' where roll =  '" + roll + "'";
      con.query(sql, function (err, result) {
        if (err) throw err;
        res.send("Data Updated");
      });
  });    

}



exports.ProductDelete = (req,res)=>{
  
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  });
  
  var roll = req.params.id;

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "delete from t_data where roll = " + roll + "";
      con.query(sql, function (err, result) {
        if (err) throw err;
        res.send("Data Deleted : " + roll);
      });
    });

    //res.send("Product Deleted..."+id);
}

*/