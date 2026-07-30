function validateForm() {

    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var comments = document.getElementById("comments").value;

    if (name == "" || email == "" || country == "" || comments == "") {

        alert("Please fill in all fields before submitting!");

        return false;

    }

    alert("Form submitted successfully!");

    return true;

}
