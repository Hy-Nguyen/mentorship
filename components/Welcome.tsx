import { Avatar } from "@nextui-org/react";

export default function Welcome() {
  let name = "User";
  return (
    <>
      <div className="px-2 py-6 flex">
        <Avatar
          name="User"
          size="lg"
          isBordered
        />
        <div className="pl-8">
          <h1 className="text-xl font-bold text-gray-900">
            Welcome
          </h1>

          <h2>{name}!</h2>
        </div>
      </div>
    </>
  );
}
