<?php

class User{
    private $conn;
    private $table_name = "user";

    private $id;
    private $email;
    private $password;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function validateCredentials($email, $password)
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE email = ? AND password = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bind_param("ss", $email, $password);

        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            return true;
        }

        return false;
    }
}