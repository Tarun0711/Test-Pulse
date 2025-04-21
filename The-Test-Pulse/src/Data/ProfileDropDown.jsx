import { ACCOUNT_TYPE } from "../Utils/Constants";
export const ProfileDropDown = [
  {
    title: "Profile",
    path: "/dashboard/setting/profile",
  },
  {
    title: "Insights",
    path: "/dashboard/insights",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    title: "Add Course",
    path: "/dashboard/AddCourse",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    title: "Add Course",
    path: "/dashboard/course",
    type: ACCOUNT_TYPE.INSTRUCTOR,
  },
  {
    title: "SendEmail",
    path: "/dashboard/Email",
    type: ACCOUNT_TYPE.INSTRUCTOR,
  },
  {
    title: "SendEmail",
    path: "/dashboard/Email",
    type: ACCOUNT_TYPE.ADMIN,
  },
  {
    title: "Other Inputs",
    path: "/dashboard/Inputs",
    type: ACCOUNT_TYPE.ADMIN,
  },
];
