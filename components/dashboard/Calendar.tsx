"use client";
import {
  Card,
  CardBody,
} from "@nextui-org/react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function Calendar() {
  return (
    <div className="flex flex-col items-start justify-start   w-[40%] h-full pt-4   ">
      <div className="mx-auto">
        <h1 className="text-xl text-black font-bold">
          Calendar
        </h1>

        <Card className="mt-4  ">
          <CardBody>
            <DateCalendar />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
