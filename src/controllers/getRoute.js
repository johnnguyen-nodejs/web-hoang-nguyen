var {register, verifyAccount} = require("./register");
var { 
    updatePhoneNow, 
    updateAddressNow, 
    verifyAccountForgetPassword,
    RecoverPassword ,
    updateNewPassword
} = require("./userUpdate");

var getHome = (req, res)=>{
    res.render("index", {
        title: "WBank | Home",
        user: req.user
    });
};
var getRecoverPassword = (req, res)=>{
    res.render("authentication/recover-password", {
        title: "WBank | Recove password",
        user: req.user
    });
};
var getSendMailPassword = (req, res)=>{
    res.render("authentication/send-mail", {
        title: "WBank | Email Recover Password",
        user: req.user
    });
};
var getUpdatePassword = (req, res)=>{
    res.render("authentication/new-password", {
        title: "WBank | Update New Password",
        user: req.user
    });
};
var getConfirmMail = (req, res)=>{
    res.render("auth/confirm-mail", {
        title: "WBank | Confirm Email",
        user: req.user
    });
};

var getRegister = (req, res)=>{
        res.render("authentication/register", {
            title: "WBank | Register",
            errors: req.flash("errors"),
            success: req.flash("success"),
            user: req.user
        });
    };
var getLogin = (req, res)=>{
        res.render("authentication/login", {
            title: "WBank | Login",
            errors: req.flash("errors"),
            success: req.flash("success"),
            user: req.user
        });
    };
var getLogout = (req, res) => {
    req.logout();
    return res.redirect("/login");
};

var checkLogedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        return res.redirect("/login");
    };
    next();
};

var checkLogedOut = (req, res, next) => {
    if(req.isAuthenticated()){
        return res.redirect("/");
    };
    next();
};
var checkAdmin = (req, res, next) => {
    var isAdmin = req.user.role;
    if(isAdmin != "admin"){
        return res.redirect("/");
    }
    next();
}

module.exports = {
    getHome: getHome,
    getRegister: getRegister,
    getLogin: getLogin,
    postRegister: register,
    verifyAccount: verifyAccount,
    getLogout: getLogout,
    checkLogedIn: checkLogedIn,
    checkLogedOut: checkLogedOut,
    getConfirmMail: getConfirmMail,
    updatePhone: updatePhoneNow,
    updateAddress: updateAddressNow,
    getRecoverPassword: getRecoverPassword,
    RecoverPassword: RecoverPassword,
    verifyAccountForgetPassword: verifyAccountForgetPassword,
    updateNewPassword: updateNewPassword,
    getUpdatePassword: getUpdatePassword,
    getSendMailPassword: getSendMailPassword,
    checkAdmin: checkAdmin
};
