// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableFooter,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table"
  
  const editors = [
    {
      ID: "E001",
      Name: "David",
      Email: "david001@gmail.com",
      Status: "Active",
      Team: "Summer Collection Vol1",
    },
    {
      ID: "E002",
      Name: "Sophia",
      Email: "sophia002@gmail.com",
      Status: "Inactive",
      Team: "Autumn Campaign",
    },
    {
      ID: "E003",
      Name: "James",
      Email: "james003@gmail.com",
      Status: "Inactive",
      Team: "Winter Specials",
    },
    {
      ID: "E004",
      Name: "Olivia",
      Email: "olivia004@gmail.com",
      Status: "Active",
      Team: "Spring Lookbook",
    },
    {
      ID: "E005",
      Name: "Liam",
      Email: "liam005@gmail.com",
      Status: "Active",
      Team: "Fall Collection Vol2",
    },
    {
      ID: "E006",
      Name: "Emma",
      Email: "emma006@gmail.com",
      Status: "Active",
      Team: "New Year Promotions",
    },
    {
      ID: "E007",
      Name: "Noah",
      Email: "noah007@gmail.com",
      Status: "Inactive",
      Team: "Special Edition Shoots",
    },
  ];
  
  
  export function ListOfEditors() {
    return (
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full table-auto border border-gray-100 bg-gray-50 shadow-md rounded-xl">
          <thead>
            <tr className="text-gray-500 text-md">
              <th className="w-[100px] py-2 px-4 text-left rounded-tl-xl">Editor ID</th>
              <th className="py-2 px-4 text-left rounded-tl-xl">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-right rounded-tr-xl">Team</th>
            </tr>
          </thead>
          <tbody>
            {editors.map((editor) => (
              <tr key={editor.ID} className="border-b border-gray-200">
                <td className="py-2 px-4">{editor.ID}</td>
                <td className="py-2 px-4">{editor.Name}</td>
                <td className="py-2 px-4">{editor.Email}</td>
                <td className="py-2 px-4">{editor.Status}</td>
                <td className="py-2 px-4 text-right">{editor.Team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  