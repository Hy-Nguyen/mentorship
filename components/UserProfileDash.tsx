import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@nextui-org/react";

import { UserIcon } from "@heroicons/react/24/outline";

// User Profile fetch. Show user PFP, and bio below. Also show age, as well as account tags
export default function UserProfile() {
  return (
    <div className="flex items-center justify-center h-full  ">
      <Card className=" mx-10 w-full ">
        <CardHeader className=" justify-between">
          <Avatar name="User" size="lg" />
          Welcome User
          <p></p>
        </CardHeader>
        <Divider className="mx-4" />
        <CardBody>
          <h1 className=" font-bold">Profile</h1>
          <p className="text-small px-2">
            Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Ipsum
            accusantium quaerat vero beatae velit
            necessitatibus harum voluptatem quas
            culpa! Eveniet deleniti illo natus,
            commodi perferendis eum omnis ex
            adipisci saepe.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
