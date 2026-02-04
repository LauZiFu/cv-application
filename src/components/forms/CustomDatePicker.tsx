import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type PickerType = "month" | "date";

export default function CustomPickerDate({
  type,
  id,
  name,
  onChange,
}: {
  type: PickerType;
  id: string;
  name: string;
  onChange: (stateValue: string) => void;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const dateFormat = type === "date" ? "DD-MM-YYYY" : "MMM YYYY";

  const handleChange = (date: Date | null) => {
    if (!date) return;
    onChange(date.toString());
    setSelectedDate(date);
  };

  return (
    <DatePicker
      portalId="root-portal"
      selected={selectedDate}
      id={id}
      name={name}
      onChange={handleChange}
      dateFormat={dateFormat}
    />
  );
}
