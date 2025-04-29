import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EditorBodyGraph() {
  // Mock data - in a real app this would come from props or API
  const totalAds = 42;
  const completedAds = 24;
  const inProgressAds = totalAds - completedAds;

  const data = [
    { name: 'Completed', value: completedAds, color: '#16a34a' },  // Green
    { name: 'In Progress', value: inProgressAds, color: '#dc2626' }, // Amber
  ];

  return (
    <div className="w-full py-6">
      {/* Heading is already centered */}
      <h2 className="text-2xl font-bold mb-6 text-center">Your Progress</h2>

      {/* Wrapper div with max-w and centering classes */}
      <div className="max-w-6xl mx-auto">
        {/* The Card itself will now respect the wrapper's width */}
        <Card className="w-full">
          <CardHeader className="pb-2">
            <CardTitle>Ads Completion Status</CardTitle>
          </CardHeader>
          <CardContent>
            {/* The content inside the card remains the same layout */}
            <div className="flex flex-col md:flex-row items-center">
              {/* Left side - Pie Chart */}
              <div className="w-full md:w-1/2 p-4">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Right side - Text representation and Legend */}
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-lg font-medium mb-4">Ad Statistics</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Total Ads</p>
                    <p className="text-2xl font-bold">{totalAds}</p>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-4 h-4 rounded-full bg-green-600"></div>
                    <div>
                      <p className="text-sm text-gray-500">Completed</p>
                      <p className="font-medium">{completedAds} ({((completedAds/totalAds) * 100).toFixed(0)}%)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-4 h-4 rounded-full bg-red-600"></div>
                    <div>
                      <p className="text-sm text-gray-500">In Progress</p>
                      <p className="font-medium">{inProgressAds} ({((inProgressAds/totalAds) * 100).toFixed(0)}%)</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">Performance Summary</h4>
                    <p className="text-sm text-gray-600">
                      You have completed {completedAds} out of {totalAds} assigned ads.
                      {completedAds > inProgressAds
                        ? " You're making excellent progress!"
                        : " Continue working to complete more ads."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}