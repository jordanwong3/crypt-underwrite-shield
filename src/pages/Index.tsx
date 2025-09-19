import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { WalletConnect } from "@/components/WalletConnect";
import { useAccount } from "wagmi";

const Index = () => {
  const { isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        {!isConnected && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Connect Your Wallet to Get Started
                </h2>
                <p className="text-center text-gray-600 mb-8">
                  Connect your wallet to access the Crypt Underwrite Shield platform
                </p>
                <div className="flex justify-center">
                  <WalletConnect />
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;