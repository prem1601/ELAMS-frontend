export type LeaveType = {
  id?: string;
  adminId?: string;
  name: string;
  date: string;
};

export type AddEditLeaveProps = {
  leave: LeaveType | boolean;
  isNew: boolean;
  onClose: () => void;
};
