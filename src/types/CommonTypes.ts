import { type ReactNode } from "react";

export type ReactNodeProps = {
  children: ReactNode;
};

export type NavbarLink = {
  id: number;
  path: string;
  name: string;
};

export type ModalWrapperProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
  onSubmit?: () => void;
  footer?: ReactNode;
  isOpen?: boolean;
  submitLabel?: string;
  closeLabel?: string;
  classes?: string;
  loading?: boolean;
};

export type IconProps = {
  size?: number;
  classes?: string;
  onClick: () => void;
};

export type DeleteModalProps = {
  title: string;
  displayText?: string;
  onClose: () => void;
  onSubmit: () => void;
  modal: boolean;
};

export type ButtonProps = {
  title: string;
  onClick: () => void;
  classes?: string;
};
