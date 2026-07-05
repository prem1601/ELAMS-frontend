import { useState, useEffect } from "react";

import { apiGet } from "@/utils/AxiosHelper";

import type { LeaveType } from "@/types/LeaveTypes";
import { DEPARTMENT_CONSTANTS } from "@/utils/DepartmentConstants";

import PrimaryNormalButton from "@/components/buttons/PrimaryButton";
import CustomEditIcon from "@/components/icons/CustomEditIcon";
import CustomDeleteIcon from "@/components/icons/CustomDeleteIcon";
import DeleteModal from "@/components/DeleteModal";
import AddEditDepartment from "@/components/AddEditDepartment";

const Leave = () => {
  const [leaves, setLeaves] = useState<LeaveType[]>([]);

  const [selectedLeave, setSelectedLeave] = useState<LeaveType | boolean>(
    false,
  );
  const [deleteLeave, setDeleteLeave] = useState<LeaveType | false>(false);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await apiGet<LeaveType[]>("/api/leaves");
        setLeaves(response || []);
      } catch (error) {
        console.error("Error fetching leaves:", error);
      }
    };

    fetchLeaves();
  }, []);

  const handleDeleteLeave = async () => {};

  return (
    <>
      {/* -------------------------------- Header ------------------------------------ */}
      <div className="border-b-2 border-gray-300 flex items-center justify-between pb-2">
        <h1 className="text-2xl font-bold">Leaves</h1>
        <PrimaryNormalButton
          title="+ Add Leave"
          onClick={() => setSelectedLeave(true)}
        />
      </div>

      {/* -------------------------------- Table ------------------------------------ */}
      <div className="mt-4">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-300">
              {DEPARTMENT_CONSTANTS.map((header) => {
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
            {leaves.map((user) => {
              const { id } = user;

              return (
                <tr key={id} className="border-b border-gray-300">
                  {DEPARTMENT_CONSTANTS.map((header, i) => {
                    const { keyName } = header;

                    return (
                      <td key={i} className="py-1">
                        {user[keyName as keyof LeaveType]}
                      </td>
                    );
                  })}
                  <td className="py-1">
                    <div className=" flex items-center justify-center gap-3">
                      <CustomEditIcon onClick={() => setSelectedLeave(user)} />
                      <CustomDeleteIcon onClick={() => setDeleteLeave(user)} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* -------------------------------- Add/Edit Leave Modal ------------------------------------ */}
      {selectedLeave && (
        <AddEditDepartment
          department={selectedLeave}
          isNew={selectedLeave === true}
          onClose={() => setSelectedLeave(false)}
        />
      )}

      {/* -------------------------------- Delete Leave Modal ------------------------------------ */}
      {deleteLeave && (
        <DeleteModal
          title="Leave"
          displayText={" - " + deleteLeave.name}
          onClose={() => setDeleteLeave(false)}
          onSubmit={handleDeleteLeave}
          modal={!!deleteLeave}
        />
      )}
    </>
  );
};

export default Leave;
