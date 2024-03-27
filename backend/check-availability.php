<?php
require_once "./utils/db-connect.php";
require_once "./models/reservation.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "GET") {

    // Read the query input from the request params
    $data = $_GET;

    if (!isset($data["date"])){
        $response = [
            "status" => "error",
            "message" => "Date is required"
        ];

        // Send the response as JSON
        header("Content-Type: application/json");
        echo json_encode($response);
        exit;
    }

    //check date availability
    $reservation = new Reservation($conn);
    $success = $reservation->checkAvailability($data);

    // Check if the data was inserted successfully
    if ($success) {
        // If data insertion is successful
        $response = [
            "status" => "success",
            "message" => "Date is available"
        ];
    } else {
        // If an error occurs during data insertion
        $response = [
            "status" => "error",
            "message" => "Date is not available"
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

