
import { Console } from 'console';
import db from '../oracle/connection';
import enc from 'crypto-js';
import env from '../env'
import JWTToken from '../middleware/JWTToken';
class userController
{
  dbo = new db();
  jwtToken = new JWTToken();
  Login = async (req:any,res:any)=>{
    try{
    var id = req.body.id;
    var pass = req.body.password;
   
    id = enc.AES.decrypt(id,env.encryptionKey).toString(enc.enc.Utf8);
    pass = enc.AES.decrypt(pass,env.encryptionKey).toString(enc.enc.Utf8);
 
    var sql = "select * from t_user where usr = :usr and pwd = :pwd";
    
    const udata:any = await this.dbo.ExecuteQuery(sql,{usr:id,pwd:pass});

    if(udata.length>0){
      var ssToken = await this.createSession(id);
      res.status(200).json({msg:"ok",data:"Login Successful",jwt:ssToken});
    }  
    else{
      res.status(500).json({msg:"Invalid Login",jwt:null});
    }

    /*
    if(id=="admin" && pass=="pass@321#")
    {
        var token = jwt.sign({id:id},env.secretKey);
        res.json({jwt:token});
    }
    else
      res.sendStatus(401);
    */
    }catch(e){
      res.sendStatus(500).json({msg:e,jwt:null});
    }
  }

  createSession = async (usr:any)=>{
    try{
    
    var ssToken = await this.jwtToken.createSessionToken(usr);  

    //var ssd:any = await this.dbo.ExecuteQuery("select nvl(max(ssid),0) + 1 as ssid from t_user_session where usr=:usr",{usr:usr}); 

    //var sql = 
    //"insert into t_user_session(ssid,usr,sstoken) values(:ssid,:usr,:sstoken)";

    var sql = 
    "BEGIN PC_SessionToken(:usr,:sstoken); END;";

    await this.dbo.ExecuteQuery(sql,{usr:usr,sstoken:ssToken});
   
    return ssToken;
    }catch(e){
       console.log(e);
       return '';
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