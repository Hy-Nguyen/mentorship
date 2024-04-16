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
  const [selected, setSelected] = useState<any[]>(
    []
  );
  const [selectedName, setSelectedName] =
    useState<any[]>([]);

  const [interestList, setInterestList] =
    useState<any>([]);

  async function saveChanges() {
    const supabase = createClient();
    try {
      const { data, error } = await supabase
        .from("UserInterests")
        .upsert({
          id: props.userID,
          interests: selected,
          interest_name: selectedName,
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
  function handleSelect(e: any) {
    setSelected(e);
    setSelectedName(getName(e));
  }

  function getName(array: Array<any>) {
    let names = [];
    for (let i = 0; i < array.length; i++) {
      names.push(
        interestList[array[i] - 1].interest
      );
    }
    return names;
  }

  useEffect(() => {
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
        setInterestList(data.fullList);
        setSelected(data.userInterests);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [props.userID]);

  return (
    <div className="space-y-2 flex flex-col justify-center">
      <CheckboxGroup
        label="Select Interests"
        color="success"
        value={selected}
        onValueChange={handleSelect}
      >
        {interestList.map((interest: any) => (
          <>
            <Checkbox
              key={interest.name}
              value={interest.interestid}
            >
              {interest.interest}
            </Checkbox>
          </>
        ))}
      </CheckboxGroup>
      <Button
        onPress={saveChanges}
        color="success"
      >
        Save Changes
      </Button>
    </div>
  );
}
