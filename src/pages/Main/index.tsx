import React, { useEffect, useState } from "react";
import "./index.css";

const Main = () => {
  const mainWord = "Type over the cloud.";

  const [mainTitle, setMainTitle] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setMainTitle((prev) => {
        let res = prev ? prev + mainWord[count] : mainWord[0];
        setCount(count + 1);

        if (count >= mainWord.length) {
          setCount(0);
          setMainTitle("");
        }

        return res;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <div className="mainWrapper">
      <h1>{mainTitle}</h1>
    </div>
  );
};

export default Main;
