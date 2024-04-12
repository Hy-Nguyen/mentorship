"use client";

import { NextUIProvider } from "@nextui-org/react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </LocalizationProvider>
  );
}
