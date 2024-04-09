"use client";

import { useState } from "react";
import EditInterest from "./EditInterest";
import { Button } from "@nextui-org/react";

export default function Interests(props: any) {
  const [editView, setEditView] = useState(false);
  let userID = props.userID;

  return (
    <>
      <div className="flex flex-col items-start justify-start w-1/3 px-4 pt-4">
        <h1 className="text-xl text-black font-bold">
          Your Interests
        </h1>
        <div className="text-black">
          {editView ? (
            <div>list</div>
          ) : (
            <div>
              <EditInterest
                userID={userID}
                editState={editView}
                changeEdit={setEditView}
              />
            </div>
          )}
          <Button
            onPress={() => setEditView(!editView)}
          >
            {!editView
              ? "Discard Changes"
              : "Edit"}
          </Button>
        </div>
      </div>
    </>
  );
}
