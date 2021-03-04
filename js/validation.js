let counter = 0;

const searchId = document.getElementById('searchId');
const signUpNameId = document.getElementById('inputName');
const loginNameId = document.getElementById('inputName2');
const signUpEmailId = document.getElementById('inputEmail');
const signUpPasswordId = document.getElementById('inputPassword');
const signUpPasswordConfId = document.getElementById('inputConfirm');
const loginPasswordId = document.getElementById('inputPassword2');
const signUpProvinceId = document.getElementById('inputProvince');


// SEARCH

function searchValidator() {

    let search = document.getElementById('searchId').value;

        if (search.length <= 3) {
            searchId.classList.add("is-invalid");
            return false;
        } else {
            return true;
        }
}


// SIGN UP

function signUpValidator() {

    let signUpName = document.getElementById('inputName').value;
    let signUpEmail = document.getElementById('inputEmail').value;
    let signUpPassword = document.getElementById('inputPassword').value;
    let signUpPasswordConf = document.getElementById('inputConfirm').value;
    let signUpProvince = document.getElementById('inputProvince').value;


    if (signUpName == "" || signUpName.length > 10) {
        signUpNameId.classList.add("is-invalid");
        counter++;
    } 

    if (signUpEmail == "") {
        signUpEmailId.classList.add("is-invalid");
        counter++;
    } else if (!emailValidator(signUpEmail)) {
        signUpEmailId.classList.classList.add("is-invalid");
        counter++;
    }

    if (signUpPassword == "") {
        signUpPasswordId.classList.add("is-invalid");
        counter++;
    } else if (passwordValidator(signUpPassword)) {
        signUpPasswordId.classList.add("is-invalid");
        counter++;
    }    

    if (signUpPasswordConf == "") {
        signUpPasswordConfId.classList.add("is-invalid");
        counter++;
    }
    
    if (signUpPasswordConf != signUpPassword) {
        signUpPasswordConfId.classList.add("is-invalid");
        counter++;
    }

    if (signUpProvince == 01) {
        signUpProvinceId.classList.add("is-invalid");
        counter++;
    }

    if (counter > 0) {
        return false;
    } else {
        return true;
    }
}



// LOGIN

function loginValidator() {

    let loginName = document.getElementById('inputName2').value;
    let loginPassword = document.getElementById('inputPassword2').value;

    if (loginName == "" || loginName.length > 10) {
        loginNameId.classList.add("is-invalid");
        counter++;
    } 

    if (loginPassword == "") {
        loginPasswordId.classList.add("is-invalid");
        counter++;
    } else if (passwordValidator(loginPassword)) {
        loginPasswordId.classList.add("is-invalid");
        counter++;
    }    

    if (counter > 0) {
        return false;
    } else {
        return true;
    }
}


// EMAIL TEST

function emailValidator(email) {

    var regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regEmail.test(email) ? true : false;
}

// PASSWORD TEST

function passwordValidator (loginPassword) {

    let invalid = true;
    const regPassword = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
    
    if (regPassword.test(loginPassword)) {
        invalid = false;
    } else {
        invalid = true;
    }

    return invalid;
}