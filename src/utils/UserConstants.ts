import type { UserType } from "@/types/UserTypes";

export const USER_CONSTANTS = [
  {
    name: "Name",
    keyName: "name",
  },
  {
    name: "Email",
    keyName: "email",
    type: "email",
  },
  {
    name: "Phone",
    keyName: "phone",
    type: "number",
  },
  // {
  //   name: "Department",
  //   keyName: "department",
  //   type: "select",
  // },
  {
    name: "Role",
    keyName: "role",
    type: "select",
    options: [
      { value: "admin", label: "Admin" },
      { value: "manager", label: "Manager" },
      { value: "employee", label: "Employee" },
    ],
  },
];

export const initianStateUser: UserType = {
  name: "",
  email: "",
  phone: "",
  // department: "",
  role: "employee",
};
