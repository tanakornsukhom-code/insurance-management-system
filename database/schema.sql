-- Schema only. Original records intentionally omitted.
SET NAMES utf8mb4;

CREATE TABLE `agent` (
  `Agent_ID` varchar(10) NOT NULL,
  `title_id` tinyint(1) DEFAULT NULL,
  `First_Name` varchar(100) NOT NULL,
  `Last_Name` varchar(100) NOT NULL,
  `License_No` varchar(15) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Branch` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `claim` (
  `Claim_ID` varchar(15) NOT NULL,
  `Policy_No` varchar(20) DEFAULT NULL,
  `Date_Of_Illness` date DEFAULT NULL,
  `Claim_Date` date DEFAULT NULL,
  `Diagnosis` varchar(255) DEFAULT NULL,
  `Claim_Amount_Requested` decimal(15,2) DEFAULT NULL,
  `Claim_Amount_Paid` decimal(15,2) DEFAULT NULL,
  `Status` varchar(20) DEFAULT 'Pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `customer` (
  `Customer_ID` int(11) NOT NULL,
  `ID_Card_No` varchar(13) NOT NULL,
  `Title_ID` tinyint(1) DEFAULT NULL,
  `First_Name` varchar(100) NOT NULL,
  `Last_Name` varchar(100) NOT NULL,
  `Date_Of_Birth` date DEFAULT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  `Phone` varchar(15) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `policy` (
  `Policy_No` varchar(20) NOT NULL,
  `Customer_ID` int(11) DEFAULT NULL,
  `Product_ID` varchar(10) DEFAULT NULL,
  `Agent_ID` varchar(10) DEFAULT NULL,
  `Issue_Date` date DEFAULT NULL,
  `Expiry_Date` date DEFAULT NULL,
  `Premium_Amount` decimal(15,2) DEFAULT NULL,
  `Annual_Limit` decimal(15,2) DEFAULT NULL,
  `Status` varchar(20) DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `policyagent` (
  `Policy_No` varchar(20) NOT NULL,
  `Agent_ID` varchar(10) NOT NULL,
  `Commission_Rate` decimal(5,2) DEFAULT NULL,
  `Commission_Amount` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `product` (
  `Product_ID` varchar(10) NOT NULL,
  `Product_Name` varchar(150) NOT NULL,
  `Type` varchar(50) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Coverage_Amount` decimal(15,2) DEFAULT NULL,
  `Base_Premium` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `title` (
  `title_id` tinyint(1) NOT NULL,
  `title_name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


ALTER TABLE `agent`
  ADD PRIMARY KEY (`Agent_ID`),
  ADD UNIQUE KEY `License_No` (`License_No`);


ALTER TABLE `claim`
  ADD PRIMARY KEY (`Claim_ID`),
  ADD KEY `Policy_No` (`Policy_No`);


ALTER TABLE `customer`
  ADD PRIMARY KEY (`Customer_ID`),
  ADD UNIQUE KEY `ID_Card_No` (`ID_Card_No`);


ALTER TABLE `policy`
  ADD PRIMARY KEY (`Policy_No`),
  ADD KEY `Customer_ID` (`Customer_ID`),
  ADD KEY `Product_ID` (`Product_ID`),
  ADD KEY `Agent_ID` (`Agent_ID`);


ALTER TABLE `policyagent`
  ADD PRIMARY KEY (`Policy_No`,`Agent_ID`),
  ADD KEY `Agent_ID` (`Agent_ID`);


ALTER TABLE `product`
  ADD PRIMARY KEY (`Product_ID`),
  ADD UNIQUE KEY `Product_Name` (`Product_Name`);


ALTER TABLE `title`
  ADD PRIMARY KEY (`title_id`);


ALTER TABLE `customer`
  MODIFY `Customer_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;


ALTER TABLE `claim`
  ADD CONSTRAINT `claim_ibfk_1` FOREIGN KEY (`Policy_No`) REFERENCES `policy` (`Policy_No`);


ALTER TABLE `policy`
  ADD CONSTRAINT `policy_ibfk_1` FOREIGN KEY (`Customer_ID`) REFERENCES `customer` (`Customer_ID`),
  ADD CONSTRAINT `policy_ibfk_2` FOREIGN KEY (`Product_ID`) REFERENCES `product` (`Product_ID`),
  ADD CONSTRAINT `policy_ibfk_3` FOREIGN KEY (`Agent_ID`) REFERENCES `agent` (`Agent_ID`);


ALTER TABLE `policyagent`
  ADD CONSTRAINT `policyagent_ibfk_1` FOREIGN KEY (`Policy_No`) REFERENCES `policy` (`Policy_No`),
  ADD CONSTRAINT `policyagent_ibfk_2` FOREIGN KEY (`Agent_ID`) REFERENCES `agent` (`Agent_ID`);
