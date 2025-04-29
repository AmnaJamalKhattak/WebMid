import { useState } from 'react';
import { Layers, Activity, CheckCircle, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function EditorHeroSection() {
  // Mock data - in a real app this would come from props or API
  const totalAdsAssigned = 42;
  const adsCompleted = 24;

  const adsInProgress = [
    { id: 201, name: 'Tech Promotion', deadline: 'April 30', status: 'In Progress' },
    { id: 202, name: 'Brand Refresh', deadline: 'May 8', status: 'In Progress' },
    { id: 203, name: 'Newsletter Ad', deadline: 'May 12', status: 'In Progress' },
    { id: 204, name: 'Mobile App Ad', deadline: 'May 5', status: 'In Progress' },
    { id: 205, name: 'Social Media Campaign', deadline: 'May 3', status: 'In Progress' }
  ];

  const upcomingDeadlines = [
    { id: 401, name: 'Flash Sale', deadline: 'April 29', status: 'In Progress' },
    { id: 402, name: 'Memorial Day', deadline: 'May 1', status: 'Not Started' },
    { id: 403, name: 'Website Banner', deadline: 'May 3', status: 'In Progress' },
    { id: 404, name: 'Promo Email', deadline: 'May 2', status: 'In Progress' }
  ];

  const [selectedAd, setSelectedAd] = useState(null);
  const [showDeadlinesDetail, setShowDeadlinesDetail] = useState(false);

  return (
    <div className="w-full mb-8">
      {/* Added text-center to the heading */}
      <h2 className="text-2xl font-bold mb-6 text-center mt-4">Your Dashboard</h2>

      {/* Added max-w-6xl, mx-auto to center the grid container */}
      {/* Adjusted responsive grid for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-4 max-w-6xl mx-auto">

        {/* Ads In Progress Card */}
        {/* Increased min-width, added max-width and height classes */}
        <Card className="min-w-72 md:min-w-80 w-full h-auto shadow-sm"> {/* Removed max-w-sm here to let the grid column width dictate */}
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-full p-2 bg-gray-100">
                <Activity className="h-5 w-5 text-gray-600" />
              </div>
              <h3 className="font-medium">Ads In Progress</h3>
            </div>
            <p className="text-3xl font-bold">{adsInProgress.length}</p>

            <div className="mt-3">
              {/* Increased max-height for the list */}
              <ul className="text-sm text-gray-600 space-y-1 max-h-32 overflow-y-auto">
                {adsInProgress.map(ad => (
                  <li
                    key={ad.id}
                    className="cursor-pointer hover:bg-gray-100 p-1 rounded"
                    onClick={() => setSelectedAd(ad)}
                  >
                    {ad.name}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>



        {/* Upcoming Deadlines Card */}
        <Dialog open={showDeadlinesDetail} onOpenChange={setShowDeadlinesDetail}>
          <DialogTrigger asChild>
            {/* Increased min-width, added max-width and height classes */}
            <Card className="min-w-72 md:min-w-80 w-full h-auto shadow-sm cursor-pointer hover:shadow"> {/* Removed max-w-sm here */}
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="rounded-full p-2 bg-gray-100">
                    <Calendar className="h-5 w-5 text-gray-600" />
                  </div>
                  <h3 className="font-medium">Upcoming Deadlines</h3>
                </div>
                <p className="text-3xl font-bold">{upcomingDeadlines.length}</p>
                <p className="text-sm text-gray-600 mt-2">You have {upcomingDeadlines.length} upcoming deadlines</p>
              </CardContent>
            </Card>
          </DialogTrigger>

          {/* Added bg-white opacity-100 for full opacity */}
          <DialogContent className="sm:max-w-md bg-white opacity-100">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Deadlines
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4">
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-2 px-4 text-left">ID</th>
                      <th className="py-2 px-4 text-left">Name</th>
                      <th className="py-2 px-4 text-left">Deadline</th>
                      <th className="py-2 px-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingDeadlines.map((deadline) => (
                      <tr key={deadline.id} className="border-t">
                        <td className="py-2 px-4">{deadline.id}</td>
                        <td className="py-2 px-4">{deadline.name}</td>
                        <td className="py-2 px-4">{deadline.deadline}</td>
                        <td className="py-2 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            deadline.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            deadline.status === 'In Progress' ? 'bg-amber-100 text-amber-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {deadline.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div> {/* Closing the responsive grid div */}

      {/* Ad Details Dialog */}
      {selectedAd && (
        <Dialog open={Boolean(selectedAd)} onOpenChange={(open) => !open && setSelectedAd(null)}>
          {/* Added bg-white opacity-100 for full opacity */}
          <DialogContent className="sm:max-w-lg bg-white opacity-100">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Ad Details
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Ad ID</p>
                  <p className="font-medium">{selectedAd.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{selectedAd.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Deadline</p>
                  <p className="font-medium">{selectedAd.deadline}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium">{selectedAd.status}</p>
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <h3 className="font-medium mb-2">Ad Description</h3>
                <p className="text-gray-600 text-sm">
                  This is a detailed description of the {selectedAd.name} ad campaign.
                  It includes specifications, requirements, and guidelines assigned by the manager.
                  The editor needs to complete this by {selectedAd.deadline}.
                </p>

                <h3 className="font-medium mt-4 mb-2">Manager Notes</h3>
                <p className="text-gray-600 text-sm">
                  Please ensure all brand guidelines are followed. This ad will be featured on multiple platforms
                  so please prepare versions for web, mobile, and print media.
                </p>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setSelectedAd(null)}
                  className="py-2 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Close
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}