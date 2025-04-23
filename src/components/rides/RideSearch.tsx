
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export function RideSearch() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Stadium or venue" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="flex-1"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <Input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="flex-1"
            />
          </div>
          <Button className="w-full md:w-auto">Search</Button>
        </div>
      </CardContent>
    </Card>
  );
}
