import {
  Button,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

import { createClient } from "@/utils/supabase/client";

import { useRouter } from "next/navigation";

export default function EditInterest(props: any) {
  const router = useRouter();
  const [selected, setSelected] = useState([]);

  const [interestList, setInterestList] =
    useState([]);

  async function saveChanges() {
    const supabase = createClient();
    try {
      const { data, error } = await supabase
        .from("UserInterests")
        .upsert({
          id: props.userID,
          interests: selected,
        })
        .eq("id", props.userID);
    } catch (e) {
      console.log(e);
    }

    alert("Changes Saved");
    props.changeEdit(!props.editState);
    props.fetchData();

    router.refresh();
  }

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
        setInterestList(data.fullList);
        setSelected(data.userInterests);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.userID]);

  return (
    <>
      <CheckboxGroup
        label="Select Interests"
        color="success"
        value={selected}
        onValueChange={setSelected}
      >
        {interestList.map((interest: any) => (
          <Checkbox
            key={interest.interestid}
            value={interest.interestid}
          >
            {interest.interest}
          </Checkbox>
        ))}
      </CheckboxGroup>
      <Button onPress={saveChanges}>
        Save Changes
      </Button>
    </>
  );
}
