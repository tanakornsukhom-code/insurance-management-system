<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: *"); 
header("Content-Type: application/json; charset=UTF8"); 
include "conn.php";
$REQUEST_METHOD = $_SERVER["REQUEST_METHOD"];
if($REQUEST_METHOD=="POST"){
    $sql="select max(Customer_id) as maxcustomer from customer";
    $stmt=$pdo->prepare($sql);
    $stmt->execute();
    $result=$stmt->fetchAll();
    if(isset($result[0]['maxcustomer'])){
        $maxcustomer=$result[0]['maxcustomer']+1;
    }else{
        $maxcustomer=1;
    }
    $data = json_decode(file_get_contents("php://input")); 
    $ID_Card_No = $data->ID_Card_No;
    $title_id =$data -> title_id;
    $First_Name = $data->First_Name; 
    $Last_Name = $data->Last_Name;
    $Date_Of_Birth = $data->Date_Of_Birth;
    $Gender = $data->Gender;
    $Phone = $data->Phone;
    $Email = $data->Email;
    $Address = $data->Address;
   $sql = "INSERT INTO customer (`Customer_ID`,`ID_Card_No`, `title_id`, `First_Name`, `Last_Name`, `Date_Of_Birth`, `Gender`, `Phone`, `Email`, `Address`) 
            VALUES ('$maxcustomer','$ID_Card_No', '$title_id', '$First_Name','$Last_Name','$Date_Of_Birth','$Gender','$Phone','$Email','$Address')";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
}
?>