import * as React from "react";
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
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const formSchema = z.object({
  amount: z
    .coerce
    .number({ invalid_type_error: "Amount must be a number." })
    .positive("Amount must be a positive number.")
    .min(1, "Amount must be at least 1."),
});

export default function Stake() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [token, setToken] = React.useState("Eth");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 bg-zinc-800 w-[400px] border border-gray-700 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500 transition duration-300 ease-in-out"
        >
          <h1 className="text-2xl font-bold text-center text-white">
            Stake Your Tokens
          </h1>
          <p className="text-center text-gray-400">
            Stake your ETH or MATIC to earn passive rewards.
          </p>
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-1 text-white">Amount</FormLabel>
                <main className="flex gap-2">
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter amount to be staked"
                      {...field}
                      className="bg-gray-900 text-white border-gray-700 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </FormControl>
                  <FormControl>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="bg-gray-900 text-white border-gray-700 hover:bg-purple-600"
                        >
                          {token}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 bg-gray-800 text-white border-gray-700">
                        <DropdownMenuLabel>Tokens</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          value={token}
                          onValueChange={setToken}
                        >
                          <DropdownMenuRadioItem value="Eth">ETH</DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="Matic">MATIC</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </FormControl>
                </main>
                <FormDescription className="text-gray-400 mt-2">
                  Stake and earn rewards.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <hr className="border-gray-700" />
          <div className="flex justify-between text-white">
            <p>You will receive:</p>
            <p>0 p{token}</p>
          </div>
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
