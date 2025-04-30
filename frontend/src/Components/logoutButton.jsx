import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    // You can also clear localStorage/session if needed here
    navigate("/landingPage");
  };

  return (
    <Button onClick={handleClick}>
      <LogOut className="w-4 h-4 mr-2" />
    </Button>
  );
}
