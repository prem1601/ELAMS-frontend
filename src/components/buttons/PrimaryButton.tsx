import type { ButtonProps } from "@/types/CommonTypes";

const PrimaryButton = ({ title, onClick, classes = "" }: ButtonProps) => {
  return (
    <button
      type="button"
      className={
        "bg-primary-7 hover:bg-primary-9 text-white font-bold py-1 px-4 rounded cursor-pointer transition-colors duration-300 " +
        classes
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
