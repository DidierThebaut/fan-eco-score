
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Clock, Leaf, MapPin, Calendar, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function RideDetail() {
  const { id } = useParams<{ id: string }>();
  
  // This would normally come from an API
  const [ride] = useState({
    id: id,
    driver: {
      name: "John D.",
      avatar: "",
      rating: 4.8,
      rides: 124,
      joined: "January 2023",
    },
    origin: "Downtown Boston",
    destination: "Fenway Park",
    date: "May 12, 2025",
    time: "5:30 PM",
    eventName: "Red Sox vs Yankees",
    price: 12,
    seats: 3,
    seatsAvailable: 3,
    co2Saved: 1.8,
    carType: "Tesla Model 3",
    features: ["Eco-friendly", "Air conditioning", "Trunk space for gear"],
    route: {
      distance: "5.2 miles",
      duration: "25 mins",
    },
    description: "I'm heading to the Red Sox game and have room for 3 passengers. I'll be parking in the main lot. Happy to coordinate meeting points near your location if it's on the way."
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <Link to="/find-ride" className="text-primary text-sm hover:underline">&larr; Back to rides</Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ride Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="flex items-center gap-1 text-sm">
                        <Calendar className="h-3.5 w-3.5" />
                        {ride.date}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 text-sm">
                        <Clock className="h-3.5 w-3.5" />
                        {ride.time}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 text-sm">
                        <Car className="h-3.5 w-3.5" />
                        {ride.carType}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>From</span>
                      </div>
                      <div className="font-medium">{ride.origin}</div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>To</span>
                      </div>
                      <div className="font-medium">{ride.destination}</div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>Event</span>
                      </div>
                      <div className="font-medium">{ride.eventName}</div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>Journey</span>
                      </div>
                      <div className="font-medium">{ride.route.distance} • {ride.route.duration}</div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Leaf className="h-5 w-5 text-primary" />
                        <span>CO₂ Saved</span>
                      </div>
                      <div className="font-medium">{ride.co2Saved}kg per passenger</div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Seats</span>
                      </div>
                      <div className="font-medium">{ride.seatsAvailable} available (of {ride.seats} total)</div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium mb-2">About this ride</h3>
                      <p className="text-muted-foreground">{ride.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Vehicle features</h3>
                      <div className="flex flex-wrap gap-2">
                        {ride.features.map((feature, index) => (
                          <Badge key={index} variant="secondary">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Environmental Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 text-center">
                    <span className="text-4xl font-bold text-primary">{(ride.co2Saved * 4).toFixed(1)}kg</span>
                    <p className="text-sm text-muted-foreground">Total CO₂ saved with this shared ride</p>
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-4 text-sm">
                    <p className="mb-2">This is equivalent to:</p>
                    <ul className="space-y-1 list-disc pl-5 text-muted-foreground">
                      <li>Planting 2 tree seedlings grown for 10 years</li>
                      <li>Not driving a car for 21 kilometers</li>
                      <li>Charging your smartphone 865 times</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={ride.driver.avatar} />
                      <AvatarFallback>{ride.driver.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{ride.driver.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">★ {ride.driver.rating.toFixed(1)} • {ride.driver.rides} rides</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6">Member since {ride.driver.joined}</p>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price per seat</span>
                      <span className="font-semibold">${ride.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service fee</span>
                      <span className="font-semibold">$1.50</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="font-semibold">${(ride.price + 1.50).toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Book This Ride</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2025 CLEAN AIR. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
