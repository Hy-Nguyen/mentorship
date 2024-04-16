import SideBarContent from "@/components/sidebar/SideBarContent";
import { Card } from "@nextui-org/react";

export default function SideBar(props: {
  userID: any;
}) {
  return (
    <>
      <div className="ml-2 mt-2 p-2 hidden lg:flex md:w-1/6 w-1/5 h-[90vh]">
        <Card
          isBlurred
          className=" w-full bg-background/30  "
        >
          <SideBarContent userID={props.userID} />
        </Card>
      </div>
    </>
  );
}
