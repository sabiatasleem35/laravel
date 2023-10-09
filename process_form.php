<?php
// Include the Instamojo library
include 'instamojo/src/Instamojo.php';

$servername = "localhost";
$username = "root";  // Your database username
$password = "";  // Your database password
$dbname = "registration"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data (as you did before)
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$address = $_POST['address'];
$designation = $_POST['designation'];
$organization = $_POST['organization'];
$registrationType = $_POST['registrationType'];
$companion = $_POST['companion'];
$accommodation = isset($_POST['accommodation']) ? 1 : 0;
$hotel = isset($_POST['hotel']) ? $_POST['hotel'] : "";
$occupancy = isset($_POST['occupancy']) ? $_POST['occupancy'] : "";
$nights = isset($_POST['nights']) ? $_POST['nights'] : 1;
$totalCost = $_POST['totalCost'];

// Generate transaction ID
$transactionID = "RT" . str_pad(rand(1, 99999), 5, '0', STR_PAD_LEFT);

$sql = "INSERT INTO users (name, phone, email, address, designation, organization, registration_type, companion, accommodation, hotel, occupancy, nights, totalCost, transactionID)
VALUES ('$name', '$phone', '$email', '$address', '$designation', '$organization', '$registrationType', '$companion', $accommodation, '$hotel', '$occupancy', '$nights', '$totalCost', '$transactionID')";

if ($conn->query($sql) === TRUE) {
    // Redirect to Instamojo Payment Page
    header("Location: payment_page.php?id=$transactionID");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
