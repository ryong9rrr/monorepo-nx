"use client";

import Image from "next/image";
import { Flex } from "@package/react-components-layout";
import { Button } from "@package/react-components-button";
import { ToastProvider, useToast } from "@package/react-components-toast";

const SubLayer = () => {
  const { toast } = useToast();

  const handleClickButton = () => {
    console.log("hi");
    toast({
      payload: {
        message: "Hello Mono!",
      },
    });
  };

  return (
    <Flex justify="center" gap={10}>
      <Button color="green" onClick={handleClickButton}>
        It is Client-Component Button
      </Button>
    </Flex>
  );
};

export default function Footer() {
  return (
    <ToastProvider>
      <SubLayer />
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </ToastProvider>
  );
}
