export type DepartmentType = {
  id?: string;
  adminId?: string;
  name: string;
};

export type AddEditDepartmentProps = {
  department: DepartmentType | boolean;
  isNew: boolean;
  onClose: () => void;
};
