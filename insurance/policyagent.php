<?php
header("Access-Control-Allow-Origin: *"); //เรียกใช้ database
header("Content-Type: application/json; charset=UTF8"); //แปลงเป็น Json ไฟล์
include "conn.php";
$sql="SELECT policyagent.*, agent.First_Name, agent.Last_Name
FROM policyagent
LEFT JOIN agent ON policyagent.Agent_ID = agent.Agent_ID;";
$stmt=$pdo->prepare($sql);
$stmt->execute();
$result=$stmt->fetchAll();
echo json_encode($result);
?>