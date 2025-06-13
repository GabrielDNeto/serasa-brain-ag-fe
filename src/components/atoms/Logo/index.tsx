import logoImg from "@/assets/brain-ag-logo.png";
import { StyledImg } from "./styles";

export default function Logo({
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <StyledImg src={logoImg} {...props} />;
}
