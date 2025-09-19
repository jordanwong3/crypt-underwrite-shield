# Crypt Underwrite Shield

A decentralized underwriting platform with FHE (Fully Homomorphic Encryption) for secure risk assessment and policy management.

## Features

- **FHE Encryption**: All sensitive data is encrypted using Fully Homomorphic Encryption
- **Wallet Integration**: Connect with RainbowKit and Web3Modal
- **Smart Contracts**: Deployable Solidity contracts with FHE support
- **Risk Assessment**: Encrypted risk scoring and policy evaluation
- **Claim Processing**: Secure claim submission and processing
- **Role-based Access**: Different roles for underwriters, assessors, and analysts

## Technology Stack

- **Frontend**: React, TypeScript, Vite
- **UI**: Tailwind CSS, shadcn/ui
- **Wallet**: RainbowKit, Wagmi, Viem
- **Blockchain**: Ethereum Sepolia Testnet
- **Encryption**: FHE (Fully Homomorphic Encryption)
- **Smart Contracts**: Solidity with FHE support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jordanwong3/crypt-underwrite-shield.git
cd crypt-underwrite-shield
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env
```

4. Update the `.env` file with your configuration:
```env
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
VITE_CONTRACT_ADDRESS=YOUR_DEPLOYED_CONTRACT_ADDRESS
```

5. Start the development server:
```bash
npm run dev
```

## Smart Contract Deployment

### Prerequisites for Contract Deployment

- FHE-enabled blockchain (e.g., Fhenix testnet)
- Hardhat or Foundry
- FHE development environment

### Contract Features

The `CryptUnderwriteShield.sol` contract includes:

- **Encrypted Data Structures**: All sensitive data is encrypted using FHE
- **Role Management**: Underwriters, claim assessors, and risk analysts
- **Policy Management**: Create and manage encrypted policies
- **Claim Processing**: Submit and process encrypted claims
- **Access Control**: Role-based permissions for different operations

### Key Functions

- `createEncryptedPolicy()`: Create new encrypted underwriting policies
- `updateEncryptedRiskScore()`: Update risk scores (analysts only)
- `submitEncryptedClaim()`: Submit encrypted claims
- `processEncryptedClaim()`: Process claims (assessors only)
- `approveEncryptedPolicy()`: Approve policies (underwriters only)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_CHAIN_ID` | Ethereum chain ID | Yes |
| `NEXT_PUBLIC_RPC_URL` | RPC endpoint URL | Yes |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | WalletConnect project ID | Yes |
| `NEXT_PUBLIC_INFURA_API_KEY` | Infura API key | Optional |
| `VITE_CONTRACT_ADDRESS` | Deployed contract address | Yes |

## Wallet Configuration

The application supports multiple wallet providers through RainbowKit:

- MetaMask
- WalletConnect
- Coinbase Wallet
- Rainbow Wallet
- And more...

## Security Features

- **FHE Encryption**: All sensitive data encrypted on-chain
- **Zero-Knowledge Proofs**: Verify data without revealing it
- **Access Control**: Role-based permissions
- **Privacy-First**: User data never leaves their control
- **On-Chain Verification**: All operations verified on blockchain

## Project Structure

```
crypt-underwrite-shield/
├── contracts/
│   └── CryptUnderwriteShield.sol    # FHE smart contract
├── src/
│   ├── components/
│   │   ├── WalletProvider.tsx       # Wallet context provider
│   │   ├── WalletConnect.tsx       # Wallet connection component
│   │   └── ui/                      # UI components
│   ├── hooks/
│   │   └── useCryptUnderwriteShield.ts # Contract interaction hook
│   ├── lib/
│   │   └── wallet.ts                # Wallet configuration
│   └── pages/                       # Application pages
├── public/                          # Static assets
├── README.md                        # This file
└── env.example                      # Environment variables template
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set the framework to "Vite"
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Vercel

Copy the environment variables from `env.example` and set them in the Vercel dashboard.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

- Repository: https://github.com/jordanwong3/crypt-underwrite-shield
- Issues: Use GitHub issues for bug reports and feature requests
- Documentation: See this README and inline code comments

## Roadmap

- [ ] Multi-chain support
- [ ] Advanced FHE operations
- [ ] Mobile app
- [ ] API documentation
- [ ] Integration tests
- [ ] Performance optimization

---

**Project Status**: ✅ Active Development  
**Last Updated**: January 2025  
**Maintainer**: jordanwong3