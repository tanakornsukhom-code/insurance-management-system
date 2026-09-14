<?php
header("Access-Control-Allow-Origin: *"); //เรียกใช้ database
header("Content-Type: application/json; charset=UTF8"); //แปลงเป็น Json ไฟล์
include "conn.php";
$sql="SELECT policy.*,First_Name,Last_Name FROM `policy` LEFT JOIN customer on policy.Customer_ID = customer.Customer_ID LEFT JOIN product on policy.Product_ID = product.Product_ID WHERE Status = 'Active'";
$stmt=$pdo->prepare($sql);
$stmt->execute();
$result=$stmt->fetchAll();
echo json_encode($result);
?>