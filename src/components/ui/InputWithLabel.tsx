import { FieldValues, UseFormRegister } from "react-hook-form";
import { Input } from "./input";
import { Label } from "./label";
import { firtsLetterUppercase } from "@/utils/utils";

interface Props {
  name: string;
  type: string;
  labelText: string;
  validacion: object;
  placeholder?: string;
  messageError: string;
  defaultValue?: string;
  min?: string;
  register: UseFormRegister<FieldValues>;
}

export function InputWithLabel({
  name,
  type,
  register,
  labelText,
  validacion,
  messageError,
  defaultValue,
  placeholder,
  min,
}: Props) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{firtsLetterUppercase(labelText)}</Label>
      <Input
        type={type}
        id={name}
        defaultValue={defaultValue}
        min={min}
        {...register(name, validacion)}
        placeholder={placeholder}
        className={`${
          messageError !== "" ? "border-red-500" : "border-[#5B5E80]"
        }`}
      />
      <span
        className={`font-bold ${
          messageError !== "" ? "opacity-100 text-red-500" : "opacity-0"
        }`}
      >
        {messageError}
      </span>
    </div>
  );
}
