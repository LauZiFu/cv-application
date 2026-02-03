import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Date = "month" | "date";

export default function CustomPickerDate({
  type,
  id,
  name,
  onChange,
}: {
  type: Date;
  id: string;
  name: string;
  onChange: (stateValue: string) => void;
}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const dateFormat = type === "date" ? "DD-MM-YYYY" : "MMM YYYY";

  const handleChange = (date: Date) => {
    onChange(date?.toString());
    setSelectedDate(date);
  };

  return (
    <DatePicker
      portalId="root-portal"
      selected={selectedDate}
      id={id}
      name={name}
      onChange={(date) => handleChange(date)}
      dateFormat={dateFormat}
    />
  );
}
