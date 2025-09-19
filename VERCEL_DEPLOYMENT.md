# Vercel Deployment Guide

This guide will walk you through deploying Crypt Underwrite Shield to Vercel.

## Prerequisites

- Vercel account
- GitHub repository with the project
- Environment variables configured

## Step-by-Step Deployment

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your repository: `jordanwong3/crypt-underwrite-shield`

### 2. Configure Project Settings

1. **Framework Preset**: Select "Vite"
2. **Root Directory**: Leave as default (`.`)
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Install Command**: `npm install`

### 3. Set Environment Variables

In the Vercel dashboard, go to Settings > Environment Variables and add:

```env
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_RPC_URL=https://1rpc.io/sepolia
VITE_CONTRACT_ADDRESS=YOUR_DEPLOYED_CONTRACT_ADDRESS
```

**Important**: Replace `YOUR_DEPLOYED_CONTRACT_ADDRESS` with your actual deployed contract address.

### 4. Deploy

1. Click "Deploy" button
2. Wait for the build to complete
3. Your app will be available at `https://your-project-name.vercel.app`

### 5. Custom Domain (Optional)

1. Go to Settings > Domains
2. Add your custom domain
3. Configure DNS settings as instructed by Vercel
4. Wait for SSL certificate to be issued

## Environment Variables Reference

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `NEXT_PUBLIC_CHAIN_ID` | Ethereum chain ID for Sepolia | `11155111` |
| `NEXT_PUBLIC_RPC_URL` | RPC endpoint for blockchain access | `https://sepolia.infura.io/v3/...` |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | WalletConnect project ID | `2ec9743d0d0cd7fb94dee1a7e6d33475` |
| `NEXT_PUBLIC_INFURA_API_KEY` | Infura API key (optional) | `b18fb7e6ca7045ac83c41157ab93f990` |
| `VITE_CONTRACT_ADDRESS` | Deployed smart contract address | `0x...` |

## Build Configuration

### Vite Configuration

The project uses Vite as the build tool. Key configurations:

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
```

### Build Optimization

- **Code Splitting**: Automatic code splitting for better performance
- **Tree Shaking**: Unused code is automatically removed
- **Minification**: JavaScript and CSS are minified
- **Asset Optimization**: Images and fonts are optimized

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check that all environment variables are set
   - Ensure all dependencies are installed
   - Check for TypeScript errors

2. **Runtime Errors**
   - Verify contract address is correct
   - Check RPC URL is accessible
   - Ensure WalletConnect project ID is valid

3. **Wallet Connection Issues**
   - Verify WalletConnect project ID
   - Check network configuration
   - Ensure user is on correct network

### Debug Mode

To enable debug mode, add to environment variables:

```env
NODE_ENV=development
VITE_DEBUG=true
```

## Performance Optimization

### Vercel Optimizations

1. **Edge Functions**: Use Vercel Edge Functions for serverless functions
2. **CDN**: Automatic global CDN distribution
3. **Caching**: Automatic caching of static assets
4. **Compression**: Automatic gzip compression

### Frontend Optimizations

1. **Lazy Loading**: Components are lazy-loaded
2. **Code Splitting**: Automatic code splitting
3. **Bundle Analysis**: Use `npm run build:analyze` to analyze bundle size

## Monitoring

### Vercel Analytics

1. Enable Vercel Analytics in the dashboard
2. Monitor performance metrics
3. Track user interactions
4. Monitor error rates

### Custom Monitoring

Add custom monitoring for:
- Wallet connection success rates
- Contract interaction success rates
- User engagement metrics
- Error tracking

## Security Considerations

### Environment Variables

- Never commit `.env` files to version control
- Use Vercel's environment variable encryption
- Rotate API keys regularly
- Use different keys for different environments

### Smart Contract Security

- Deploy to testnet first
- Audit smart contracts before mainnet deployment
- Use multi-signature wallets for contract upgrades
- Implement proper access controls

## Continuous Deployment

### Automatic Deployments

1. Connect GitHub repository
2. Enable automatic deployments on push
3. Configure branch protection rules
4. Set up deployment previews for pull requests

### Deployment Strategies

1. **Production**: Deploy from `main` branch
2. **Staging**: Deploy from `develop` branch
3. **Preview**: Deploy from feature branches

## Backup and Recovery

### Database Backup

- Export environment variables
- Backup smart contract configurations
- Document deployment settings

### Disaster Recovery

1. Keep deployment configurations in version control
2. Document all manual steps
3. Test recovery procedures
4. Maintain backup deployment environments

## Support

### Vercel Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://vercel.com/community)
- [Vercel Support](https://vercel.com/support)

### Project Support

- GitHub Issues: Report bugs and feature requests
- Documentation: Check README.md for project-specific help
- Community: Join our Discord or Telegram for community support

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Maintainer**: jordanwong3
