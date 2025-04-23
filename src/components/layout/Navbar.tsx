
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">CLEAN AIR</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/find-ride" className="text-sm font-medium hover:text-primary">
            Find a Ride
          </Link>
          <Link to="/offer-ride" className="text-sm font-medium hover:text-primary">
            Offer a Ride
          </Link>
          <Link to="/events" className="text-sm font-medium hover:text-primary">
            Sports Events
          </Link>
          <Link to="/impact" className="text-sm font-medium hover:text-primary">
            Your Impact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Sign in
          </Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </header>
  );
}
