import { useState } from "react";
import { TooltipBox, Wrapper } from "./styles";

type TooltipProps = {
  content: string;
  children: React.ReactNode;
};

export default function Tooltip({ content, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <TooltipBox>{content}</TooltipBox>}
    </Wrapper>
  );
}
