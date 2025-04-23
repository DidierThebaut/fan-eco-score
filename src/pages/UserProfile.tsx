
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Leaf, Car, Trophy } from "lucide-react";

export default function UserProfile() {
  const [user] = useState({
    name: "Alex Johnson",
    avatar: "",
    joinDate: "March 2024",
    stats: {
      ridesShared: 18,
      co2Saved: 42.5,
      events: 12,
      kilometers: 215,
    },
    badges: [
      { name: "Early Adopter", description: "Joined Clean Air in the first month" },
      { name: "CO2 Saver", description: "Saved over 40kg of CO2 emissions" },
      { name: "Regular", description: "Shared more than 10 rides" },
    ],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{user.name}</CardTitle>
                    <CardDescription>Member since {user.joinDate}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center rounded-full bg-secondary p-3 mb-3">
                        <Trophy className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium">My Achievement Badges</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {user.badges.map((badge, index) => (
                        <div key={index} className="bg-secondary rounded-lg p-3 flex items-start gap-3">
                          <div className="rounded-full bg-primary/20 p-1.5">
                            <Trophy className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{badge.name}</h4>
                            <p className="text-xs text-muted-foreground">{badge.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2">
              <Tabs defaultValue="impact">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="impact">Environmental Impact</TabsTrigger>
                  <TabsTrigger value="rides">My Rides</TabsTrigger>
                  <TabsTrigger value="events">My Events</TabsTrigger>
                </TabsList>
                
                <TabsContent value="impact">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Environmental Impact</CardTitle>
                      <CardDescription>
                        See the difference you've made by choosing shared rides
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center rounded-full bg-secondary p-3 mb-3">
                            <Car className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold">{user.stats.ridesShared}</h3>
                          <p className="text-sm text-muted-foreground">Rides Shared</p>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center rounded-full bg-secondary p-3 mb-3">
                            <Leaf className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold">{user.stats.co2Saved}kg</h3>
                          <p className="text-sm text-muted-foreground">CO₂ Saved</p>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center rounded-full bg-secondary p-3 mb-3">
                            <Trophy className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold">{user.stats.events}</h3>
                          <p className="text-sm text-muted-foreground">Events Attended</p>
                        </div>
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center rounded-full bg-secondary p-3 mb-3">
                            <Car className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold">{user.stats.kilometers}</h3>
                          <p className="text-sm text-muted-foreground">km Traveled</p>
                        </div>
                      </div>
                      
                      <Separator className="my-6" />
                      
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium text-sm">Next Achievement: Eco Warrior</h3>
                            <span className="text-xs text-muted-foreground">85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                          <p className="text-xs text-muted-foreground mt-2">Save 7.5kg more CO₂ to earn this badge</p>
                        </div>
                        
                        <Card className="bg-secondary border-none">
                          <CardContent className="p-6">
                            <h3 className="font-semibold mb-2">Your Impact Visualization</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Your shared rides have saved the equivalent of:
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-background rounded-lg p-4">
                                <div className="font-semibold mb-2 flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                                  <span>5 Trees</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  The amount of CO₂ absorbed by 5 trees in one year
                                </p>
                              </div>
                              
                              <div className="bg-background rounded-lg p-4">
                                <div className="font-semibold mb-2 flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                                  <span>170 km</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  Not driving a car for 170 kilometers
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="rides">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Rides</CardTitle>
                      <CardDescription>
                        Past and upcoming ride details
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3].map((ride) => (
                          <Card key={ride} className="bg-secondary border-none">
                            <CardContent className="p-4 flex items-center justify-between">
                              <div>
                                <h4 className="font-medium">Red Sox vs Yankees</h4>
                                <p className="text-sm text-muted-foreground">April {10 + ride}, 2025 • Fenway Park</p>
                              </div>
                              <Badge>{ride === 1 ? "Upcoming" : "Completed"}</Badge>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="events">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Events</CardTitle>
                      <CardDescription>
                        Sports events you've attended or plan to attend
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3].map((event) => (
                          <Card key={event} className="bg-secondary border-none">
                            <CardContent className="p-4">
                              <h4 className="font-medium">Boston Celtics Game {event}</h4>
                              <p className="text-sm text-muted-foreground">TD Garden • June {5 + event * 3}, 2025</p>
                              <div className="mt-2 flex items-center gap-2">
                                <Leaf className="h-4 w-4 text-primary" />
                                <span className="text-xs">{1.5 * event}kg CO₂ saved with this trip</span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
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
