import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AddTeam from "./AddTeam";
const teams = [
  {
    TeamID: "T001",
    TeamName: "Summer Collection Vol1",
    Members: ["David", "Sophia", "Emma"],
    Deadline: "2025-06-10",
    WorkStatus: "In Progress",
  },
  {
    TeamID: "T002",
    TeamName: "Autumn Campaign",
    Members: ["Olivia", "James"],
    Deadline: "2025-07-05",
    WorkStatus: "Pending",
  },
  {
    TeamID: "T003",
    TeamName: "Winter Specials",
    Members: ["Liam", "Noah", "Sophia"],
    Deadline: "2025-12-01",
    WorkStatus: "Completed",
  },
  {
    TeamID: "T004",
    TeamName: "Spring Lookbook",
    Members: ["Emma", "David"],
    Deadline: "2025-04-30",
    WorkStatus: "In Progress",
  },
  {
    TeamID: "T005",
    TeamName: "Fall Collection Vol2",
    Members: ["Olivia", "Noah", "Liam"],
    Deadline: "2025-10-15",
    WorkStatus: "Pending",
  },
  {
    TeamID: "T006",
    TeamName: "New Year Promotions",
    Members: ["James", "Emma"],
    Deadline: "2025-12-20",
    WorkStatus: "In Progress",
  },
  {
    TeamID: "T007",
    TeamName: "Special Edition Shoots",
    Members: ["David", "Sophia", "Noah"],
    Deadline: "2025-11-05",
    WorkStatus: "Completed",
  },
];

export default function ListOfTeams() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {teams.map((team) => (
        <Card key={team.TeamID} className="p-4">
          <CardHeader>
            <CardTitle>{team.TeamName}</CardTitle>
            <CardDescription>Deadline: {team.Deadline}</CardDescription>
          </CardHeader>
          <div className="px-4 py-2">
            <p><strong>Members:</strong> {team.Members.join(", ")}</p>
            <p><strong>Status:</strong> {team.WorkStatus}</p>
          </div>
          <CardFooter className="pt-2">
            <p className="text-sm text-muted-foreground">Team ID: {team.TeamID}</p>
          </CardFooter>
        </Card>
      ))}
      <div className="p-4 flex items-center justify-center rounded-xl cursor-pointer hover:shadow-md transition">
        <AddTeam />
      </div>
    </div>
  );
}
