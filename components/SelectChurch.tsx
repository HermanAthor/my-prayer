import React, { FC } from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FieldValues } from "react-hook-form";

type SelectChurchProps = {
  field: FieldValues;
};

const SelectChurch: FC<SelectChurchProps> = ({ field }) => {
  return (
    <FormItem>
      <FormLabel>Choose your church</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select the church you are attending to" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="COTR">COTR</SelectItem>
          <SelectItem value="Hillsong">Hillsong</SelectItem>
          <SelectItem value="Drejervej">Drejevej</SelectItem>
        </SelectContent>
      </Select>
      <FormDescription>
        You can select the church you are currently attending
      </FormDescription>
      <FormMessage />
    </FormItem>
  );
};

export default SelectChurch;
