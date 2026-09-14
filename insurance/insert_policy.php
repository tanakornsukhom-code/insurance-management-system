<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: *"); 
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8"); 
include "conn.php";

// ตรวจสอบ Method
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "status" => "error",
        "message" => "รองรับเฉพาะ POST เท่านั้น"
    ]);
    exit;
}

// รับ JSON
$input = file_get_contents("php://input");
$data = json_decode($input, true);

// ตรวจสอบค่าที่จำเป็น
$Customer_ID = $data['Customer_ID'] ?? null;
$Product_ID = $data['Product_ID'] ?? null;
$Agent_ID = $data['Agent_ID'] ?? null;
$Issue_Date = $data['Issue_Date'] ?? null;
$Expiry_Date = $data['Expiry_Date'] ?? null;
$Premium_Amount = $data['Premium_Amount'] ?? null;
$Annual_Limit = $data['Annual_Limit'] ?? null;
$Status = $data['Status'] ?? 'Active';


    // ดึง Policy_No ล่าสุด
    $sql = "SELECT MAX(Policy_No) AS maxpolicy FROM policy";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetch();

    $lastNumber = ($result && $result['maxpolicy']) ? intval(substr($result['maxpolicy'], 2)) : 0;
    $newPolicyNo = 'PL' . str_pad($lastNumber + 1, 3, '0', STR_PAD_LEFT);

    // บันทึกข้อมูล
    $sql = "INSERT INTO policy 
        (Policy_No, Customer_ID, Product_ID, Agent_ID, Issue_Date, Expiry_Date, Premium_Amount, Annual_Limit, Status) 
        VALUES 
        (:Policy_No, :Customer_ID, :Product_ID, :Agent_ID, :Issue_Date, :Expiry_Date, :Premium_Amount, :Annual_Limit, :Status)";
    $stmt = $pdo->prepare($sql);
    $success = $stmt->execute([
        ':Policy_No' => $newPolicyNo,
        ':Customer_ID' => $Customer_ID,
        ':Product_ID' => $Product_ID,
        ':Agent_ID' => $Agent_ID,
        ':Issue_Date' => $Issue_Date,
        ':Expiry_Date' => $Expiry_Date,
        ':Premium_Amount' => $Premium_Amount,
        ':Annual_Limit' => $Annual_Limit,
        ':Status' => $Status
    ]);
?>
