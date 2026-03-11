import { ComponentType, RefObject } from "react";

export type ModalVariant = "dialog" | "popup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ModalPayload<P = any> {
    component: ComponentType<P>;
    props: P;
}

export interface OpenModalOptions {
    className?: string;
    variant?: ModalVariant;
}

export interface ModalContextValue {
    modalRef: RefObject<HTMLDialogElement | null>;
    content: ModalPayload | null;
    className?: string;
    variant: ModalVariant;
    openModal: (content: ModalPayload, options?: OpenModalOptions) => void;
    closeModal: () => void;
}
