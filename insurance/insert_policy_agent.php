<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
include "conn.php";
$REQUEST_METHOD = $_SERVER["REQUEST_METHOD"];
$data = json_decode(file_get_contents("php://input"), true);
$Policy_No = $data["Policy_No"] ?? null;
$Agent_ID = $data["Agent_ID"] ?? null;
$Commission_Rate = $data["Commission_Rate"] ?? null;

// ✅ ดึงเบี้ยประกันจาก policy
$stmt = $pdo->prepare("SELECT Premium_Amount FROM policy WHERE Policy_No = :Policy_No");
$stmt->execute([':Policy_No' => $Policy_No]);
$policy = $stmt->fetch(PDO::FETCH_ASSOC);

// ✅ ถ้าไม่พบกรมธรรม์ให้หยุดเลย
if (!$policy) {
    echo json_encode(["status" => "error", "message" => "ไม่พบเลขกรมธรรม์นี้"]);
    exit;
}

// ✅ คำนวณและบันทึกค่าคอมมิชชัน
$Premium_Amount = (float)$policy["Premium_Amount"];
$Commission_Amount = $Premium_Amount * ((float)$Commission_Rate / 100);

$sql = "INSERT INTO policyagent (Policy_No, Agent_ID, Commission_Rate, Commission_Amount)
        VALUES (:Policy_No, :Agent_ID, :Commission_Rate, :Commission_Amount)
        ON DUPLICATE KEY UPDATE 
            Commission_Rate = VALUES(Commission_Rate),
            Commission_Amount = VALUES(Commission_Amount)";
$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':Policy_No' => $Policy_No,
    ':Agent_ID' => $Agent_ID,
    ':Commission_Rate' => $Commission_Rate,
    ':Commission_Amount' => $Commission_Amount
]);
?>
