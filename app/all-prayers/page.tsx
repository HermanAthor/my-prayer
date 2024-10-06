"use client";
import Nav from "@/components/all-prayersPage/Nav";
import { Button } from "@/components/ui/button";
import { dummyprayerdata } from "@/lib/prayerObjectDummyData";
import { CaretRightIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { PrayerCard } from "@/components/all-prayersPage/PrayerCard";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

const allPrayers = () => {
  const createSessionForm = useForm();

  const [prayers, setPrayers] = useState([]);
  const [churchId, setChurchId] = useState("");
  useEffect(() => {
    const getPrayers = async () => {
      try {
        const res = await fetch(`/api/prayers?churchId=${churchId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch churches");
        }
        if (res.ok) {
          const json = await res.json();
          setPrayers(json.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPrayers();
  }, []);

  const getPrayers = async () => {
    try {
      const res = await fetch(`/api/prayers?church=${churchId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch churches");
      }
      if (res.ok) {
        const json = await res.json();
        console.log(json.results);
        setPrayers(json.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-[minmax(150px,15%),1fr] gap-3 p-3 bg-white ">
        <div className="bg-[#D9D9D9] h-screen rounded-[20px] pt-3 ">
          <Nav />
        </div>
        <div className="bg-transparent h-screen rounded-[20px] p-3 space-y-3 overflow-auto">
          <form className="w-1/2 flex justify-between rounded-[20px] bg-gray-100 border border-black focus-within:border-orange-500 p-1 ">
            <input className="flex-1 rounded-[20px] outline-none overflow-hidden bg-transparent px-3 text-black text-lg" />
            <Button className="rounded-[20px]">Search Prayers</Button>
          </form>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#D9D9D9] h-screen rounded-[20px] p-3 space-y-3 overflow-auto">
              {Array.from({ length: 10 }).map((_, index) => (
                <PrayerCard index={index} />
              ))}
            </div>
            <div className="bg-[#D9D9D9] h-screen rounded-[20px] grid grid-rows-2 p-3 space-y-3">
              <div className="bg-red-100 rounded-[20px] p-3">
                <h1 className="text-2xl text-black">Preview</h1>
                <div className="flex flex-col space-y-3">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <p
                      key={index}
                      className="text-sm text-black rounded-xl text-pretty bg-orange-50 p-2 "
                    >
                      Your prayer can go here Your prayer can go here Your
                      prayer can go here Your prayer can go here Your prayer can
                      go here Your prayer can go here
                    </p>
                  ))}
                </div>
              </div>
              <div className="bg-green-300 rounded-[20px] p-3">
                <h1>Create session</h1>
                <Form {...createSessionForm}>
                  <form>
                    <FormField
                      control={createSessionForm.control}
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
                            Your name helps us recognize you and pray with you.
                            It's optional.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={createSessionForm.control}
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
                            Your name helps us recognize you and pray with you.
                            It's optional.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Create</Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default allPrayers;
