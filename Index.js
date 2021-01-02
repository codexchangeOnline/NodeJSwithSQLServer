var sql = require('mssql');
var config = require('./dbConn');
 function deleteEmployee(paramEmpId){
    try{
        // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        // query to the database and add the records
        request
        .input('EmpId',sql.Int,paramEmpId)
        .execute('dbo.sp_deleteempMaster', function (err, recordset) {
            if (err) console.log(err)
            // send message as a response
            if(recordset.rowsAffected.length > 0)
            {
                console.log('Record deleted successfully for EmpId '+ paramEmpId);
            }
                        
        });
    });
    }
    catch(error)
    {
        console.log(error);
    }
}
deleteEmployee(4);


function getEmployee(){
    try{
        // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
        request.query('select * FROM dbo.empMaster', function (err, recordset) {
            if (err) console.log(err)
            // send records as a response
            console.log(recordset);            
        });
    });
    }
    catch(error)
    {
        console.log(error);
    }

function addEmployee(paramEmpName,paramSalary,paramDepartment){
    try{
        // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        // query to the database and add the records
        request
        .input('EmpName',sql.VarChar,paramEmpName)
        .input('Salary',sql.Int,paramSalary)
        .input('Department',sql.VarChar,paramDepartment)
        .query('INSERT INTO dbo.empMaster (EmpName,Salary,Department) VALUES (@EmpName,@Salary,@Department)', function (err, recordset) {
            if (err) console.log(err)
            // send records as a response
            console.log(recordset);            
        });
    });
    }
    catch(error)
    {
        console.log(error);
    }
}


function updateEmployee(paramEmpId,paramEmpName,paramSalary,paramDepartment){
    try{
        // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        // query to the database and add the records
        request
        .input('EmpId',sql.Int,paramEmpId)
        .input('EmpName',sql.VarChar,paramEmpName)
        .input('Salary',sql.Int,paramSalary)
        .input('Department',sql.VarChar,paramDepartment)
        .execute('dbo.sp_updateempMaster', function (err, recordset) {
            if (err) console.log(err)
            // send records as a response
            console.log(recordset);            
        });
    });
    }
    catch(error)
    {
        console.log(error);
    }
}
//updateEmployee(4,"KundanJHA",4990,'IT')