import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";


export function DatePicker({ label, value, onChange }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <p className="font-semibold text-sm text-slate-900">{label}</p>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            // Use 'value' instead of 'date' to check if empty
            data-empty={!value}
            className="justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
          >
            {/* Format the 'value' passed from React Hook Form */}
            {value ? format(value, "PPP") : <span>Pick a date</span>}
            <ChevronDownIcon className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}      // Controlled by Hook Form
            onSelect={onChange}   // Updates Hook Form state
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;