import { createPortal } from "react-dom";

import type { ModalWrapperProps } from "@/types/CommonTypes";

import PrimaryNormalButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";

const ModalWrapper = ({
  title,
  children,
  onClose,
  onSubmit,
  footer,
  isOpen = true,
  submitLabel = "Save",
  closeLabel = "Close",
  classes = "",
}: ModalWrapperProps) => {
  const root =
    typeof document !== "undefined" ? document.getElementById("root") : null;

  if (!root || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 scrollbar-none">
      <div
        className={`w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-xl ${classes}`}
      >
        <div className="border-b border-gray-400 px-4 pt-3 pb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <div className="px-6 py-2">{children}</div>
        <div className="border-t border-gray-400 px-6 pt-2 pb-3">
          {footer ? (
            footer
          ) : (
            <div className="flex flex-wrap justify-end gap-3">
              <SecondaryButton title={closeLabel} onClick={onClose} />
              {onSubmit && (
                <PrimaryNormalButton title={submitLabel} onClick={onSubmit} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    root,
  );
};

export default ModalWrapper;
