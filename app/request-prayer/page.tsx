"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "@/hooks/use-toast";
import SelectChurch from "@/components/SelectChurch";

const FormSchema = z.object({
  select_church: z.string({
    required_error: "Please select an email to display.",
  }),
  prayer: z.string({
    required_error: "Please provide a prayer so we can pray with you",
  }),
  user_name: z.string(),
});

const page = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const formdata = form.getValues();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await fetch("api/prayers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prayer: data.prayer,
          user_name: data.user_name,
          church: data.select_church,
          isNotAnonymous: true,
          email: "your_email_here",
          phoneNumber: "your_phone_number_here",
          churchId: "id_here",
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to create prayer");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleCreatePrayer = async () => {
    try {
      const res = await fetch("api/prayers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prayer: formdata.prayer,
          user_name: formdata.user_name,
          church: formdata.select_church,
          isNotAnonymous: true,
          email: "your_email_here",
          phoneNumber: "your_phone_number_here",
          churchId: "id_here",
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to create prayer");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-5 md:px-20 lg:w-2/3 xl:w-1/2 space-y-6 pt-10"
      >
        <FormField
          control={form.control}
          name="select_church"
          render={({ field }) => <SelectChurch field={field} />}
        />
        <FormField
          control={form.control}
          name="prayer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your prayer</FormLabel>
              <FormControl>
                <textarea
                  onChange={field.onChange}
                  defaultValue={field.value}
                  rows={5}
                  className="box-border w-full  bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-y"
                  required
                />
                {/* <textarea
                  {...field}
                  className="w-full h-32 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring"
                /> */}
              </FormControl>
              <FormDescription>
                Be kind, gentle, and love to others. Let your prayer be heard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="user_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name {"(optional)"}</FormLabel>
              <FormControl>
                <input
                  onChange={field.onChange}
                  defaultValue={field.value}
                  className="box-border w-full bg-white shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                />
              </FormControl>
              <FormDescription>
                Your name helps us recognize you and pray with you. It's
                optional.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Let's pray together</Button>
        {/* <Button onClick={handleCreatePrayer}>try post</Button> */}
      </form>
    </Form>
  );
};

export default page;
