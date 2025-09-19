import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';

// Get WalletConnect project ID from environment variables
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || '2ec9743d0d0cd7fb94dee1a7e6d33475';

// Configure RainbowKit
export const config = getDefaultConfig({
  appName: 'Crypt Underwrite Shield',
  projectId,
  chains: [sepolia],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

// Chain configuration
export const chainConfig = {
  id: 11155111, // Sepolia testnet
  name: 'Sepolia',
  network: 'sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990'],
    },
    public: {
      http: ['https://1rpc.io/sepolia'],
    },
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://sepolia.etherscan.io' },
  },
  testnet: true,
};
