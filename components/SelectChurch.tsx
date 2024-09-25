import React, { FC, useEffect, useState } from "react";
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
  const [churches, setChurches] = useState([]);
  useEffect(() => {
    const getChurches = async () => {
      try {
        const res = await fetch("/api/churches");
        if (!res.ok) {
          throw new Error("Failed to fetch churches");
        }
        if (res.ok) {
          const json = await res.json();
          setChurches(json.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getChurches();
  }, []);
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
          {churches.map((church) => {
            const { churchId, church_name, _id } = church;
            return (
              <SelectItem key={_id} value={churchId}>
                {church_name}
              </SelectItem>
            );
          })}
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
