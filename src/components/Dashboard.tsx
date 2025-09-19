import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EncryptedButton } from "./ui/encrypted-button";
import { 
  TrendingUp, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Lock,
  Eye,
  EyeOff
} from "lucide-react";

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Actuarial Dashboard</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time risk assessment with encrypted probability models and private quote generation
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="probability-chart">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-accent">+12.3%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="probability-chart">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Premium</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$8.2M</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">+8.7%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="probability-chart">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold flex items-center gap-2">
                7.3
                <Badge variant="secondary" className="text-xs">Low</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-accent">-0.2</span> from last week
              </p>
            </CardContent>
          </Card>

          <Card className="probability-chart border-accent/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                Encrypted Models
                <Zap className="h-3 w-3 text-accent" />
              </CardTitle>
              <Lock className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">47</div>
              <p className="text-xs text-muted-foreground">
                Active risk assessments
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Risk Analysis */}
          <Card className="lg:col-span-2 probability-chart">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Risk Probability Analysis</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-accent text-accent">
                    <Zap className="h-3 w-3 mr-1" />
                    Encrypted
                  </Badge>
                  <EncryptedButton variant="ghost" size="sm">
                    <EyeOff className="h-4 w-4" />
                  </EncryptedButton>
                </div>
              </CardTitle>
              <CardDescription>
                Real-time probability distribution with encrypted calculation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Encrypted probability bars */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">High Risk (8.0+)</span>
                    <span className="text-sm text-muted-foreground">12.3%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-destructive h-2 rounded-full w-[12%] encrypted-data" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Medium Risk (5.0-7.9)</span>
                  <span className="text-sm text-muted-foreground">41.7%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-warning h-2 rounded-full w-[42%] encrypted-data" />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Low Risk (0.0-4.9)</span>
                  <span className="text-sm text-muted-foreground">46.0%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full w-[46%] encrypted-data" />
                </div>
              </div>

              <div className="mt-6 p-4 bg-surface-elevated rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Model Confidence</p>
                <div className="flex items-center gap-2">
                  <div className="text-lg font-semibold text-accent">97.2%</div>
                  <CheckCircle className="h-4 w-4 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="probability-chart">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest underwriting decisions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Policy #4821 Approved</p>
                    <p className="text-xs text-muted-foreground">Risk: 3.2 • Premium: $1,247</p>
                  </div>
                  <Badge variant="outline" className="border-accent text-accent text-xs">
                    <Lock className="h-2 w-2 mr-1" />
                    Encrypted
                  </Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated">
                  <Clock className="h-4 w-4 text-warning flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Policy #4822 Pending</p>
                    <p className="text-xs text-muted-foreground">Risk: 6.8 • Under Review</p>
                  </div>
                  <Badge variant="outline" className="text-xs">Processing</Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Policy #4823 Flagged</p>
                    <p className="text-xs text-muted-foreground">Risk: 9.1 • Manual Review</p>
                  </div>
                  <Badge variant="destructive" className="text-xs">High Risk</Badge>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-elevated">
                  <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Model Updated</p>
                    <p className="text-xs text-muted-foreground">Auto Insurance v2.1</p>
                  </div>
                  <Badge variant="outline" className="border-primary text-primary text-xs">Updated</Badge>
                </div>
              </div>

              <EncryptedButton variant="outline" className="w-full mt-4">
                View All Activity
              </EncryptedButton>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;