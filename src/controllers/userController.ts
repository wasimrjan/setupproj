
import { Console } from 'console';
import db from '../oracle/connection';
import jwt from 'jsonwebtoken'; 
import env from '../env'
class userController
{
  dbo = new db();

  Login = async (req:any,res:any)=>{
    var id = req.body.id;
    var pass = req.body.password;
    //console.log(pass);
    if(id="admin" && pass=="admin")
    {
        var token = jwt.sign({id:id},env.secretKey);
        res.json({jwt:token});
    }
    else
      res.send("Not Ok")
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