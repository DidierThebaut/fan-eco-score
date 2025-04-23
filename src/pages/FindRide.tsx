
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { RideSearch } from "@/components/rides/RideSearch";
import { RideCard, RideProps } from "@/components/rides/RideCard";

export default function FindRide() {
  // Sample ride data
  const [rides] = useState<RideProps[]>([
    {
      id: "1",
      driver: {
        name: "John D.",
        avatar: "",
        rating: 4.8,
      },
      origin: "Downtown Boston",
      destination: "Fenway Park",
      date: "May 12, 2025",
      time: "5:30 PM",
      price: 12,
      seats: 3,
      co2Saved: 1.8,
      carType: "Tesla Model 3",
    },
    {
      id: "2",
      driver: {
        name: "Sarah L.",
        avatar: "",
        rating: 4.9,
      },
      origin: "Cambridge",
      destination: "Fenway Park",
      date: "May 12, 2025",
      time: "5:00 PM",
      price: 15,
      seats: 2,
      co2Saved: 2.1,
      carType: "Toyota Prius",
    },
    {
      id: "3",
      driver: {
        name: "Mike T.",
        avatar: "",
        rating: 4.7,
      },
      origin: "Somerville",
      destination: "Fenway Park",
      date: "May 12, 2025",
      time: "4:45 PM",
      price: 14,
      seats: 4,
      co2Saved: 2.5,
      carType: "Honda Civic Hybrid",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-8 text-center">Find a Ride to the Game</h1>
          <RideSearch />
        </div>
      </div>
      <main className="flex-1 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Available Rides</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select className="text-sm border rounded px-2 py-1">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Departure: Earliest</option>
                <option>CO2 Saved: Highest</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {rides.map((ride) => (
              <RideCard key={ride.id} ride={ride} />
            ))}
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
