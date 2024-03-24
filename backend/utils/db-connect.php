<?php
// Function to establish a connection to the database

    $servername = "localhost";
    $username = "root";
    $password = "cccc";
    $dbname = "hotel";

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // create database if not exists
    $sql = "CREATE DATABASE IF NOT EXISTS hotel";
    if ($conn->query($sql) === TRUE) {
        $conn->select_db($dbname);
    } else {
        echo "Error creating database: " . $conn->error;
    }

    // sql to create table
    $sql = "CREATE TABLE IF NOT EXISTS reservation (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        company_name VARCHAR(100),
        phone VARCHAR(10) NOT NULL,
        email VARCHAR(50),
        date_time DATETIME NOT NULL,
        event_type VARCHAR(20) NOT NULL,
        meal_type VARCHAR(10) NOT NULL,
        count INT(4) NOT NULL,
        remarks TEXT
    )";

    if ($conn->query($sql) === TRUE) {
        // echo "Table reservation created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }



