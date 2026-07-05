export type DepartmentType = {
  id?: string;
  admin_id?: string;
  name: string;
};

export type AddEditDepartmentProps = {
  department: DepartmentType | boolean;
  isNew: boolean;
  onClose: () => void;
};
