<?php
require_once "./utils/db-connect.php";
require_once "./classes/reservation.php";

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Read the JSON input from the request body
    $data = json_decode(file_get_contents("php://input"), true);

    // Create a new Reservation object
    $success = new Reservation($conn).create($data);

    // Check if the data was inserted successfully
    if ($success) {
        // If data insertion is successful
        $response = [
            "status" => "success",
            "message" => "Form submitted successfully."
        ];
    } else {
        // If an error occurs during data insertion
        $response = [
            "status" => "error",
            "message" => "An error occurred"
        ];
    }

    // Send the response as JSON
    header("Content-Type: application/json");
    echo json_encode($response);
} else {
    // If the request method is not POST, return an error response
    $response = [
        "status" => "error",
        "message" => "Invalid request method."
    ];

    // Send the response as JSON
    header("Content-Type: application/json");
    echo json_encode($response);
}

?>