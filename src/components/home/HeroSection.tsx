
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-secondary py-16 sm:py-24">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-b from-secondary/90 to-secondary/60" />
      </div>
      <div className="relative container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
            Ride to the Game,<br />Save the Planet
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            CLEAN AIR connects sports fans for eco-friendly ridesharing to and from events.
            Reduce your carbon footprint while meeting fellow fans.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link to="/find-ride">Find a Ride</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/offer-ride">Offer a Ride</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
