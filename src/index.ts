import express from 'express';
import env from './env';
import jwt from 'jsonwebtoken'; 

import productRouter from './routers/productsRouter';
import userRouter from './routers/userRouter';

const app = express();

class AuthResp{
    id:boolean=false;
}

const jwtAuth = (req:any,res:any,next:any)=>{
    try{
        const token = req.get("Authorization").split("Bearer ")[1];
    console.log(jwt.verify(token,env.secretKey));
    //var decode = new AuthResp();
        var decode:AuthResp = <AuthResp>jwt.verify(token,env.secretKey);
    
        if(decode.id)
            next();  //Forward to Next Process
        else
            res.sendStatus(401);
    }catch(e){
        res.sendStatus(401);
    }
     
};


app.use(express.json());

app.use('/user',userRouter);
app.use('/product',jwtAuth,productRouter);

app.get('/',(req,res)=>{

    res.send("Ok");

});

app.listen(env.apiPort,()=>{

    console.log("http://localhost:" + env.apiPort);
    console.log("is ready to connect");

});
