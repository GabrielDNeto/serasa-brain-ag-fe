import { SelectWrapper, StyledSelect } from "./styles";

type Option = {
  label: string;
  value: string | number;
};

type SelectProps = {
  id?: string;
  name?: string;
  options: Option[];
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  hasError?: boolean;
  disabled?: boolean;
};

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  hasError = false,
  disabled = false,
}) => {
  return (
    <SelectWrapper>
      <StyledSelect
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        hasError={hasError}
        disabled={disabled}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};
