import { useState } from "react";

import { apiPost, apiPut } from "@/utils/AxiosHelper";

import type {
  AddEditDepartmentProps,
  DepartmentType,
} from "@/types/DepartmentTypes";
import {
  initianStateDepartment,
  DEPARTMENT_CONSTANTS,
} from "@/utils/DepartmentConstants";

import ModalWrapper from "./ModalWrapper";

const AddEditDepartment = ({
  department,
  isNew,
  onClose,
}: AddEditDepartmentProps) => {
  const [updatedDepartment, setUpdatedDepartment] = useState<DepartmentType>(
    isNew ? initianStateDepartment : (department as DepartmentType),
  );
  //   const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setUpdatedDepartment((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // setLoading(true);
    try {
      const apiCall = isNew
        ? () => apiPost("api/users", updatedDepartment)
        : () => apiPut(`api/users/${updatedDepartment.id}`, updatedDepartment);

      const response = await apiCall();
      console.log("Response submitting department form:", response);
      onClose();
    } catch (error) {
      console.error("Error submitting department form:", error);
    }
    // finally {
    //   setLoading(false);
    // }
  };

  return (
    <ModalWrapper
      title={isNew ? "Add Department" : "Edit Department"}
      isOpen={!!department}
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid  items-center gap-4 p-2"
      >
        {DEPARTMENT_CONSTANTS.map((header, i) => {
          const { name, keyName, type = "text" } = header;
          const value =
            updatedDepartment[keyName as keyof DepartmentType] || "";

          return (
            <div key={i}>
              <label htmlFor={keyName} className="font-semibold">
                {name}
              </label>
              <div>
                <input
                  type={type}
                  id={keyName}
                  name={keyName}
                  value={value}
                  onChange={handleChange}
                  className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
            </div>
          );
        })}
      </form>
    </ModalWrapper>
  );
};

export default AddEditDepartment;
