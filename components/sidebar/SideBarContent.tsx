import {
  HomeIcon,
  CheckCircleIcon,
  InboxIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import SideNavItem from "./SideNavItem";

export default function SideBarContent(props: {
  userID: number;
}) {
  let iconSize = "w-7 h-7";

  let navObj = {
    Home: {
      name: "Home",
      icon: "HomeIcon",
      link: `/mentorHome/${props.userID}`,
    },
    Goals: {
      name: "Goals",
      icon: "CheckCircleIcon",
    },
    Mentor: {
      name: "Mentors",
      icon: "InboxIcon",
      link: `/mentors/${props.userID}`,
    },
    Calendar: {
      name: "Appointments",
      icon: "CalendarDaysIcon",
      link: `/appointment/${props.userID}`,
    },
    Profile: {
      name: "Profile",
      icon: "UserCircleIcon",
      link: `/profile/${props.userID}`,
    },
    Settings: {
      name: "Settings",
      icon: "Cog6ToothIcon",
      link: "/",
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
    <div className="">
      <div className="pt-6 flex flex-col items-center space-y-5 ">
        {Object.values(navObj).map((item, i) => (
          <div key={i} className=" w-full">
            <SideNavItem
              name={item.name}
              icon={icons[item.icon]}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
