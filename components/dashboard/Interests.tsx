"use client";

import { useEffect, useState } from "react";
import EditInterest from "./EditInterest";
import {
  Button,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";

export default function Interests(props: any) {
  const [editView, setEditView] = useState(false);
  const [list, setList] = useState([]);
  const [fullList, setFullList] = useState([]);
  let userID = props.userID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/interests/${props.userID}`,
          { cache: "no-store", method: "GET" }
        );
        if (!response.ok) {
          throw new Error(
            "Network response was not ok"
          );
        }
        const data = await response.json();
        setList(data.userInterests);
        setFullList(data.fullList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.userID]);

  function createList() {
    let newList = [];
    for (let i = 0; i < list.length; i++) {
      newList.push(fullList[list[i]].interest);
    }
    console.log(newList);

    return newList;
  }

  createList();

  return (
    <>
      <div className="flex flex-col items-start justify-start w-1/3 px-4 pt-4">
        <h1 className="text-xl text-black font-bold">
          Your Interests
        </h1>
        <div className="text-black">
          {!editView ? (
            <>
              <div className="flex flex-col">
                {createList().map(
                  (interest: any) => (
                    <Checkbox
                      defaultSelected
                      isDisabled
                      color="success"
                      key={interest}
                      value={interest}
                    >
                      {interest}
                    </Checkbox>
                  )
                )}
              </div>
            </>
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
            {editView
              ? "Discard Changes"
              : "Edit"}
          </Button>
        </div>
      </div>
    </>
  );
}
