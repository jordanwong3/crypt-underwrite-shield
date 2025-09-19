import { useContract, useContractRead, useContractWrite, useAccount } from 'wagmi';
import { parseEther } from 'viem';

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
    "inputs": [{"internalType": "uint256", "name": "policyId", "type": "uint256"}],
    "name": "getEncryptedUnderwritingData",
    "outputs": [
      {
        "components": [
          {"internalType": "euint32", "name": "riskScore", "type": "bytes"},
          {"internalType": "euint32", "name": "coverageAmount", "type": "bytes"},
          {"internalType": "euint32", "name": "premium", "type": "bytes"},
          {"internalType": "euint8", "name": "riskLevel", "type": "bytes"},
          {"internalType": "ebool", "name": "isApproved", "type": "bytes"},
          {"internalType": "ebool", "name": "isActive", "type": "bytes"},
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
          {"internalType": "euint32", "name": "claimAmount", "type": "bytes"},
          {"internalType": "euint32", "name": "payoutAmount", "type": "bytes"},
          {"internalType": "ebool", "name": "isApproved", "type": "bytes"},
          {"internalType": "ebool", "name": "isProcessed", "type": "bytes"},
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

// Hook for contract interactions
export function useCryptUnderwriteShieldActions() {
  const { address } = useAccount();

  // Note: These would be actual contract write functions
  // For now, we'll return mock functions that would be implemented
  // with the actual contract ABI and write functions

  const createPolicy = async (data: {
    policyHolder: string;
    riskScore: number;
    coverageAmount: string;
    premium: string;
    riskLevel: number;
  }) => {
    // This would be implemented with actual contract write function
    console.log('Creating policy with data:', data);
    return { success: true, txHash: '0x...' };
  };

  const submitClaim = async (data: {
    policyId: number;
    claimAmount: string;
  }) => {
    // This would be implemented with actual contract write function
    console.log('Submitting claim with data:', data);
    return { success: true, txHash: '0x...' };
  };

  const updateRiskScore = async (data: {
    policyId: number;
    newRiskScore: number;
  }) => {
    // This would be implemented with actual contract write function
    console.log('Updating risk score with data:', data);
    return { success: true, txHash: '0x...' };
  };

  const processClaim = async (data: {
    claimId: number;
    payoutAmount: string;
  }) => {
    // This would be implemented with actual contract write function
    console.log('Processing claim with data:', data);
    return { success: true, txHash: '0x...' };
  };

  return {
    createPolicy,
    submitClaim,
    updateRiskScore,
    processClaim,
    isConnected: !!address,
  };
}
