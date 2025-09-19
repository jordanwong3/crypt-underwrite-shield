import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EncryptedButton } from "@/components/ui/encrypted-button";
import { 
  TrendingUp, 
  TrendingDown,
  BarChart3, 
  PieChart,
  Activity,
  DollarSign,
  Users,
  Target,
  Calendar,
  Download,
  RefreshCw,
  Shield,
  Eye,
  EyeOff
} from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">Analytics Dashboard</h1>
              <p className="text-muted-foreground max-w-2xl">
                Comprehensive insights into risk patterns, policy performance, and market trends with encrypted data analysis
              </p>
            </div>
            <div className="flex gap-2">
              <EncryptedButton variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Data
              </EncryptedButton>
              <EncryptedButton>
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </EncryptedButton>
            </div>
          </div>

          {/* Key Performance Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="probability-chart border-accent/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-accent" />
                  Revenue Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">+23.4%</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-accent" />
                  vs last quarter
                </p>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Customer Acquisition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">1,247</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-primary" />
                  +18.2% this month
                </p>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Target className="h-4 w-4 text-warning" />
                  Conversion Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">67.8%</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingDown className="h-3 w-3 text-warning" />
                  -2.1% vs target
                </p>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Activity className="h-4 w-4 text-accent" />
                  Risk Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">94.7%</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-accent" />
                  +1.3% improvement
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts and Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Revenue Trends */}
            <Card className="probability-chart">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Revenue Trends
                  </span>
                  <Badge variant="outline" className="border-accent text-accent">
                    <Shield className="h-3 w-3 mr-1" />
                    Encrypted
                  </Badge>
                </CardTitle>
                <CardDescription>Monthly revenue analysis with predictive modeling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Q1 2024</span>
                    <span className="font-medium">$2.4M</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[60%] encrypted-data" />
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Q2 2024</span>
                    <span className="font-medium">$3.1M</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[78%] encrypted-data" />
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Q3 2024</span>
                    <span className="font-medium">$3.8M</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-[95%] encrypted-data" />
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Q4 2024 (Projected)</span>
                    <span className="font-medium text-accent">$4.2M</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-[100%] encrypted-data opacity-60" />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-surface-elevated rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Forecast Confidence</p>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-semibold text-accent">89.3%</div>
                    <Badge variant="outline" className="border-accent text-accent text-xs">
                      High Confidence
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Distribution */}
            <Card className="probability-chart">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-accent" />
                    Risk Distribution
                  </span>
                  <EncryptedButton variant="ghost" size="sm">
                    <EyeOff className="h-4 w-4" />
                  </EncryptedButton>
                </CardTitle>
                <CardDescription>Portfolio risk analysis by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Low Risk (0-3)</span>
                      <span className="text-sm text-muted-foreground">42.3%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-accent h-3 rounded-full w-[42%] encrypted-data" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Medium Risk (4-6)</span>
                    <span className="text-sm text-muted-foreground">38.7%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-warning h-3 rounded-full w-[39%] encrypted-data" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">High Risk (7-10)</span>
                    <span className="text-sm text-muted-foreground">19.0%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-destructive h-3 rounded-full w-[19%] encrypted-data" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-surface-elevated rounded-lg">
                    <div className="text-lg font-bold text-accent">$8.2M</div>
                    <p className="text-xs text-muted-foreground">Total Portfolio Value</p>
                  </div>
                  <div className="text-center p-3 bg-surface-elevated rounded-lg">
                    <div className="text-lg font-bold text-primary">2,847</div>
                    <p className="text-xs text-muted-foreground">Active Policies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Market Insights */}
          <Card className="probability-chart mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Market Intelligence
              </CardTitle>
              <CardDescription>
                Real-time market trends and competitive analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-surface-elevated rounded-lg">
                  <TrendingUp className="h-6 w-6 text-accent mx-auto mb-2" />
                  <div className="text-xl font-bold text-accent">+15.7%</div>
                  <p className="text-sm text-muted-foreground">Market Growth</p>
                  <p className="text-xs text-muted-foreground mt-1">YoY comparison</p>
                </div>
                
                <div className="text-center p-4 bg-surface-elevated rounded-lg">
                  <Target className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-primary">7.2%</div>
                  <p className="text-sm text-muted-foreground">Market Share</p>
                  <p className="text-xs text-muted-foreground mt-1">Industry position</p>
                </div>
                
                <div className="text-center p-4 bg-surface-elevated rounded-lg">
                  <Users className="h-6 w-6 text-warning mx-auto mb-2" />
                  <div className="text-xl font-bold text-warning">89.4%</div>
                  <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                  <p className="text-xs text-muted-foreground mt-1">Based on surveys</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Time Filters */}
          <Card className="probability-chart">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Time Period:</span>
                </div>
                <div className="flex gap-2">
                  <EncryptedButton variant="ghost" size="sm">Last 7 Days</EncryptedButton>
                  <EncryptedButton variant="ghost" size="sm">Last 30 Days</EncryptedButton>
                  <EncryptedButton variant="outline" size="sm">Last Quarter</EncryptedButton>
                  <EncryptedButton variant="ghost" size="sm">Last Year</EncryptedButton>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;