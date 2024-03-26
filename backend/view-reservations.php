<?php
//view all reservations after validating token
require_once "./utils/db-connect.php";
require_once "./models/reservation.php";
require_once "./utils/token-manager.php";
require_once "./dto/reservation-dto.php";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Check if the request method is GET
if ($_SERVER["REQUEST_METHOD"] === "GET") {
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

    //Create a new Reservation object
    $reservation = new Reservation($conn);
    $result = $reservation->getAllReservations();

    $reservations = [];
    foreach ($result as $row) {
        $reservationDto = new ReservationDto($row);
        array_push($reservations, $reservationDto);
    }
  

    // Send the response as JSON
    header("Content-Type: application/json");
    echo json_encode($reservations);
} else {
    // If the request method is not GET, return an error response
    $response = [
        "status" => "error",
        "message" => "Invalid request method."
    ];

    // Send the response as JSON
    header("Content-Type: application/json");
    echo json_encode($response);
}