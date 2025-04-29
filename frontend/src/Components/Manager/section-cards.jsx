import { TrendingDownIcon, TrendingUpIcon, BellIcon, CalendarIcon, DollarSignIcon, CameraIcon, Users, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

function SectionCards() {
  const today = new Date();
  const day = today.toLocaleDateString('en-US', { weekday: 'short' });
  const month = today.toLocaleDateString('en-US', { month: 'short' });
  const date = today.getDate();
  const year = today.getFullYear();
  const formattedDate = `${month}-${date}-${year}`;

  return (
    <div className="flex flex-row flex-wrap gap-4 px-4 items-stretch lg:px-6">
      
      <Card className="@container/card flex-1">
        <CardHeader className="relative">
          <CardDescription>Today’s Date</CardDescription>
          <div className="absolute right-4 top-5">
            <CalendarIcon className="size-3" />
          </div>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums text-center">
            {formattedDate}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Announcement <BellIcon className="size-4 mt-1" />
          </div>
          <div className="text-muted-foreground">
            <ul className="list-disc list-inside">
              <li>23rd March Sale is live!</li>
              <li>Avail 23% Discount on all offers!</li>
            </ul>
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card flex-1">
        <CardHeader className="relative">
          <CardDescription>Total Ads Generated</CardDescription>
          <div className="absolute right-4 top-5">
            <CameraIcon className="size-4" />
          </div>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums text-center">
            155
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2">
            Ads Generated This Month
          </div>
          <div className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums text-center">
            11
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card flex-1">
        <CardHeader className="relative">
          <CardDescription>Avg. Annual Expenditure</CardDescription>
          <div className="absolute right-4 top-6">
            <DollarSignIcon className="size-3" />
          </div>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums text-center">
            $370
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2">
            Avg. Monthly Expenditure
          </div>
          <div className="text-muted-foreground font-semibold text-2xl">
            $72
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card flex-1">
        <CardHeader className="relative">
          <CardDescription>Number of Editors</CardDescription>
          <div className="absolute right-4 top-6">
            <Users className="size-3" />
          </div>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums text-center">
            12
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2">
            Number of Teams
          </div>
          <div className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums text-center">
            4
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card flex-1">
        <CardHeader className="relative">
          <CardDescription>Current Saving</CardDescription>
          <div className="absolute right-4 top-6">
            <Wallet className="size-4" />
          </div>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums text-center">
            $3,400
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Improved Savings <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Achieved cost efficiency this month
          </div>
        </CardFooter>
      </Card>

    </div>
  );
}

export default SectionCards;
