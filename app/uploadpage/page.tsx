import React from "react";
import { Button } from "@nextui-org/react";

export default function App() {
  return (





    // BUTTONS NEXT.js SAMPLE
    <div className="flex flex-wrap gap-4 items-center">
      <Button color="primary" variant="solid">
        Solid
      </Button>
      <Button color="primary" variant="faded">
        Faded
      </Button>
      <Button color="primary" variant="bordered">
        Bordered
      </Button>
      <Button color="primary" variant="light">
        Light
      </Button>
      <Button color="primary" variant="flat">
        Flat
      </Button>
      <Button color="primary" variant="ghost">
        Ghost
      </Button>
      <Button color="primary" variant="shadow">
        Shadow
      </Button>







      {/* RESUME*/}
      <div className="relative w-48 h-64 rounded-lg bg-white shadow-md">
        {/* Resume image placeholder */}
        <div className="w-full h-3/4 rounded-t-lg bg-gray-200"></div>

        {/* Resume Button */}
        <div className="absolute bottom-4 left-4">
          <Button color="primary" variant="solid" size="sm">
            Preview Resume
          </Button>
        </div>
      </div>


      {/* TRANSCRIPT */}
      <div className="relative w-48 h-64 rounded-lg bg-white shadow-md">
        {/* Transcript image palcehodler */}
        <div className="w-full h-3/4 rounded-t-lg bg-gray-200"></div>

        {/* Transcript Button */}
        <div className="absolute bottom-4 left-4">
          <Button color="primary" variant="solid" size="sm">
            Preview Transcript
          </Button>
        </div>
      </div>
    </div>
  );
}
