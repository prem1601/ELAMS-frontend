import { useState, useEffect } from "react";

import type { UserType } from "@/types/UserTypes";

import { USER_CONSTANTS } from "@/utils/UserConstants";
import { apiGet } from "@/utils/AxiosHelper";

import PrimaryNormalButton from "@/components/buttons/PrimaryButton";
import CustomEditIcon from "@/components/icons/CustomEditIcon";
import CustomDeleteIcon from "@/components/icons/CustomDeleteIcon";
import AddEditUser from "@/components/AddEditUser";
import DeleteModal from "@/components/DeleteModal";

const User = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const [selectedUser, setSelectedUser] = useState<UserType | boolean>(false);
  const [deleteUser, setDeleteUser] = useState<UserType | false>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiGet<UserType[]>("/api/users");
        setUsers(response || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async () => {};

  return (
    <>
      {/* -------------------------------- Header ------------------------------------ */}
      <div className="border-b-2 border-gray-300 flex items-center justify-between pb-2">
        <h1 className="text-2xl font-bold">Users</h1>
        <PrimaryNormalButton
          title="+ Add User"
          onClick={() => setSelectedUser(true)}
        />
      </div>

      {/* -------------------------------- Table ------------------------------------ */}
      <div className="mt-4">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-300">
              {USER_CONSTANTS.map((header) => {
                const { name, keyName } = header;

                return (
                  <th key={keyName} className="py-1">
                    {name}
                  </th>
                );
              })}
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const { id } = user;

              return (
                <tr key={id} className="border-b border-gray-300">
                  {USER_CONSTANTS.map((header, i) => {
                    const { keyName } = header;

                    return (
                      <td key={i} className="py-1">
                        {user[keyName as keyof UserType]}
                      </td>
                    );
                  })}
                  <td className="py-1">
                    <div className=" flex items-center justify-center gap-3">
                      <CustomEditIcon onClick={() => setSelectedUser(user)} />
                      <CustomDeleteIcon onClick={() => setDeleteUser(user)} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* -------------------------------- Add/Edit User Modal ------------------------------------ */}
      {selectedUser && (
        <AddEditUser
          user={selectedUser}
          isNew={selectedUser === true}
          onClose={() => setSelectedUser(false)}
        />
      )}

      {/* -------------------------------- Delete User Modal ------------------------------------ */}
      {deleteUser && (
        <DeleteModal
          title="User"
          displayText={" - " + deleteUser.name}
          onClose={() => setDeleteUser(false)}
          onSubmit={handleDeleteUser}
          modal={!!deleteUser}
        />
      )}
    </>
  );
};

export default User;
