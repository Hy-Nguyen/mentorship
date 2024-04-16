import {
  HomeIcon,
  CheckCircleIcon,
  InboxIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import SideNavItem from "./SideNavItem";

import { createClient } from "@/utils/supabase/client";

import { redirect } from "next/navigation";

export default async function SideBarContent(props: {
  userID: number;
}) {
  let iconSize = "w-7 h-7";

  const supabase = createClient();
  let role = "";

  try {
    const { data: user, error } = await supabase
      .from("Users")
      .select("role")
      .eq("UserID", props.userID);
    if (user?.length != 0) {
      role = user![0].role;
    } else {
    }
  } catch (e) {
    console.log(e);
  }

  let url;

  if (role == "mentor") {
    url = "mentorHome";
  } else if (role == "mentee") {
    url = "menteeHome";
  } else {
    url = "mentorHome";
  }

  let navObj = {
    Home: {
      name: "Home",
      icon: "HomeIcon",
      link: `/${url}/${props.userID}`,
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
    <div className="pl-2">
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
