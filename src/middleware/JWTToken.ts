import db from '../oracle/connection'
import jwt from 'jsonwebtoken'; 
import env from '../env'
import enc from 'crypto-js';

class JWTToken {

    createSessionToken = async (usr:any)=>{
        try{
        
            var token = jwt.sign({usr:usr},env.secretKey,{expiresIn:"30d"});
 
            return token;
        }catch(e){
          console.log(e);
          return '';
        }
      }

// ExecuteQuery=(sql:any,param:any)=>
// {
//   return new Promise(async (resolve,reject)=>{

//     var Conn = await oracledb.getConnection({
//       user: env.dbUser,
//       password: env.dbPassword,
//       connectString: env.dbConnection
//   });

//   oracledb.autoCommit = true;

//   try{
//       await Conn.execute(sql,param,{
//         outFormat:oracledb.OUT_FORMAT_OBJECT},(error,result)=>{
//         if(error)
//           return reject(error);
//         else
//           return resolve(result.rows);
//       }); 
//     }catch{

//     }
//     finally{
//       await Conn.close();
//     }
//   });
// }
}

export default JWTToken;
