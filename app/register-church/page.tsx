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
import Success from "@/components/Success";
import { useState } from "react";

const ChurchFormSchema = z.object({
  church_name: z.string({
    required_error: "Please provide church name",
  }),
  churchId: z.string(),
  email_address: z.string().email(),
  phoneNumber: z.string().min(10).max(15),
  address: z.string(),
  website: z.string().url(),
});

const page = () => {
  const [submitted, setSubmitted] = useState(true);
  const churchForm = useForm<z.infer<typeof ChurchFormSchema>>({
    resolver: zodResolver(ChurchFormSchema),
  });

  async function onSubmit(data: z.infer<typeof ChurchFormSchema>) {
    const {
      church_name,
      churchId,
      email_address,
      phoneNumber,
      address,
      website,
    } = data;
    try {
      const res = await fetch("api/churches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          church_name: church_name,
          churchId: churchId,
          email_address: email_address,
          phoneNumber: phoneNumber,
          address: address,
          website: website,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to create prayer");
      } else {
        setSubmitted(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return submitted ? (
    <>
      <div className="px-5 md:px-20 lg:w-2/3 xl:w-1/2 space-y-6 pt-10">
        <h1 className="text-3xl ">Register Your church</h1>
        <p>
          We are excited that you have decided to join us to make church
          services more interactive and making fellowship easier
        </p>
      </div>
      <Form {...churchForm}>
        <form
          onSubmit={churchForm.handleSubmit(onSubmit)}
          className="px-5 md:px-20 lg:w-2/3 xl:w-1/2 space-y-6 pt-10"
        >
          <FormField
            control={churchForm.control}
            name="church_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Church name{"*"}</FormLabel>
                <FormControl>
                  <input
                    onChange={field.onChange}
                    defaultValue={field.value}
                    className="box-border w-full bg-white shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={churchForm.control}
            name="churchId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Church Identity Number{"*"}</FormLabel>
                <FormControl>
                  <input
                    onChange={field.onChange}
                    defaultValue={field.value}
                    className="box-border w-full bg-white shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  />
                </FormControl>
                <FormDescription>
                  Think of this as a password unique for your church
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={churchForm.control}
            name="email_address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Church email address{"*"}</FormLabel>
                <FormControl>
                  <input
                    onChange={field.onChange}
                    defaultValue={field.value}
                    className="box-border w-full bg-white shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={churchForm.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Church phone number{"*"}</FormLabel>
                <FormControl>
                  <input
                    onChange={field.onChange}
                    defaultValue={field.value}
                    className="box-border w-full bg-white shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  />
                </FormControl>
                <FormDescription>
                  This is used for contact incase of some updates and feedback
                  consultation
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={churchForm.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Church physical address</FormLabel>
                <FormControl>
                  <input
                    onChange={field.onChange}
                    defaultValue={field.value}
                    className="box-border w-full bg-white shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={churchForm.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Church website{"*"}</FormLabel>
                <FormControl>
                  <input
                    onChange={field.onChange}
                    defaultValue={field.value}
                    className="box-border w-full bg-white shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Register church</Button>
        </form>
      </Form>
    </>
  ) : (
    <>
      <Success />
    </>
  );
};

export default page;
