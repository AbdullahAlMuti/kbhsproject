import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function Admin() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="page-title">Admin Panel</h1>
          <p className="text-xl text-muted-foreground">Administrative access portal</p>
        </div>
        <Card className="content-section max-w-md mx-auto text-center">
          <CardHeader>
            <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
            <CardTitle>Restricted Access</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">This area is restricted to authorized personnel only.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}