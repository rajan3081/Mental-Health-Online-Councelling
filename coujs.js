function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;

    // You can perform validation here before submitting the form

    // For simplicity, let's just log the data to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Preferred Date: " + date);
    console.log("Additional Information: " + message);

    // You can send this data to the server using AJAX or fetch API
    // For now, let's just alert the user
    alert("Appointment submitted successfully!");
}
