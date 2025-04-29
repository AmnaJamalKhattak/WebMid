import { useState } from 'react';
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
import { Textarea } from "@/components/ui/textarea";
import Select from 'react-select';


// Your editors array
const editors = [
  { ID: "E001", Name: "David" },
  { ID: "E002", Name: "Sophia" },
  { ID: "E003", Name: "James" },
  { ID: "E004", Name: "Olivia" },
  { ID: "E005", Name: "Liam" },
  { ID: "E006", Name: "Emma" },
  { ID: "E007", Name: "Noah" },
];

export default function AddTeam() {
  const [teamName, setTeamName] = useState('');
  const [members, setMembers] = useState([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddTeam = () => {
    if (!teamName || members.length === 0 || !taskDescription || !deadline) {
      toast.error("Please fill in all fields.", {
        description: "All fields are required to add a team.",
        duration: 3000,
      });
      return;
    }

    toast.success("Team added successfully", {
      description: "The team has been created and added.",
      duration: 3000,
    });

    setIsDialogOpen(false);
    setTeamName('');
    setMembers([]);
    setTaskDescription('');
    setDeadline('');
  };

  const handleMembersChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setMembers(selectedOptions);
  };

  const options = editors.map((editor) => ({
    value: editor.Name,
    label: editor.Name,
  }));

  return (
    <>
      <Toaster />
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <div className="flex flex-col items-center justify-center  rounded-lg p-0 cursor-pointer">
            <Plus size={40} color="#000000" />
            <span className="text-black font-semibold mt-2">Add Team</span>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] bg-gray-50">
          <DialogHeader>
            <img
              src="/assets/LightMode-Logo.png"
              alt="Light Mode Logo"
              className="w-[90px] h-[90px] object-contain p-0 m-0"
            />
            <DialogTitle className="font-bold pb-2 ml-2">Add Team</DialogTitle>
            <DialogDescription className="ml-2">
              Fill in the information of the team. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Team Name */}
            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="teamName" className="text-right text-black font-semibold">
                Team Name
              </Label>
              <Input
                id="teamName"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="col-span-3"
              />
            </div>

            {/* Members - dynamically populated */}
            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="members" className="text-right text-black font-semibold">
                Members
              </Label>
              <Select
              isMulti
              options={options}
              value={options.filter(opt => members.includes(opt.value))}
              onChange={(selectedOptions) => {
                setMembers(selectedOptions.map(option => option.value));
              }}
              className="col-span-3 border border-black"
            />
            </div>

            {/* Task Description */}
            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="taskDescription" className="text-right text-black font-semibold">
                Task
              </Label>
              <Textarea
                id="taskDescription"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="col-span-3"
              />
            </div>

            {/* Deadline */}
            <div className="grid grid-cols-4 items-center gap-2">
              <Label htmlFor="deadline" className="text-right text-black font-semibold">
                Deadline
              </Label>
              <Input
                type="date"
                id="deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              className="bg-black text-white hover:bg-gray-100 hover:text-black"
              onClick={handleAddTeam}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
