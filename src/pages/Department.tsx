import { useState, useEffect } from "react";

import { apiGet } from "@/utils/AxiosHelper";

import type { DepartmentType } from "@/types/DepartmentTypes";
import { DEPARTMENT_CONSTANTS } from "@/utils/DepartmentConstants";

import PrimaryNormalButton from "@/components/buttons/PrimaryButton";
import CustomEditIcon from "@/components/icons/CustomEditIcon";
import CustomDeleteIcon from "@/components/icons/CustomDeleteIcon";
import AddEditDepartment from "@/components/AddEditDepartment";
import DeleteModal from "@/components/DeleteModal";

const Department = () => {
  const [departments, setDepartments] = useState<DepartmentType[]>([
    {
      name: "dept 1",
    },
  ]);

  const [selectedDepartment, setSelectedDepartment] = useState<
    DepartmentType | boolean
  >(false);
  const [deleteDepartment, setDeleteDepartment] = useState<
    DepartmentType | false
  >(false);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await apiGet<DepartmentType[]>("/api/departments");
        setDepartments(response || []);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const handleDeleteDepartment = async () => {};

  return (
    <>
      {/* -------------------------------- Header ------------------------------------ */}
      <div className="border-b-2 border-gray-300 flex items-center justify-between pb-2">
        <h1 className="text-2xl font-bold">Departments</h1>
        <PrimaryNormalButton
          title="+ Add Department"
          onClick={() => setSelectedDepartment(true)}
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
            {departments.map((user) => {
              const { id } = user;

              return (
                <tr key={id} className="border-b border-gray-300">
                  {DEPARTMENT_CONSTANTS.map((header, i) => {
                    const { keyName } = header;

                    return (
                      <td key={i} className="py-1">
                        {user[keyName as keyof DepartmentType]}
                      </td>
                    );
                  })}
                  <td className="py-1">
                    <div className=" flex items-center justify-center gap-3">
                      <CustomEditIcon
                        onClick={() => setSelectedDepartment(user)}
                      />
                      <CustomDeleteIcon
                        onClick={() => setDeleteDepartment(user)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* -------------------------------- Add/Edit Department Modal ------------------------------------ */}
      {selectedDepartment && (
        <AddEditDepartment
          department={selectedDepartment}
          isNew={selectedDepartment === true}
          onClose={() => setSelectedDepartment(false)}
        />
      )}

      {/* -------------------------------- Delete Department Modal ------------------------------------ */}
      {deleteDepartment && (
        <DeleteModal
          title="Department"
          displayText={" - " + deleteDepartment.name}
          onClose={() => setDeleteDepartment(false)}
          onSubmit={handleDeleteDepartment}
          modal={!!deleteDepartment}
        />
      )}
    </>
  );
};

export default Department;
