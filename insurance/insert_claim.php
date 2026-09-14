<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
include "conn.php";
    $data = json_decode(file_get_contents("php://input"));
    $Policy_No = $data->Policy_No ?? '';
    $Date_Of_Illness = $data->Date_Of_Illness ?? null;
    $Claim_Date = $data->Claim_Date ?? null;
    $Diagnosis = $data->Diagnosis ?? '';
    $Claim_Amount_Requested = $data->Claim_Amount_Requested ?? 0;
    $Claim_Amount_Paid = $data->Claim_Amount_Paid ?? 0;
    $Status = $data->Status ?? '';

    // สร้าง Claim_ID ใหม่
    $stmt = $pdo->query("SELECT MAX(Claim_ID) AS maxclaim FROM Claim");
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    $newNumber = $result && $result['maxclaim'] ? intval(substr($result['maxclaim'],3)) + 1 : 1;
    $newClaimID = 'CLM' . str_pad($newNumber, 3, '0', STR_PAD_LEFT);

    // Insert
    $sql = "INSERT INTO Claim 
        (Claim_ID, Policy_No, Date_Of_Illness, Claim_Date, Diagnosis, Claim_Amount_Requested, Claim_Amount_Paid, Status)
        VALUES (:Claim_ID, :Policy_No, :Date_Of_Illness, :Claim_Date, :Diagnosis, :Claim_Amount_Requested, :Claim_Amount_Paid, :Status)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':Claim_ID' => $newClaimID,
        ':Policy_No' => $Policy_No,
        ':Date_Of_Illness' => date('Y-m-d', strtotime($Date_Of_Illness)),
        ':Claim_Date' => date('Y-m-d', strtotime($Claim_Date)),
        ':Diagnosis' => $Diagnosis,
        ':Claim_Amount_Requested' => $Claim_Amount_Requested,
        ':Claim_Amount_Paid' => $Claim_Amount_Paid,
        ':Status' => $Status
    ]);
?>
