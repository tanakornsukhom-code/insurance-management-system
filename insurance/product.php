<?php
header("Access-Control-Allow-Origin: *"); //เรียกใช้ database
header("Content-Type: application/json; charset=UTF8"); //แปลงเป็น Json ไฟล์
include "conn.php";
$sql="select * from product";
$stmt=$pdo->prepare($sql);
$stmt->execute();
$result=$stmt->fetchAll();
echo json_encode($result);
?>