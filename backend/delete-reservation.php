<?php
require_once "./utils/db-connect.php";
require_once "./models/reservation.php";
require_once "./utils/token-manager.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Check if the request method is DELETE
if ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    
    // Check if the token is present in the request headers
    if (!isset($_SERVER["HTTP_AUTHORIZATION"])) {
        $response = [
            "status" => "error",
            "message" => "Authorization Token is required."
        ];

        // Send the response as JSON
        header("Content-Type: application/json");
        echo json_encode($response);
        exit;
    }

    // Validate the token
    $token = $_SERVER["HTTP_AUTHORIZATION"];
    $isValid = validateToken($token);

    if (!$isValid) {
        $response = [
            "status" => "error",
            "message" => "Token expired, please login again."
        ];

        // Send the response as JSON
        header("Content-Type: application/json");
        echo json_encode($response);
        exit;
    }

    // Read the query input from the request params
    $data = $_GET;

    if (!isset($data["id"])){
        $response = [
            "status" => "error",
            "message" => "ID is required"
        ];

        // Send the response as JSON
        header("Content-Type: application/json");
        echo json_encode($response);
        exit;
    }

    //delete reservation
    $reservation = new Reservation($conn);
    $success = $reservation->deleteReservation($data);

    // Check if the data was inserted successfully
    if ($success) {
        // If data insertion is successful
        $response = [
            "status" => "success",
            "message" => "Reservation deleted successfully"
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
    // If the request method is not DELETE, return an error response
    $response = [
        "status" => "error",
        "message" => "Invalid request method."
    ];

    // Send the response as JSON
    header("Content-Type: application/json");
    echo json_encode($response);
}