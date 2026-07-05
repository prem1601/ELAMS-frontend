import type { LeaveType } from "@/types/LeaveTypes";

export const LEAVE_CONSTANTS = [
  {
    name: "Name",
    keyName: "name",
    type: "text",
  },
  {
    name: "Date",
    keyName: "date",
    type: "date",
  },
];

export const initianStateLeave: LeaveType = {
  name: "",
  date: "",
};
