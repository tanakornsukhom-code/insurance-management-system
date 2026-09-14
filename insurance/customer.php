<?php
header("Access-Control-Allow-Origin: *"); //เรียกใช้ database
header("Content-Type: application/json; charset=UTF8"); //แปลงเป็น Json ไฟล์
include "conn.php";
$sql="select Customer_ID, ID_Card_No, title_name, First_Name, Last_Name from customer 
left join title on customer.title_id = title.title_id";
$stmt=$pdo->prepare($sql);
$stmt->execute();
$result=$stmt->fetchAll();
echo json_encode($result);
?>