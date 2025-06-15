import { Input, type InputProps } from "antd";
import type { ChangeEvent } from "react";

export default function MaskedInput(
  props: InputProps & { mask: (rawValue: string) => string },
) {
  const { mask, onChange, ...rest } = props;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    const maskedValue = mask(rawValue);

    const event = {
      ...e,
      target: {
        ...e.target,
        value: maskedValue,
      },
    };

    onChange?.(event as ChangeEvent<HTMLInputElement>);
  };

  return <Input {...rest} onChange={handleChange} />;
}
