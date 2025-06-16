import styled, { keyframes } from "styled-components";
import { Loader2 } from "lucide-react";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(Loader2)`
  animation: ${spin} 1s linear infinite;
`;

export default function Loader({ size }: { size: number }) {
  return <Spinner size={size} />;
}
