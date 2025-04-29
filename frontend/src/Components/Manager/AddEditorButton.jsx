
import { Toaster, toast } from 'sonner';
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from 'react';

export default function AddButton() {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  // State to control dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Function to handle editor addition, show toast, and close dialog
  const handleAddEditor = () => {
    // Check if fields are empty
    if (!name || !email) {
      toast.error("Please fill in both the name and email.", {
        description: "All fields must be filled to proceed.",
        duration: 3000,
      });
      return;
    }

    // Name Validation: Only letters and spaces allowed
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name.match(nameRegex)) {
      toast.error("Name must only contain letters and spaces.", {
        description: "Please ensure the name is valid.",
        duration: 3000,
      });
      return;
    }

    // Email Validation: Basic email regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
      toast.error("Invalid email address.", {
        description: "Please enter a valid email.",
        duration: 3000,
      });
      return;
    }

    // Logic for adding editor (e.g., sending data to an API or updating state)
    
    // Show success toast
    toast.success("Editor added successfully", {
      description: "The editor has been added to the list.",
      duration: 3000,
    });
    
    // Close the dialog after clicking "Add"
    setIsDialogOpen(false);
    // Optionally clear fields
    setName('');
    setEmail('');
  };

  return (
    <>
      {/* Toaster component to display toast notifications */}
      <Toaster />
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
            <Plus size={40} color="#000000" className='cursor-pointer mt-8'/>
        </DialogTrigger>

        {/* Dialog Content */}
        <DialogContent className="sm:max-w-[425px] bg-gray-50">
          <DialogHeader>
            <img
              src="/assets/LightMode-Logo.png"
              alt="Light Mode Logo"
              className="w-[90px] h-[90px] object-contain p-0 m-0"
            />
            <DialogTitle className="font-bold pb-2 ml-2">Add Editor</DialogTitle>
            <DialogDescription className="ml-2">
              Fill in the information of the editor. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4 ml-2">
            {/* Name Input */}
            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="name" className="text-right text-black font-semibold">
                Full Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Handling input change
                className="col-span-3"
              />
            </div>

            {/* Email Input */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right text-black font-semibold">
                Email
              </Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Handling input change
                className="col-span-3"
              />
            </div>
          </div>

          {/* Footer with Add Button */}
          <DialogFooter>
            <Button
              type="button"
              className="bg-black text-white hover:bg-gray-100 hover:text-black"
              onClick={handleAddEditor} // Handle adding editor, show toast and close dialog
            >
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
