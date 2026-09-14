<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: *"); 
header("Content-Type: application/json; charset=UTF8"); 
include "conn.php";

$REQUEST_METHOD = $_SERVER["REQUEST_METHOD"];
if($REQUEST_METHOD == "POST") {
    // ดึง Agent_ID ล่าสุด
    $sql = "SELECT MAX(Product_ID) AS maxproduct FROM product";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetch();

    if ($result && $result['maxproduct']) {
        // ตัด prefix 'PR' แล้วแปลงเป็นตัวเลข
        $lastNumber = intval(substr($result['maxproduct'], 2));
        $newNumber = $lastNumber + 1;
    } else {
        $newNumber = 1;
    }

    // สร้าง Agent_ID ใหม่ เช่น AG005
    $newProduct = 'PR' . str_pad($newNumber, 3, '0', STR_PAD_LEFT);
    // รับข้อมูลจาก Angular
    $data = json_decode(file_get_contents("php://input")); 
    $Product_Name = $data->Product_Name; 
    $Type = $data->Type;
    $Description = $data->Description;
    $Coverage_Amount = $data->Coverage_Amount;
    $Base_Premium = $data->Base_Premium;
    $sql = "INSERT INTO `product` 
        (`Product_ID`, `Product_Name`, `Type`, `Description`, `Coverage_Amount`, `Base_Premium`) 
        VALUES (:Product_ID, :Product_Name, :Type, :Description, :Coverage_Amount, :Base_Premium)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
    ':Product_ID' => $newProduct,
    ':Product_Name' => $Product_Name,
    ':Type' => $Type,
    ':Description' => $Description,
    ':Coverage_Amount' => $Coverage_Amount,
    ':Base_Premium' => $Base_Premium
]);
}
?>
