<?php
class Reservation{

    private $conn;
    private $table_name = "reservation";

    public $id;
    public $name;
    public $company_name;
    public $phone;
    public $email;
    public $date_time
    public $event_type;
    public $meal_type;
    public $count;
    public $remarks;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create($data)
    {
        $query = "INSERT INTO " . $this->table_name . " (name, company_name, phone, email, date_time, event_type, meal_type, count, remarks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $this->conn->prepare($query);

        $this->name = htmlspecialchars(strip_tags($data->name));
        $this->company_name = htmlspecialchars(strip_tags($data->companyName));
        $this->phone = htmlspecialchars(strip_tags($data->phone));
        $this->email = htmlspecialchars(strip_tags($data->email));
        $this->date_time = htmlspecialchars(strip_tags($data->eventDate))." ".htmlspecialchars(strip_tags($this->eventStartTime));
        $this->event_type = htmlspecialchars(strip_tags($data->eventType));
        $this->meal_type = htmlspecialchars(strip_tags($data->mealType));
        $this->count = htmlspecialchars(strip_tags($data->numberOfPeople));
        $this->remarks = htmlspecialchars(strip_tags($data->remarks));

        $stmt->bind_param($this->name, $this->company_name, $this->phone, $this->email, $this->date_time, $this->event_type, $this->meal_type, $this->count, $this->remarks);

        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    public function checkAvailability($data)
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE date_time LIKE ?%";

        $stmt = $this->conn->prepare($query);

        $this->date = htmlspecialchars(strip_tags($data->date))

        $stmt->bind_param($this->date);

        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            return false;
        }

        return true;
    }
}