const { db, pg, pool} = require('../../config/dbConfig');
const msgs = require('../../config/constants');





module.exports.test = (req,res) => {
    var query = `SELECT id, userid, password, type
	FROM public.login_master;`;
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send(data);
    }).catch((err) => {
        console.log('error aaya',err);
        res.send(err);
    });
}

module.exports.getAllEmployees = (req,res) => {
    var query = `SELECT id, name, email, mobile, designation, department, emp_id
	FROM public.user_master`;
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send(data);
    }).catch((err) => {
        console.log('error aaya',err);
        res.send(err);
    });
}

module.exports.postAddEmployee = (req,res) => {

    let name=req.query.name;
    let email=req.query.email;
    let mobile=req.query.mobile;
    let designation = req.query.designation;
    let department = req.query.department;
    let emp_id = req.query.emp_id;
    let employee_type = req.query.employee_type;

    var query = `INSERT INTO public.user_master(
        name, email, mobile, designation, department, emp_id, emp_type)
        VALUES ('${name}', '${email}', ${mobile}, '${designation}', '${department}', '${emp_id}', '${employee_type}')`;
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send(data);
    }).catch((err) => {
        console.log('error aaya',err);
        res.send(err);
    });
}

module.exports.getAllEmployeesLogs = (req,res) => {
    var query = `SELECT *
	FROM public.attendance_master`;
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send(data);
    }).catch((err) => {
        console.log('error aaya',err);
        res.send(err);
    });
}

module.exports.getSingleEmployeesLogs = (req,res) => {

    let emp_id = req.query.emp_id;
    let mobile = req.query.mobile;

    var query = `SELECT *
	FROM public.attendance_master where emp_id = '${emp_id}' and mobile = ${mobile}`;
    debugger
    db.any(query).then((data) => {
        console.log('data aaya',data);
        // utils.sendMail(req,res,"AeroGMS","ratzupadhyay@gmail.com","Welcome to AeroGMS",response_msgs.signup_mail,"");
        res.send(data);
    }).catch((err) => {
        console.log('error aaya',err);
        res.send(err);
    });
}



