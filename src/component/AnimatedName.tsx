import { useEffect, useState } from "react";

type AnimatedNameProps = {
  text: string;
};

export default function AnimatedName({ text }: AnimatedNameProps) {
  const scramble = (text: string) =>
    text.replace(/[a-zA-Z]/g, () =>
      "αβγδεζηθικλμνξοπρστυφχψω"[Math.floor(Math.random() * 24)]
    );
  
  const [displayedText, setDisplayedText] = useState(() => scramble(text));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) =>
        prev
          .split("")
          .map((char, i) => (i <= index ? text[i] : char))
          .join("")
      );

      if (index < text.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index, text]);

  return <span>{displayedText}</span>;
}