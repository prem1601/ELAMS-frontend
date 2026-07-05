import { MdDelete } from "react-icons/md";

import type { IconProps } from "@/types/CommonTypes";

const CustomDeleteIcon = ({ size = 22, classes = "", onClick }: IconProps) => {
  return (
    <MdDelete
      size={size}
      className={" text-primary-5 hover:text-primary-7 cursor-pointer" + classes}
      onClick={onClick}
    />
  );
};

export default CustomDeleteIcon;
