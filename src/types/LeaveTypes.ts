export type LeaveType = {
  id?: string;
  admin_id?: string;
  name: string;
  date: string;
};

export type AddEditLeaveProps = {
  leave: LeaveType | boolean;
  isNew: boolean;
  onClose: () => void;
};
