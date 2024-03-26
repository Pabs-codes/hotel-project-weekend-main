<?php
class ReservationDto{
    public $name;
    public $companyName;
    public $phone;
    public $email;
    public $eventDate;
    public $eventStartTime;
    public $eventType;
    public $mealType;
    public $numberOfPeople;
    public $remarks;

    public function __construct($data){
        $this->name = $data['name'];
        $this->companyName = isset($data['company_name']) ? $data['company_name'] : null;
        $this->phone = $data['phone'];
        $this->email = isset($data['email']) ? $data['email'] : null;
        $this->eventDate = $data['date_time'].substr(0, 10);
        $this->eventStartTime = $data['date_time'].substr(11, 8);
        $this->eventType = $data['event_type'];
        $this->mealType = $data['meal_type'];
        $this->numberOfPeople = $data['count'];
        $this->remarks = isset($data['remarks']) ? $data['remarks'] : null;
    }
}