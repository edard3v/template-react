import { useRef, useState } from "react";
import { ZodSchema } from "zod";

export const useForm = <T = Inputs>(schema: ZodSchema, options: Options<T>) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [inputs, setInputs] = useState<T>();
  const [errors, setErrors] = useState<T>();
  const [isValid, setIsValid] = useState(false);

  const success = () => {
    const result = validate();
    if (!result || !result.inputs) return;

    options.success(result);
  };

  const validate = (): { inputs: T } => {
    const formData = new FormData(formRef.current!);
    const formEntries = Object.fromEntries(formData);
    const { error, data, success } = schema.safeParse(formEntries);

    setIsValid(success);
    setInputs(data);

    const errors = error?.issues
      .map((item) => ({ [item.path[0]]: item.message }))
      .reduce((acc, error) => {
        const key = Object.keys(error)[0];
        acc[key] = error[key];
        return acc;
      }, {});

    setErrors(errors as T);

    return { inputs: data };
  };

  const reset = () => formRef?.current?.reset();

  return {
    ref: formRef,
    inputs,
    errors,
    isValid,

    update: validate,
    success,
    reset,
  };
};

type Inputs = { [x: string]: string } | undefined;

type Options<T> = {
  success: (data: { inputs: T }) => void;
};
