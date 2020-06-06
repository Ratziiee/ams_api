let main_obj = {};

main_obj.db = {};
main_obj.db.user = 'postgres';
main_obj.db.pwd = 'ratziiee';
// main_obj.db.dbName = 'nhai_ams';
main_obj.db.dbName = 'postgres';
// main_obj.db.host = 'localhost';
main_obj.db.host = 'ams.carzqrhlvekg.ap-south-1.rds.amazonaws.com';
main_obj.db.port = 5432;
main_obj.db.maxConnections = 50;
main_obj.db.idleTimeoutMillis = 30000;

main_obj.geoServer = {};
main_obj.geoServer.host = 'localhost';
main_obj.geoServer.port = 8080;
main_obj.geoServer.credential = 'admin:geoserver';

main_obj.server = {};
main_obj.server.port = 5002;

main_obj.msgs = {};
main_obj.msgs.productName = "AeroGMS";
main_obj.msgs.signup_success = "Your Account is successfully created";
main_obj.msgs.signup_acc_exists = "This Account is already exists";
main_obj.msgs.signup_mail = "Welcome to thr AeroGMS Family";
main_obj.msgs.account_not_exists = "Invalid Account";
main_obj.msgs.forgot_password = "Change password : click here \n https://abc.com/forgotpassword/email="
main_obj.msgs.forgot_password_success = "Your request is successfully submited. Please check your registered mail to change the password";
main_obj.msgs.profile_updated = "Profile is successfully updated";
main_obj.msgs.incomplete_details = "Incomplete Details. Please try again";
main_obj.msgs.project_creation_success = "Project is successfully created";
main_obj.msgs.project_fetching_success = "All projects are fetched successfully";
main_obj.msgs.project_rename_success = "Project is renamed successfully";
main_obj.msgs.project_delete_success = "Project is deleted successfully";
main_obj.msgs.invalid_mobile_no = "Mobile number is invalid";

//--------------------UNIVERSAL ERROR MSG--------------------------------//

main_obj.msgs.error = "The request was not completed. The server met an unexpected condition.";

//----------------------------------//------------------------------------

module.exports.main_obj = main_obj;