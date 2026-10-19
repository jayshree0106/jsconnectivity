const mysql=require('mysql2');

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"m1",
    port:3307

})

db.connect((err)=>{
    if(err){
        throw err
    }
    console.log("connected");
})
function insertEmp(name,salary){
    const sql="insert into emp(name,salary) values(?,?)";
    db.query(sql,[name,salary],(err,result)=>{
        if(err){
            throw err;

        }
        else{
            console.log("data inserted successfully",result.insertId);
        }
    })
}
//insertEmp("tom",129000);

function displayEmpData(){
    const sql="select * from emp";
    db.query(sql,(err,result)=>{
        if(err){
            throw err
        }
        else{
            console.log(result);
        }
    })
}

//displayEmpData();

function updateEmpData(name,salary,id){
    const sql ="update emp set=?,salary=? where id=?"
    db.query(sql,[name,salary,id],(err)=>{
if(err){
    throw err
}
else{
    console.log("updated sucessful");
}
    })
}
function deleteEmpData(id){
    const sql="delete from emp where id=?";
    db.query(sql,[id],(err)=>{
        if(err){
            throw err;
        }
        else{
            console.log("deleted successfully");
        }
        
    })
}
//deleteEmpData(1);


function SearchData(data1,data2){
    const sql="select*from emp where name like ?";
    db.query(sql,[`${data1}_${data2}`],(err,result)=>{
        if(err){
            throw err
        }
        else{
            console.log(result);
        }
    })
}
SearchData("t","m");

