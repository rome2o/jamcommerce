import {
  RadioGroup as ChakraRadioGroup,
  RadioGroupProps as ChakraRadioGroupProps
} from "@chakra-ui/react";
import { useField } from "formik";
import * as React from "react";

type Props = ChakraRadioGroupProps;

const RadioGroup = ({ name = 'product', children, ...props }: Props) => {
  const [field, , { setValue }] = useField({ name: name, value: props.value });

  const namedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return;

    return React.cloneElement(child, {
      name,
    });
  });

  return (
    <ChakraRadioGroup
      {...props}
      {...field} 
      onChange={setValue}
      children={namedChildren}
    />
  );
};

export default RadioGroup;