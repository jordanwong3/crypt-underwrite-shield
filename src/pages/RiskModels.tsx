import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EncryptedButton } from "@/components/ui/encrypted-button";
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  BarChart3,
  Lock,
  Settings,
  Database,
  Cpu,
  Eye,
  EyeOff
} from "lucide-react";

const RiskModels = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Risk Assessment Models</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced encrypted probability models for accurate risk assessment and premium calculation
            </p>
          </div>

          {/* Model Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="probability-chart border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-accent" />
                  Active Models
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">47</div>
                <p className="text-sm text-muted-foreground">Encrypted risk models</p>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Accuracy Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">97.2%</div>
                <p className="text-sm text-muted-foreground">Model precision</p>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Processing Speed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">0.3s</div>
                <p className="text-sm text-muted-foreground">Average response time</p>
              </CardContent>
            </Card>
          </div>

          {/* Risk Models List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="probability-chart">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-accent" />
                    Auto Insurance Model v2.1
                  </span>
                  <Badge variant="outline" className="border-accent text-accent">
                    <Lock className="h-3 w-3 mr-1" />
                    Encrypted
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Advanced risk assessment for automotive insurance policies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Model Confidence</span>
                    <span className="text-sm font-medium text-accent">98.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Training Data Points</span>
                    <span className="text-sm font-medium">2.8M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Updated</span>
                    <span className="text-sm font-medium">2 hours ago</span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <EncryptedButton variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Configure
                    </EncryptedButton>
                    <EncryptedButton variant="ghost" size="sm">
                      <EyeOff className="h-4 w-4 mr-2" />
                      View Details
                    </EncryptedButton>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Life Insurance Model v1.8
                  </span>
                  <Badge variant="outline" className="border-primary text-primary">
                    <Cpu className="h-3 w-3 mr-1" />
                    Active
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Comprehensive life insurance risk evaluation system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Model Confidence</span>
                    <span className="text-sm font-medium text-primary">96.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Training Data Points</span>
                    <span className="text-sm font-medium">1.9M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Updated</span>
                    <span className="text-sm font-medium">1 day ago</span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <EncryptedButton variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Configure
                    </EncryptedButton>
                    <EncryptedButton variant="ghost" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </EncryptedButton>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-accent" />
                    Property Insurance Model v3.0
                  </span>
                  <Badge variant="outline" className="border-accent text-accent">
                    <Lock className="h-3 w-3 mr-1" />
                    Encrypted
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Real estate and property risk assessment framework
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Model Confidence</span>
                    <span className="text-sm font-medium text-accent">97.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Training Data Points</span>
                    <span className="text-sm font-medium">3.2M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Updated</span>
                    <span className="text-sm font-medium">5 hours ago</span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <EncryptedButton variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Configure
                    </EncryptedButton>
                    <EncryptedButton variant="ghost" size="sm">
                      <EyeOff className="h-4 w-4 mr-2" />
                      View Details
                    </EncryptedButton>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-warning" />
                    Health Insurance Model v2.3
                  </span>
                  <Badge variant="outline" className="border-warning text-warning">
                    Training
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Medical risk assessment and health insurance modeling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Model Confidence</span>
                    <span className="text-sm font-medium text-warning">94.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Training Data Points</span>
                    <span className="text-sm font-medium">1.5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last Updated</span>
                    <span className="text-sm font-medium">Training in progress</span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <EncryptedButton variant="outline" size="sm" disabled>
                      <Settings className="h-4 w-4 mr-2" />
                      Configure
                    </EncryptedButton>
                    <EncryptedButton variant="ghost" size="sm" disabled>
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </EncryptedButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RiskModels;