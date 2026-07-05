import { useState } from "react";

import { apiPost, apiPut } from "@/utils/AxiosHelper";

import type {
  AddEditLeaveProps,
  LeaveType,
} from "@/types/LeaveTypes";
import {
  initianStateLeave,
  LEAVE_CONSTANTS,
} from "@/utils/LeaveConstants";

import ModalWrapper from "./ModalWrapper";

const AddEditLeave = ({
  leave,
  isNew,
  onClose,
}: AddEditLeaveProps) => {
  const [updatedLeave, setUpdatedLeave] = useState<LeaveType>(
    isNew ? initianStateLeave : (leave as LeaveType),
  );
  //   const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setUpdatedLeave((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // setLoading(true);
    try {
      const apiCall = isNew
        ? () => apiPost("api/users", updatedLeave)
        : () => apiPut(`api/users/${updatedLeave.id}`, updatedLeave);

      const response = await apiCall();
      console.log("Response submitting leave form:", response);
      onClose();
    } catch (error) {
      console.error("Error submitting leave form:", error);
    }
    // finally {
    //   setLoading(false);
    // }
  };

  return (
    <ModalWrapper
      title={isNew ? "Add Leave" : "Edit Leave"}
      isOpen={!!leave}
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid items-center gap-4 p-2"
      >
        {LEAVE_CONSTANTS.map((header, i) => {
          const { name, keyName, type = "text" } = header;
          const value =
            updatedLeave[keyName as keyof LeaveType] || "";

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

export default AddEditLeave;
