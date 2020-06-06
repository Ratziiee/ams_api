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


