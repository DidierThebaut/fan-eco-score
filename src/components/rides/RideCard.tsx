
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Car, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface RideProps {
  id: string;
  driver: {
    name: string;
    avatar: string;
    rating: number;
  };
  origin: string;
  destination: string;
  date: string;
  time: string;
  price: number;
  seats: number;
  co2Saved: number;
  carType: string;
}

export function RideCard({ ride }: { ride: RideProps }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={ride.driver.avatar} />
              <AvatarFallback>{ride.driver.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{ride.driver.name}</p>
              <div className="flex items-center">
                <span className="text-sm text-muted-foreground">★ {ride.driver.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="flex items-center gap-1">
            <Leaf className="h-3.5 w-3.5" />
            <span>{ride.co2Saved}kg CO₂ saved</span>
          </Badge>
        </div>

        <div className="mt-4 space-y-2">
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <span className="text-muted-foreground font-medium">From:</span>
            <span>{ride.origin}</span>
            <span className="text-muted-foreground font-medium">To:</span>
            <span>{ride.destination}</span>
            <span className="text-muted-foreground font-medium">Date:</span>
            <span>{ride.date} at {ride.time}</span>
            <span className="text-muted-foreground font-medium">Vehicle:</span>
            <div className="flex items-center gap-1">
              <Car className="h-4 w-4" />
              <span>{ride.carType}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-secondary p-4 flex items-center justify-between">
        <div>
          <span className="text-lg font-semibold">${ride.price}</span>
          <span className="text-muted-foreground text-sm ml-2">per person</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm">{ride.seats} seats available</span>
          <Button asChild size="sm">
            <Link to={`/rides/${ride.id}`}>Book Now</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
