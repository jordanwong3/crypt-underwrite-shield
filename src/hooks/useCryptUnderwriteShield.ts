import { useContract, useContractRead, useContractWrite, useAccount, useWaitForTransaction } from 'wagmi';
import { parseEther, formatEther } from 'viem';

// Contract ABI - This would be generated from the compiled contract
const CONTRACT_ABI = [
  {
    "inputs": [],
    "name": "totalPolicies",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalClaims",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "policyHolder", "type": "address"},
      {"internalType": "bytes", "name": "encryptedRiskScore", "type": "bytes"},
      {"internalType": "bytes", "name": "encryptedCoverageAmount", "type": "bytes"},
      {"internalType": "bytes", "name": "encryptedPremium", "type": "bytes"},
      {"internalType": "bytes", "name": "encryptedRiskLevel", "type": "bytes"}
    ],
    "name": "createEncryptedPolicy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "policyId", "type": "uint256"},
      {"internalType": "bytes", "name": "encryptedClaimAmount", "type": "bytes"}
    ],
    "name": "submitEncryptedClaim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "policyId", "type": "uint256"},
      {"internalType": "bytes", "name": "newEncryptedRiskScore", "type": "bytes"}
    ],
    "name": "updateEncryptedRiskScore",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "claimId", "type": "uint256"},
      {"internalType": "bytes", "name": "encryptedPayoutAmount", "type": "bytes"}
    ],
    "name": "processEncryptedClaim",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "policyId", "type": "uint256"}],
    "name": "approveEncryptedPolicy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "policyId", "type": "uint256"}],
    "name": "getEncryptedUnderwritingData",
    "outputs": [
      {
        "components": [
          {"internalType": "bytes", "name": "riskScore", "type": "bytes"},
          {"internalType": "bytes", "name": "coverageAmount", "type": "bytes"},
          {"internalType": "bytes", "name": "premium", "type": "bytes"},
          {"internalType": "bytes", "name": "riskLevel", "type": "bytes"},
          {"internalType": "bytes", "name": "isApproved", "type": "bytes"},
          {"internalType": "bytes", "name": "isActive", "type": "bytes"},
          {"internalType": "uint256", "name": "timestamp", "type": "uint256"},
          {"internalType": "address", "name": "policyHolder", "type": "address"}
        ],
        "internalType": "struct CryptUnderwriteShield.EncryptedUnderwritingData",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "claimId", "type": "uint256"}],
    "name": "getEncryptedClaimData",
    "outputs": [
      {
        "components": [
          {"internalType": "bytes", "name": "claimAmount", "type": "bytes"},
          {"internalType": "bytes", "name": "payoutAmount", "type": "bytes"},
          {"internalType": "bytes", "name": "isApproved", "type": "bytes"},
          {"internalType": "bytes", "name": "isProcessed", "type": "bytes"},
          {"internalType": "uint256", "name": "timestamp", "type": "uint256"},
          {"internalType": "address", "name": "claimant", "type": "address"}
        ],
        "internalType": "struct CryptUnderwriteShield.EncryptedClaimData",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

// Contract address - This should be set after deployment
const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS || '0x0000000000000000000000000000000000000000';

// FHE encryption utilities (mock implementation)
const encryptData = (data: number): string => {
  // In a real implementation, this would use FHE encryption
  // For now, we'll use a simple encoding as placeholder
  return `0x${data.toString(16).padStart(64, '0')}`;
};

const encryptBoolean = (value: boolean): string => {
  return `0x${value ? '01' : '00'.padStart(64, '0')}`;
};

export function useCryptUnderwriteShield() {
  const { address } = useAccount();

  // Get total policies count
  const { data: totalPolicies, refetch: refetchTotalPolicies } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'totalPolicies',
  });

  // Get total claims count
  const { data: totalClaims, refetch: refetchTotalClaims } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'totalClaims',
  });

  // Get encrypted underwriting data
  const getEncryptedUnderwritingData = (policyId: number) => {
    return useContractRead({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'getEncryptedUnderwritingData',
      args: [BigInt(policyId)],
      enabled: policyId >= 0,
    });
  };

  // Get encrypted claim data
  const getEncryptedClaimData = (claimId: number) => {
    return useContractRead({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'getEncryptedClaimData',
      args: [BigInt(claimId)],
      enabled: claimId >= 0,
    });
  };

  return {
    totalPolicies: totalPolicies ? Number(totalPolicies) : 0,
    totalClaims: totalClaims ? Number(totalClaims) : 0,
    getEncryptedUnderwritingData,
    getEncryptedClaimData,
    refetchTotalPolicies,
    refetchTotalClaims,
    contractAddress: CONTRACT_ADDRESS,
    isConnected: !!address,
  };
}

// Hook for contract interactions with FHE encryption
export function useCryptUnderwriteShieldActions() {
  const { address } = useAccount();

  // Create encrypted policy - NO DIRECT TRANSFERS
  const { write: createPolicyWrite, data: createPolicyData, isLoading: isCreatingPolicy } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'createEncryptedPolicy',
  });

  const { isLoading: isCreatingPolicyPending } = useWaitForTransaction({
    hash: createPolicyData?.hash,
  });

  const createPolicy = async (data: {
    policyHolder: string;
    riskScore: number;
    coverageAmount: string;
    premium: string;
    riskLevel: number;
  }) => {
    if (!createPolicyWrite) {
      throw new Error('Contract not available');
    }

    // Encrypt all sensitive data using FHE
    const encryptedRiskScore = encryptData(data.riskScore);
    const encryptedCoverageAmount = encryptData(parseInt(data.coverageAmount));
    const encryptedPremium = encryptData(parseInt(data.premium));
    const encryptedRiskLevel = encryptData(data.riskLevel);

    // Call contract with encrypted data - NO DIRECT TRANSFERS
    createPolicyWrite({
      args: [
        data.policyHolder,
        encryptedRiskScore,
        encryptedCoverageAmount,
        encryptedPremium,
        encryptedRiskLevel
      ],
    });

    return { success: true, txHash: createPolicyData?.hash };
  };

  // Submit encrypted claim - NO DIRECT TRANSFERS
  const { write: submitClaimWrite, data: submitClaimData, isLoading: isSubmittingClaim } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'submitEncryptedClaim',
  });

  const { isLoading: isSubmittingClaimPending } = useWaitForTransaction({
    hash: submitClaimData?.hash,
  });

  const submitClaim = async (data: {
    policyId: number;
    claimAmount: string;
  }) => {
    if (!submitClaimWrite) {
      throw new Error('Contract not available');
    }

    // Encrypt claim amount using FHE
    const encryptedClaimAmount = encryptData(parseInt(data.claimAmount));

    // Call contract with encrypted data - NO DIRECT TRANSFERS
    submitClaimWrite({
      args: [BigInt(data.policyId), encryptedClaimAmount],
    });

    return { success: true, txHash: submitClaimData?.hash };
  };

  // Update encrypted risk score - NO DIRECT TRANSFERS
  const { write: updateRiskScoreWrite, data: updateRiskScoreData, isLoading: isUpdatingRiskScore } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'updateEncryptedRiskScore',
  });

  const { isLoading: isUpdatingRiskScorePending } = useWaitForTransaction({
    hash: updateRiskScoreData?.hash,
  });

  const updateRiskScore = async (data: {
    policyId: number;
    newRiskScore: number;
  }) => {
    if (!updateRiskScoreWrite) {
      throw new Error('Contract not available');
    }

    // Encrypt new risk score using FHE
    const encryptedRiskScore = encryptData(data.newRiskScore);

    // Call contract with encrypted data - NO DIRECT TRANSFERS
    updateRiskScoreWrite({
      args: [BigInt(data.policyId), encryptedRiskScore],
    });

    return { success: true, txHash: updateRiskScoreData?.hash };
  };

  // Process encrypted claim - NO DIRECT TRANSFERS
  const { write: processClaimWrite, data: processClaimData, isLoading: isProcessingClaim } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'processEncryptedClaim',
  });

  const { isLoading: isProcessingClaimPending } = useWaitForTransaction({
    hash: processClaimData?.hash,
  });

  const processClaim = async (data: {
    claimId: number;
    payoutAmount: string;
  }) => {
    if (!processClaimWrite) {
      throw new Error('Contract not available');
    }

    // Encrypt payout amount using FHE
    const encryptedPayoutAmount = encryptData(parseInt(data.payoutAmount));

    // Call contract with encrypted data - NO DIRECT TRANSFERS
    processClaimWrite({
      args: [BigInt(data.claimId), encryptedPayoutAmount],
    });

    return { success: true, txHash: processClaimData?.hash };
  };

  // Approve encrypted policy - NO DIRECT TRANSFERS
  const { write: approvePolicyWrite, data: approvePolicyData, isLoading: isApprovingPolicy } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'approveEncryptedPolicy',
  });

  const { isLoading: isApprovingPolicyPending } = useWaitForTransaction({
    hash: approvePolicyData?.hash,
  });

  const approvePolicy = async (policyId: number) => {
    if (!approvePolicyWrite) {
      throw new Error('Contract not available');
    }

    // Call contract to approve policy - NO DIRECT TRANSFERS
    approvePolicyWrite({
      args: [BigInt(policyId)],
    });

    return { success: true, txHash: approvePolicyData?.hash };
  };

  return {
    // Policy management
    createPolicy,
    approvePolicy,
    isCreatingPolicy: isCreatingPolicy || isCreatingPolicyPending,
    
    // Claim management
    submitClaim,
    processClaim,
    isSubmittingClaim: isSubmittingClaim || isSubmittingClaimPending,
    isProcessingClaim: isProcessingClaim || isProcessingClaimPending,
    
    // Risk management
    updateRiskScore,
    isUpdatingRiskScore: isUpdatingRiskScore || isUpdatingRiskScorePending,
    
    // Status
    isConnected: !!address,
    
    // Transaction hashes
    createPolicyTxHash: createPolicyData?.hash,
    submitClaimTxHash: submitClaimData?.hash,
    updateRiskScoreTxHash: updateRiskScoreData?.hash,
    processClaimTxHash: processClaimData?.hash,
    approvePolicyTxHash: approvePolicyData?.hash,
  };
}