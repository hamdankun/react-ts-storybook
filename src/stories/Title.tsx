import React from "react";

interface TitleProps {
  title: string;

  size: "small" | "medium" | "large";
}

const Title: React.FC<TitleProps> = (props) => {
  const { title, size } = props;

  const resolveSize = () => {
    if (size === "small") return "12px";

    if (size === "medium") return "16px";

    if (size === "large") return "24px";
  };

  return <p style={{ fontSize: resolveSize() }}>{title}</p>;
};

export default Title;
