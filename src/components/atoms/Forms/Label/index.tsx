import { StyledLabel } from "./style";

export default function FormLabel({
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <StyledLabel {...props}>{children}:</StyledLabel>;
}
