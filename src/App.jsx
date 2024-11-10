import Binary from "./components/Binary";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const divide = (element) => [
    Math.floor(element / 10) // Divide by 10 and round down
      .toString(2) // Convert to binary
      .padStart(4, "0"), // Add leading zeros if needed for 4 bits
    (element % 10).toString(2).padStart(4, "0"),
  ];
  const getBinaryTime = () => {
    const todaysDate = new Date();

    const hour = todaysDate.getHours();
    const minute = todaysDate.getMinutes();
    const second = todaysDate.getSeconds();

    return [...divide(hour), ...divide(minute), ...divide(second)];
  };

  const getBinaryDate = () => {
    const todaysDate = new Date();

    const day = todaysDate.getDate();
    const month = todaysDate.getMonth() + 1;
    const year = todaysDate.getFullYear().toString().slice(-2);

    return [...divide(day), ...divide(month), ...divide(year)];
  };

  const [time, setTime] = useState(getBinaryTime());
  const [date, setDate] = useState(getBinaryDate());

  useEffect(() => {
    setInterval(() => setTime(getBinaryTime()), 1000);
  }, [time]);

  useEffect(() => {
    const timer = setInterval(
      () => setDate(getBinaryDate()),
      1000 * 60 * 60 * 24
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      {time.map((element, index) => (
        <Binary key={index} value={element} />
      ))}

      {date.map((element, index) => (
        <Binary key={index} value={element} />
      ))}
    </div>
  );
}

export default App;
