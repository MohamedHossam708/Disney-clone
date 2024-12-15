"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();

  const formSchema = z.object({
    input: z.string().min(2).max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/search/${values.input}`);
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search ..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </FormProvider>
  );
}
