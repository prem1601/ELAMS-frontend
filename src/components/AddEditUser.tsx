import { useState } from "react";

import { apiPost, apiPut } from "@/utils/AxiosHelper";

import type { AddEditUserProps, UserType } from "@/types/UserTypes";
import { initianStateUser, USER_CONSTANTS } from "@/utils/UserConstants";

import ModalWrapper from "./ModalWrapper";

const AddEditUser = ({ user, isNew, onClose }: AddEditUserProps) => {
  const [updatedUser, setUpdatedUser] = useState<UserType>(
    isNew ? initianStateUser : (user as UserType),
  );
  //   const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // setLoading(true);
    try {
      const apiCall = isNew
        ? () => apiPost("api/users", updatedUser)
        : () => apiPut(`api/users/${updatedUser.id}`, updatedUser);

      const response = await apiCall();
      console.log("Response submitting user form:", response);
      onClose();
    } catch (error) {
      console.error("Error submitting user form:", error);
    }
    // finally {
    //   setLoading(false);
    // }
  };

  return (
    <ModalWrapper
      title={isNew ? "Add User" : "Edit User"}
      isOpen={!!user}
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-2 items-center gap-4 py-2"
      >
        {USER_CONSTANTS.map((header, i) => {
          const { name, keyName, type = "text", options } = header;
          const value = updatedUser[keyName as keyof UserType] || "";

          return (
            <div key={i}>
              <label htmlFor={keyName} className="font-semibold">
                {name}
              </label>
              <div>
                {type === "select" ? (
                  <select
                    id={keyName}
                    name={keyName}
                    value={value}
                    onChange={handleChange}
                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  >
                    {options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={type}
                    id={keyName}
                    name={keyName}
                    value={value}
                    onChange={handleChange}
                    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                )}
              </div>
            </div>
          );
        })}
      </form>
    </ModalWrapper>
  );
};

export default AddEditUser;
