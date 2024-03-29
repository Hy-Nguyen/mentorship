"use client";

import {
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const [editView, setEditView] = useState(true);

  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center space-y-4 ">
        {editView ? (
          // TRUE CASE
          <Card className="dark text-3xl w-1/2 bg-slate-200">
            <CardBody>
              <h1 className="font-bold text-black w-full text-center ">
                Show Profile
              </h1>
            </CardBody>
          </Card>
        ) : (
          // FALSE CASE
          <Card className="dark text-3xl w-1/2">
            <CardBody>
              <h1 className="font-bold text-white w-full text-center ">
                Edit Profile
              </h1>
            </CardBody>
          </Card>
        )}
        <Button
          onClick={() => setEditView(!editView)}
        >
          Edit
        </Button>
      </div>
    </>
  );
}
