import { FiEdit3 } from "react-icons/fi";

import type { IconProps } from "@/types/CommonTypes";

const CustomEditIcon = ({
  size = 20,
  onClick = () => {},
  classes = "",
}: IconProps) => {
  return (
    <FiEdit3
      size={size}
      onClick={onClick}
      className={
        " text-primary-5 hover:text-primary-7 cursor-pointer" + classes
      }
    />
  );
};

export default CustomEditIcon;
