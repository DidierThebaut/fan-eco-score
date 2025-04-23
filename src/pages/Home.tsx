
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ImpactStats } from "@/components/home/ImpactStats";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Earth, Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        <HowItWorks />
        
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Sports Fans, Unite for the Planet</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every ride shared to a sporting event can save up to 2.5kg of CO₂ emissions. 
                Join thousands of eco-conscious sports fans making a difference one ride at a time.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg">
                  <Link to="/signup">Join the Movement</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <ImpactStats />
        
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((index) => (
                <div key={index} className="bg-card rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 bg-muted" />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">NBA Finals Game {index}</h3>
                    <p className="text-sm text-muted-foreground mb-4">Madison Square Garden • June 15, 2023</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">32 rides available</span>
                      <Button asChild variant="outline" size="sm">
                        <Link to="/find-ride">Find Ride</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-secondary py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <div className="flex items-center gap-2 mb-4">
                  <Earth className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold">CLEAN AIR</span>
                </div>
                <p className="text-sm text-muted-foreground max-w-md">
                  Connecting sports fans for eco-friendly ridesharing to reduce carbon footprints and build community.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Platform</h3>
                  <ul className="space-y-2">
                    <li><Link to="/find-ride" className="text-sm text-muted-foreground hover:text-primary">Find a Ride</Link></li>
                    <li><Link to="/offer-ride" className="text-sm text-muted-foreground hover:text-primary">Offer a Ride</Link></li>
                    <li><Link to="/events" className="text-sm text-muted-foreground hover:text-primary">Sports Events</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</a></li>
                    <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
                    <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</a></li>
                    <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</a></li>
                    <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Cookies</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
              © 2025 CLEAN AIR. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
