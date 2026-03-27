import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";

interface DatePickerProps {
  label?: string;
  value?: string;        // stored as "yyyy-MM-dd" string in react-hook-form
  onChange: (date: string) => void;
}

export function DatePicker({ label, value, onChange }: DatePickerProps) {
  // Convert string → Date for Calendar (needs Date object)
  const selectedDate = value ? new Date(value) : undefined;

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <p className="font-semibold text-sm text-slate-900">{label}</p>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            data-empty={!value}
            className="justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
          >
            {value ? format(new Date(value), "PPP") : <span>Pick a date</span>}
            <ChevronDownIcon className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date: Date | undefined) => {
              const dateString = date ? format(date, "yyyy-MM-dd") : "";
              onChange(dateString);
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;