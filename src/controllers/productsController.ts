
import { Console } from 'console';
import db from '../oracle/connection';

class productController
{
  dbo = new db();

  ProudctShow = async (req:any,res:any)=>{
    
    var sql = "select * from t_product where id = :id";
    res.send(await this.dbo.ExecuteQuery(sql,req.body));
  
  }

  ProudctList = async (req:any,res:any)=>{
    
    res.send(await this.dbo.ExecuteQuery("select * from t_product",{}));
  
  }
 
  ProudctAdd = async (req:any,res:any)=>{

    var param = req.body;
    
    var sql = "insert into t_product(id,product,producttp)";
    sql += " values(:id,:product,:producttp)"

    console.log(sql);
    res.send(await this.dbo.ExecuteQuery(sql,param));

  }    

}

export default productController;

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