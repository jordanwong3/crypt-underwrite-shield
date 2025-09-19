// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "fhevm/abstracts/EIP712WithModifier.sol";
import "fhevm/lib/TFHE.sol";

/**
 * @title Crypt Underwrite Shield
 * @dev FHE-encrypted underwriting platform for secure risk assessment
 * @author jordanwong3
 */
contract CryptUnderwriteShield is EIP712WithModifier {
    // FHE encrypted data types
    using TFHE for euint32;
    using TFHE for euint8;
    using TFHE for ebool;

    // Struct for encrypted underwriting data
    struct EncryptedUnderwritingData {
        euint32 riskScore;           // Encrypted risk score (0-100)
        euint32 coverageAmount;      // Encrypted coverage amount
        euint32 premium;            // Encrypted premium amount
        euint8 riskLevel;           // Encrypted risk level (1-5)
        ebool isApproved;           // Encrypted approval status
        ebool isActive;             // Encrypted active status
        uint256 timestamp;          // Public timestamp
        address policyHolder;       // Public policy holder address
    }

    // Struct for encrypted claim data
    struct EncryptedClaimData {
        euint32 claimAmount;        // Encrypted claim amount
        euint32 payoutAmount;       // Encrypted payout amount
        ebool isApproved;           // Encrypted approval status
        ebool isProcessed;          // Encrypted processing status
        uint256 timestamp;           // Public timestamp
        address claimant;           // Public claimant address
    }

    // Mapping for encrypted underwriting data
    mapping(uint256 => EncryptedUnderwritingData) public encryptedUnderwritingData;
    mapping(uint256 => EncryptedClaimData) public encryptedClaimData;
    
    // Public counters
    uint256 public totalPolicies;
    uint256 public totalClaims;
    
    // Role-based access control
    mapping(address => bool) public underwriters;
    mapping(address => bool) public claimAssessors;
    mapping(address => bool) public riskAnalysts;
    
    // Events for encrypted operations
    event EncryptedPolicyCreated(
        uint256 indexed policyId,
        address indexed policyHolder,
        uint256 timestamp
    );
    
    event EncryptedRiskScoreUpdated(
        uint256 indexed policyId,
        address indexed updater,
        uint256 timestamp
    );
    
    event EncryptedClaimSubmitted(
        uint256 indexed claimId,
        uint256 indexed policyId,
        address indexed claimant,
        uint256 timestamp
    );
    
    event EncryptedClaimProcessed(
        uint256 indexed claimId,
        address indexed processor,
        uint256 timestamp
    );
    
    event EncryptedCoverageUpdated(
        uint256 indexed policyId,
        address indexed updater,
        uint256 timestamp
    );

    // Modifiers
    modifier onlyUnderwriter() {
        require(underwriters[msg.sender], "Only underwriters can perform this action");
        _;
    }
    
    modifier onlyClaimAssessor() {
        require(claimAssessors[msg.sender], "Only claim assessors can perform this action");
        _;
    }
    
    modifier onlyRiskAnalyst() {
        require(riskAnalysts[msg.sender], "Only risk analysts can perform this action");
        _;
    }

    constructor() EIP712WithModifier("CryptUnderwriteShield", "1") {
        // Initialize with deployer as admin
        underwriters[msg.sender] = true;
        claimAssessors[msg.sender] = true;
        riskAnalysts[msg.sender] = true;
    }

    /**
     * @dev Create encrypted underwriting policy
     * @param policyHolder Address of the policy holder
     * @param encryptedRiskScore Encrypted risk score
     * @param encryptedCoverageAmount Encrypted coverage amount
     * @param encryptedPremium Encrypted premium amount
     * @param encryptedRiskLevel Encrypted risk level
     */
    function createEncryptedPolicy(
        address policyHolder,
        euint32 encryptedRiskScore,
        euint32 encryptedCoverageAmount,
        euint32 encryptedPremium,
        euint8 encryptedRiskLevel
    ) external onlyUnderwriter {
        uint256 policyId = totalPolicies++;
        
        encryptedUnderwritingData[policyId] = EncryptedUnderwritingData({
            riskScore: encryptedRiskScore,
            coverageAmount: encryptedCoverageAmount,
            premium: encryptedPremium,
            riskLevel: encryptedRiskLevel,
            isApproved: TFHE.asEbool(false),
            isActive: TFHE.asEbool(false),
            timestamp: block.timestamp,
            policyHolder: policyHolder
        });
        
        emit EncryptedPolicyCreated(policyId, policyHolder, block.timestamp);
    }

    /**
     * @dev Update encrypted risk score
     * @param policyId Policy ID
     * @param newEncryptedRiskScore New encrypted risk score
     */
    function updateEncryptedRiskScore(
        uint256 policyId,
        euint32 newEncryptedRiskScore
    ) external onlyRiskAnalyst {
        require(policyId < totalPolicies, "Policy does not exist");
        
        encryptedUnderwritingData[policyId].riskScore = newEncryptedRiskScore;
        
        emit EncryptedRiskScoreUpdated(policyId, msg.sender, block.timestamp);
    }

    /**
     * @dev Approve encrypted policy
     * @param policyId Policy ID
     */
    function approveEncryptedPolicy(uint256 policyId) external onlyUnderwriter {
        require(policyId < totalPolicies, "Policy does not exist");
        
        encryptedUnderwritingData[policyId].isApproved = TFHE.asEbool(true);
        encryptedUnderwritingData[policyId].isActive = TFHE.asEbool(true);
    }

    /**
     * @dev Submit encrypted claim
     * @param policyId Policy ID
     * @param encryptedClaimAmount Encrypted claim amount
     */
    function submitEncryptedClaim(
        uint256 policyId,
        euint32 encryptedClaimAmount
    ) external {
        require(policyId < totalPolicies, "Policy does not exist");
        require(
            encryptedUnderwritingData[policyId].policyHolder == msg.sender,
            "Only policy holder can submit claims"
        );
        
        uint256 claimId = totalClaims++;
        
        encryptedClaimData[claimId] = EncryptedClaimData({
            claimAmount: encryptedClaimAmount,
            payoutAmount: TFHE.asEuint32(0),
            isApproved: TFHE.asEbool(false),
            isProcessed: TFHE.asEbool(false),
            timestamp: block.timestamp,
            claimant: msg.sender
        });
        
        emit EncryptedClaimSubmitted(claimId, policyId, msg.sender, block.timestamp);
    }

    /**
     * @dev Process encrypted claim
     * @param claimId Claim ID
     * @param encryptedPayoutAmount Encrypted payout amount
     */
    function processEncryptedClaim(
        uint256 claimId,
        euint32 encryptedPayoutAmount
    ) external onlyClaimAssessor {
        require(claimId < totalClaims, "Claim does not exist");
        
        encryptedClaimData[claimId].payoutAmount = encryptedPayoutAmount;
        encryptedClaimData[claimId].isApproved = TFHE.asEbool(true);
        encryptedClaimData[claimId].isProcessed = TFHE.asEbool(true);
        
        emit EncryptedClaimProcessed(claimId, msg.sender, block.timestamp);
    }

    /**
     * @dev Update encrypted coverage amount
     * @param policyId Policy ID
     * @param newEncryptedCoverageAmount New encrypted coverage amount
     */
    function updateEncryptedCoverage(
        uint256 policyId,
        euint32 newEncryptedCoverageAmount
    ) external onlyUnderwriter {
        require(policyId < totalPolicies, "Policy does not exist");
        
        encryptedUnderwritingData[policyId].coverageAmount = newEncryptedCoverageAmount;
        
        emit EncryptedCoverageUpdated(policyId, msg.sender, block.timestamp);
    }

    /**
     * @dev Add underwriter role
     * @param underwriter Address to add as underwriter
     */
    function addUnderwriter(address underwriter) external onlyUnderwriter {
        underwriters[underwriter] = true;
    }

    /**
     * @dev Add claim assessor role
     * @param assessor Address to add as claim assessor
     */
    function addClaimAssessor(address assessor) external onlyClaimAssessor {
        claimAssessors[assessor] = true;
    }

    /**
     * @dev Add risk analyst role
     * @param analyst Address to add as risk analyst
     */
    function addRiskAnalyst(address analyst) external onlyRiskAnalyst {
        riskAnalysts[analyst] = true;
    }

    /**
     * @dev Remove underwriter role
     * @param underwriter Address to remove from underwriters
     */
    function removeUnderwriter(address underwriter) external onlyUnderwriter {
        underwriters[underwriter] = false;
    }

    /**
     * @dev Remove claim assessor role
     * @param assessor Address to remove from claim assessors
     */
    function removeClaimAssessor(address assessor) external onlyClaimAssessor {
        claimAssessors[assessor] = false;
    }

    /**
     * @dev Remove risk analyst role
     * @param analyst Address to remove from risk analysts
     */
    function removeRiskAnalyst(address analyst) external onlyRiskAnalyst {
        riskAnalysts[analyst] = false;
    }

    /**
     * @dev Get encrypted underwriting data
     * @param policyId Policy ID
     * @return Encrypted underwriting data
     */
    function getEncryptedUnderwritingData(uint256 policyId) 
        external 
        view 
        returns (EncryptedUnderwritingData memory) 
    {
        require(policyId < totalPolicies, "Policy does not exist");
        return encryptedUnderwritingData[policyId];
    }

    /**
     * @dev Get encrypted claim data
     * @param claimId Claim ID
     * @return Encrypted claim data
     */
    function getEncryptedClaimData(uint256 claimId) 
        external 
        view 
        returns (EncryptedClaimData memory) 
    {
        require(claimId < totalClaims, "Claim does not exist");
        return encryptedClaimData[claimId];
    }

    /**
     * @dev Get total policies count
     * @return Total number of policies
     */
    function getTotalPolicies() external view returns (uint256) {
        return totalPolicies;
    }

    /**
     * @dev Get total claims count
     * @return Total number of claims
     */
    function getTotalClaims() external view returns (uint256) {
        return totalClaims;
    }
}
