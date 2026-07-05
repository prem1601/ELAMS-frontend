import type { ButtonProps } from "@/types/CommonTypes";

const SecondaryButton = ({ onClick, title, classes }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 cursor-pointer " +
        classes
      }
    >
      {title}
    </button>
  );
};

export default SecondaryButton;
