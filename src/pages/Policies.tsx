import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EncryptedButton } from "@/components/ui/encrypted-button";
import { 
  FileText, 
  Zap, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Calendar,
  User,
  Car,
  Home,
  Star,
  Search,
  Filter,
  Plus
} from "lucide-react";

const Policies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">Policy Management</h1>
              <p className="text-muted-foreground max-w-2xl">
                Manage all insurance policies with encrypted data protection and real-time status tracking
              </p>
            </div>
            <EncryptedButton>
              <Plus className="h-4 w-4 mr-2" />
              New Policy
            </EncryptedButton>
          </div>

          {/* Policy Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="probability-chart">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,847</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-accent">+127</span> this month
                </p>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">2,394</div>
                <p className="text-xs text-muted-foreground">84.1% of total</p>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">143</div>
                <p className="text-xs text-muted-foreground">Awaiting approval</p>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Claims Filed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-destructive">67</div>
                <p className="text-xs text-muted-foreground">Under investigation</p>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
                    placeholder="Search policies by number, client name, or type..."
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background"
                  />
                </div>
                <EncryptedButton variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </EncryptedButton>
              </div>
            </CardContent>
          </Card>

          {/* Policy List */}
          <div className="space-y-4">
            <Card className="probability-chart">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-md">
                      <Car className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">Auto Insurance Policy #4821</h3>
                        <Badge variant="outline" className="border-accent text-accent">
                          <Zap className="h-3 w-3 mr-1" />
                          Encrypted
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Client: Sarah Johnson • Vehicle: 2022 Tesla Model 3
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          $1,247/year
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Expires: Dec 2024
                        </span>
                        <span>Risk Score: 3.2</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-accent text-accent">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                    <EncryptedButton variant="ghost" size="sm">
                      View Details
                    </EncryptedButton>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <Home className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">Property Insurance Policy #4822</h3>
                        <Badge variant="outline" className="border-primary text-primary">
                          Standard
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Client: Michael Chen • Property: 123 Oak Street, Downtown
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          $2,840/year
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Expires: Mar 2025
                        </span>
                        <span>Risk Score: 4.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-warning text-warning">
                      <Clock className="h-3 w-3 mr-1" />
                      Pending
                    </Badge>
                    <EncryptedButton variant="ghost" size="sm">
                      Review
                    </EncryptedButton>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-destructive/10 rounded-md">
                      <Star className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">Life Insurance Policy #4823</h3>
                        <Badge variant="outline" className="border-accent text-accent">
                          <Zap className="h-3 w-3 mr-1" />
                          Encrypted
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Client: Emily Rodriguez • Coverage: $500,000 Term Life
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          $89/month
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Expires: Aug 2044
                        </span>
                        <span>Risk Score: 2.1</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Flagged
                    </Badge>
                    <EncryptedButton variant="ghost" size="sm">
                      Investigate
                    </EncryptedButton>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="probability-chart">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-md">
                      <User className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">Health Insurance Policy #4824</h3>
                        <Badge variant="outline" className="border-primary text-primary">
                          Premium
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Client: David Park • Plan: Comprehensive Health Coverage
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          $340/month
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Expires: Jan 2025
                        </span>
                        <span>Risk Score: 5.8</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="border-accent text-accent">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                    <EncryptedButton variant="ghost" size="sm">
                      Manage
                    </EncryptedButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <EncryptedButton variant="outline">
              Load More Policies
            </EncryptedButton>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Policies;