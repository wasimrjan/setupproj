import oracledb from 'oracledb';
import env from '../env';

class db {

ExecuteDML = async(sql:any)=>
{
    oracledb.autoCommit = true;
    var Conn = await oracledb.getConnection({
      user: env.dbUser,
      password: env.dbPassword,
      connectString: env.dbConnection
  });

  Conn.execute(sql); 

  Conn.close();
}

ExecuteQuery=(sql:any,param:any)=>
{
  return new Promise(async (resolve,reject)=>{

    var Conn = await oracledb.getConnection({
      user: env.dbUser,
      password: env.dbPassword,
      connectString: env.dbConnection
  });

  oracledb.autoCommit = true;

  try{
      await Conn.execute(sql,param,{
        outFormat:oracledb.OUT_FORMAT_OBJECT},(error,result)=>{
        if(error)
          return reject(error);
        else
          return resolve(result.rows);
      }); 
    }catch{

    }
    finally{
      await Conn.close();
    }
  });
}
}

export default db;
