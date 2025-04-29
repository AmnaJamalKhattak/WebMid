import { useState } from 'react';
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/Components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import axios from 'axios'; // Import axios
import { toast } from 'sonner'; // Assuming you use sonner for toasts
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Define your backend API base URL
// Replace with your actual backend URL (e.g., 'http://localhost:5000/api/users')
// It's best practice to use environment variables for this
const API_BASE_URL = 'http://localhost:5000/api/users'; // <-- Update this URL

function Signup() {
  // Get the navigate function from react-router-dom
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    phone: '',
    address: '',
    businessName: '',
    role: 'Manager', // Ensure this matches a value in your backend enum
  });

  const [loading, setLoading] = useState(false); // State to manage loading state
  const [validationErrors, setValidationErrors] = useState({}); // State for frontend validation errors
  const [apiError, setApiError] = useState(null); // State for general API errors


  // Validation function for the entire form
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Phone validation - must be exactly 11 digits (adjust regex if format is different)
    const phoneRegex = /^\d{11}$/;
    if (!formData.phone) {
        tempErrors.phone = 'Phone number is required'; // Add required check
        isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = 'Phone number must be exactly 11 digits';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // More general email regex
    if (!formData.email.trim()) {
        tempErrors.email = 'Email is required'; // Add required check
        isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Required fields validation
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.username.trim()) {
      tempErrors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.address.trim()) { // Added address required check
        tempErrors.address = 'Address is required';
        isValid = false;
    }

    if (!formData.password.trim()) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])/.test(formData.password)) {
      tempErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one special character';
      isValid = false;
    }

    if (!formData.confirmPassword.trim()) { // Added confirmPassword required check
        tempErrors.confirmPassword = 'Confirm password is required';
        isValid = false;
    } else if (formData.password !== formData.confirmPassword) { // Check password match here too
        tempErrors.confirmPassword = 'Passwords do not match';
        isValid = false;
    }

    if (!formData.businessName.trim()) {
      tempErrors.businessName = 'Business name is required';
      isValid = false;
    }

    // Role validation (assuming role is required and default is Manager)
    if (!formData.role) {
         tempErrors.role = 'Role is required';
         isValid = false;
    }


    setValidationErrors(tempErrors); // Use the correct state setter
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(null); // Clear previous API errors
    setValidationErrors({}); // Clear previous validation errors
    setLoading(true); // Set loading state

    // Frontend validation
    if (!validateForm()) {
        setLoading(false); // Stop loading if validation fails
        // You might want to toast here as well, or rely on inline messages
        // toast.error("Please fix the form errors.");
        return; // Stop if validation fails
    }

    // Basic client-side password match check ( redundant if validateForm checks, but harmless)
    // if (formData.password !== formData.confirmPassword) {
    //   setApiError("Passwords do not match."); // Use apiError for general messages if validateForm didn't handle it
    //   setLoading(false);
    //   toast.error("Passwords do not match.");
    //   return;
    // }


    try {
      // Send data to the backend using axios
      const response = await axios.post(`${API_BASE_URL}/register`, formData);

      console.log('Signup successful:', response.data);

      // Show success message
      toast.success(response.data.message || "User registered successfully!");

      // --- Redirect to Login page after successful signup ---
      // Use the navigate function to go to the /login route
      navigate('/login');
      // -----------------------------------------------------

      // Optional: Clear form (usually not needed if redirecting)
      // setFormData({ ...initialState });

    } catch (err) {
      console.error('Signup error:', err);

      // Handle API errors (e.g., show error message)
        // Check if the error response contains specific backend validation errors (e.g., from Mongoose)
        const backendError = err.response?.data?.error;

        if (backendError && typeof backendError === 'string') {
            // If the backend sends a single error message string
            setApiError(backendError);
            toast.error(backendError);
        } else if (backendError && Array.isArray(backendError)) {
            // If the backend sends an array of error messages (e.g., from custom validation)
             const messages = backendError.join(', ');
             setApiError(messages);
             toast.error(messages);
        }
        else {
            // Fallback for generic errors or network issues
            const fallbackMessage = err.message || "An error occurred during registration.";
            setApiError(fallbackMessage);
            toast.error(fallbackMessage);
        }


    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
     // Clear validation error for the specific field on change
     setValidationErrors(prevErrors => ({
         ...prevErrors,
         [name]: undefined // Or delete prevErrors[name]
     }));
  };


  const handleRoleChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      role: value,
    }));
     // Clear validation error for role on change
     setValidationErrors(prevErrors => ({
         ...prevErrors,
         role: undefined // Or delete prevErrors.role
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
        {/* Ensure this image path is correct */}
        {/* Assuming /assets/welcome.png is in your public directory or handled by your build process */}
        <img
          src="/assets/welcome.png"
          alt="Website Logo"
          className="h-12 md:h-16 w-auto"
        />
      </a>

      {/* Centered Card */}
      <Card className="w-full max-w-md shadow-xl bg-white dark:bg-gray-800 relative z-10">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome to AdVance
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />
             {validationErrors.name && <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
             {validationErrors.email && <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" type="text" value={formData.username} onChange={handleChange} required />
             {validationErrors.username && <p className="text-red-500 text-sm mt-1">{validationErrors.username}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />
             {validationErrors.password && <p className="text-red-500 text-sm mt-1">{validationErrors.password}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required />
             {validationErrors.confirmPassword && <p className="text-red-500 text-sm mt-1">{validationErrors.confirmPassword}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
             {validationErrors.phone && <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" type="text" value={formData.address} onChange={handleChange} required />
             {validationErrors.address && <p className="text-red-500 text-sm mt-1">{validationErrors.address}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <Input id="businessName" name="businessName" type="text" value={formData.businessName} onChange={handleChange} required />
             {validationErrors.businessName && <p className="text-red-500 text-sm mt-1">{validationErrors.businessName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select onValueChange={handleRoleChange} defaultValue={formData.role}>
                <SelectTrigger
                  id="role"
                  name="role"
                  className="bg-white dark:bg-gray-900"
                >
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-900">
                  {/* Ensure these values match your backend schema enum */}
                   <SelectItem value="Manager">Manager</SelectItem>
                  <SelectItem value="Employee">Employee</SelectItem>
                  <SelectItem value="External API User">API User</SelectItem>
                </SelectContent>
              </Select>
             {validationErrors.role && <p className="text-red-500 text-sm mt-1">{validationErrors.role}</p>}
            </div>

            {/* Display general API error message if any */}
            {apiError && <p className="text-red-500 text-sm">{apiError}</p>}


            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium mt-6"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline dark:text-blue-400">
              Login
            </a>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}

export default Signup;