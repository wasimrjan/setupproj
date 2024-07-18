"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../oracle/connection"));
class productController {
    constructor() {
        this.dbo = new connection_1.default();
        this.ProudctShow = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var sql = "select * from t_product where id = :id";
            res.send(yield this.dbo.ExecuteQuery(sql, req.body));
        });
        this.ProudctList = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this.dbo.ExecuteQuery("select * from t_product", {}));
        });
        this.ProudctAdd = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var param = req.body;
            var sql = "insert into t_product(id,product,producttp)";
            sql += " values(:id,:product,:producttp)";
            console.log(sql);
            res.send(yield this.dbo.ExecuteQuery(sql, param));
        });
    }
}
exports.default = productController;
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
