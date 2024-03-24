import {
  Spacer,
  Divider,
} from "@nextui-org/react";

import {
  HomeIcon,
  CheckCircleIcon,
  InboxIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import SideNavItem from "./SideNavItem";

export default function SideBarContent() {
  let iconSize = "w-7 h-7";

  let navObj = {
    Home: { name: "Home", icon: "HomeIcon" },
    Goals: {
      name: "Goals",
      icon: "CheckCircleIcon",
    },
    Inbox: { name: "Inbox", icon: "InboxIcon" },
    Calendar: {
      name: "Calendar",
      icon: "CalendarDaysIcon",
    },
    Profile: {
      name: "Profile",
      icon: "UserCircleIcon",
    },
    Settings: {
      name: "Settings",
      icon: "Cog6ToothIcon",
    },
  };
  const icons = {
    HomeIcon: <HomeIcon className={iconSize} />,
    CheckCircleIcon: (
      <CheckCircleIcon className={iconSize} />
    ),
    InboxIcon: <InboxIcon className={iconSize} />,
    CalendarDaysIcon: (
      <CalendarDaysIcon className={iconSize} />
    ),
    UserCircleIcon: (
      <UserCircleIcon className={iconSize} />
    ),
    Cog6ToothIcon: (
      <Cog6ToothIcon className={iconSize} />
    ),
  };
  return (
    <div>
      <Spacer y={5} />
      <Divider className="" />
      <Spacer y={5} />

      <div className="pt-6 flex flex-col items-center">
        {Object.values(navObj).map((item, i) => (
          <div key={i} className=" w-56">
            <SideNavItem
              name={item.name}
              icon={icons[item.icon]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}