
export function ImpactStats() {
  return (
    <div className="bg-accent py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-accent-foreground mb-12">Our Collective Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-accent-foreground mb-2">12,500+</p>
            <p className="text-sm text-accent-foreground/80">Shared Rides</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent-foreground mb-2">45,800</p>
            <p className="text-sm text-accent-foreground/80">KG CO2 Saved</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent-foreground mb-2">8,200</p>
            <p className="text-sm text-accent-foreground/80">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent-foreground mb-2">850+</p>
            <p className="text-sm text-accent-foreground/80">Sports Events</p>
          </div>
        </div>
      </div>
    </div>
  );
}
