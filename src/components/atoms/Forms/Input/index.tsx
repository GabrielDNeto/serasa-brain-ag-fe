import { useState } from "react";
import { InputWrapper, StyledInput, ToggleButton } from "./styles";
import { Eye, EyeClosed } from "lucide-react";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "text" | "password";
  hasError?: boolean;
}

export default function Input({
  variant = "text",
  hasError = false,
  ...props
}: IInput) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordInput = variant === "password";
  const inputType = isPasswordInput
    ? showPassword
      ? "text"
      : "password"
    : variant;

  return (
    <InputWrapper>
      <StyledInput {...props} type={inputType} haserror={hasError.toString()} />
      {isPasswordInput && (
        <ToggleButton
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
        >
          {showPassword ? <Eye /> : <EyeClosed />}
        </ToggleButton>
      )}
    </InputWrapper>
  );
}
