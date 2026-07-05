import ModalWrapper from "./ModalWrapper";

import type { DeleteModalProps } from "@/types/CommonTypes";

const DeleteModal = ({
  title,
  displayText,
  onClose,
  onSubmit,
  modal,
}: DeleteModalProps) => {
  return (
    <ModalWrapper
      title={"Delete " + title}
      onClose={onClose}
      onSubmit={onSubmit}
      isOpen={modal}
      submitLabel="Delete"
      closeLabel="Cancel"
      classes="max-w-lg"
    >
      <div className="text-gray-700 py-4">
        Are you sure you want to delete {displayText}?
      </div>
    </ModalWrapper>
  );
};

export default DeleteModal;
