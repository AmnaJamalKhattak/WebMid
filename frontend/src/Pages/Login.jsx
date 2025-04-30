import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/Components/ui/card";
import { ArrowLeft } from "lucide-react";


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Sample Login
    if (formData.email === "manager@example.com" && formData.password === "123456") {
      navigate("/managerDashboard"); // 
    } else {
      alert("Invalid credentials");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-white dark:from-purple-950 dark:to-gray-900 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-500/10 blur-xl"></div>
      </div>

      {/* Website Logo */}
      <a href="/" className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
        <ArrowLeft />
      </a>

      {/* Centered Card */}
      <Card className="w-full max-w-md shadow-xl bg-white dark:bg-gray-800 relative z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Log in to Continue
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <a 
                  href="/forgot-password" 
                  className="text-xs text-yellow-400 hover:underline dark:text-yellow-400"
                >
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
              />
            </div>
          
            <Button
              type="submit"
              className="w-full  bg-yellow-400  hover:bg-yellow-500 text-white font-medium mt-6"
            >
              Log In
            </Button>
          </form>
        </CardContent>
        
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <a href="/signup" className="text-yellow-400 hover:underline dark:text-yellow-400">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}

export default Login;
