import { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return <>{hydrated && <span>{`${hours}:${minutes}:${seconds}`}</span>}</>;
};

export default CurrentTime;
