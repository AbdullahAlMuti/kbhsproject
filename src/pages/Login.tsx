import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Lock } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen py-8 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md">
        <Card className="content-section">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Student Portal Login</CardTitle>
            <CardDescription>Access your grades, assignments, and schedules</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Student ID" className="pl-10" />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Password" type="password" className="pl-10" />
            </div>
            <Button className="w-full" variant="educational">Login</Button>
            <div className="text-center text-sm text-muted-foreground">
              Forgot your password? <a href="#" className="text-primary hover:underline">Reset here</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}