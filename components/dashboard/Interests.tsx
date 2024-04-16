"use client";

import { useEffect, useState } from "react";
import EditInterest from "./EditInterest";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";

export default function Interests(props: any) {
  const [editView, setEditView] = useState(false);
  const [list, setList] = useState([]);
  const [fullList, setFullList] = useState<
    Array<{ interest: string }>
  >([]);
  let userID = props.userID;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://mentorship-chi.vercel.app/api/interests/${props.userID}`,
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

  function createList() {
    let newList = [];

    if (list && list.length > 0) {
      for (let i = 0; i < list.length; i++) {
        const interest =
          fullList[list[i]]?.interest;
        if (interest) {
          newList.push(interest);
        }
      }

      if (newList.length > 0) {
        return newList;
      } else {
        return null;
      }
    } else {
      return [];
    }
  }

  return (
    <>
      <div className="flex flex-col items-start justify-start w-[20%] px-4 pt-4">
        <h1 className="text-xl text-black font-bold">
          Your Interests
        </h1>
        <Card
          isBlurred
          shadow="sm"
          className="bg-background/40 text-black mt-4"
        >
          <CardBody>
            {!editView ? (
              <>
                <div className="flex flex-col space-y-1 ">
                  {createList() ? (
                    createList()!.map(
                      (interest: any) => (
                        // <Checkbox
                        //   defaultSelected
                        //   isDisabled
                        //   color="success"
                        //   key={interest}
                        //   value={interest}
                        // >
                        //   {interest}
                        // </Checkbox>
                        <p key={interest}>
                          {interest}
                        </p>
                      )
                    )
                  ) : (
                    <></>
                  )}
                </div>
              </>
            ) : (
              <div>
                <EditInterest
                  userID={userID}
                  editState={editView}
                  changeEdit={setEditView}
                  fetchData={fetchData}
                />
              </div>
            )}
            <Button
              onPress={() =>
                setEditView(!editView)
              }
              className="mt-4"
            >
              {editView
                ? "Discard Changes"
                : "Edit"}
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
