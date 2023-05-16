function bigvalidation() {
    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    //Regex for Email Validation
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;          
    // Regex for Name validation
    var regName = /\d+$/g;                                    

    // Checking firstname
    if (firstname == "" || regName.test(firstname)) {
        window.alert("Please enter your firstname properly.");
        // window.location.reload();
        return false;
    }

    // Checking lastname
    if (lastname == "" || regName.test(lastname)) {
        window.alert("Please enter your lastname properly.");
        // window.location.reload();
        return false;
    }
    
    // Checking email
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        // window.location.reload();
        return false;
    }

    if (message == "") {
        window.alert("Please enter a message.");
        // window.location.reload();
        return false;
    }

    return true;
}