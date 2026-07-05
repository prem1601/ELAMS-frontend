export type UserType = {
  id?: string;
  admin_id?: string;
  name: string;
  email: string;
  phone: number | string;
  department?: string;
  role: "admin" | "manager" | "employee";
};

export type AddEditUserProps = {
  user: UserType | boolean;
  isNew: boolean;
  onClose: () => void;
};
