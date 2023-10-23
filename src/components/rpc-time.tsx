"use client";
import { useState } from "react";

import { getServerTime } from "@/actions";

export const RPCTime = () => {
  const [time, setTime] = useState("");

  return (
    <div>
      <button onClick={async () => setTime(await getServerTime())}>
        Get Server Time
      </button>
      <p>{time}</p>
    </div>
  );
};
