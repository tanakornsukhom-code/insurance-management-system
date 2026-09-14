<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: *"); 
header("Content-Type: application/json; charset=UTF8"); 
include "conn.php";

$REQUEST_METHOD = $_SERVER["REQUEST_METHOD"];
if($REQUEST_METHOD == "POST") {
    // ดึง Agent_ID ล่าสุด
    $sql = "SELECT MAX(Agent_ID) AS maxagent FROM agent";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetch();

    if ($result && $result['maxagent']) {
        // ตัด prefix 'AG' แล้วแปลงเป็นตัวเลข
        $lastNumber = intval(substr($result['maxagent'], 2));
        $newNumber = $lastNumber + 1;
    } else {
        $newNumber = 1;
    }

    // สร้าง Agent_ID ใหม่ เช่น AG005
    $newAgentID = 'AG' . str_pad($newNumber, 3, '0', STR_PAD_LEFT);
    // รับข้อมูลจาก Angular
    $data = json_decode(file_get_contents("php://input")); 
    $title_id =$data -> title_id;
    $First_Name = $data->First_Name; 
    $Last_Name = $data->Last_Name;
    $License_No = $data->License_No;
    $Phone = $data->Phone;
    $Email = $data->Email;
    $Branch = $data->Branch;
    $sql = "INSERT INTO `agent` (`Agent_ID`,`title_id`, `First_Name`, `Last_Name`, `License_No`, `Phone`, `Email`, `Branch`) 
            VALUES (:Agent_ID,  :title_id, :First_Name, :Last_Name, :License_No, :Phone, :Email, :Branch)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':Agent_ID' => $newAgentID,
        ':title_id' => $title_id,
        ':First_Name' => $First_Name,
        ':Last_Name' => $Last_Name,
        ':License_No' => $License_No,
        ':Phone' => $Phone,
        ':Email' => $Email,
        ':Branch' => $Branch
    ]);
}
?>
