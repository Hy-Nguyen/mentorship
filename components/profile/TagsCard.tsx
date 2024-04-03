"use client";

import { Interests } from "@mui/icons-material";
import { Toolbar, Tooltip, TooltipProps } from "@mui/material";
import {
  Card,
  CardBody,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

export default function Tags() {
  const interests = ["Academic", "Professional","tah2","tag3"]

  return (
    <div className="flex-col flex w-3/5 space-y-4">
      <div>
        <h1 className="text-black text-xl font-bold ">
          Your Tags
        </h1>
      </div>
      <Card className=" bg-gray-50 w-full h-full  m-2 mt-0 marker:float-left text-black ">
        <CardBody>
          {/* Create map for Radios */}

          <RadioGroup>
            {interests.map((interest,i) => (


              <Radio
                key={i}
                value={interest}
                className="text-black"
                >
                  {interest}
              </Radio>
            
            ))}

          </RadioGroup>
        </CardBody>
      </Card>
    </div>
  );
}
