import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { LogIn, Mail, Lock } from "lucide-react";

export default function Login() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-herbal/5 to-coral/5 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-herbal rounded-lg flex items-center justify-center mb-4">
              <LogIn className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-indigo">
              Welcome Back
            </CardTitle>
            <p className="text-indigo/70">
              Sign in to your AarogyaMitra account
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-indigo/50" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-indigo/50" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10"
                />
              </div>
            </div>
            <Button className="w-full bg-herbal hover:bg-herbal/90">
              Sign In
            </Button>
            <div className="text-center text-sm">
              <span className="text-indigo/70">Don't have an account? </span>
              <Link to="/signup" className="text-herbal hover:underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
