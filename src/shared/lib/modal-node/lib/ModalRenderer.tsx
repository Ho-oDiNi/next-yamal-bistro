"use client";

import { createElement, ReactElement } from "react";

import { useModal } from "./useModal";
import { ModalPayload } from "../model";
import { ModalSurface } from "../ui/ModalSurface";

const renderModalContent = (
    content: ModalPayload | null,
): ReactElement | null => {
    if (!content) {
        return null;
    }
    return createElement(content.component, content.props);
};

export const ModalRenderer = () => {
    const { modalRef, closeModal, className, content, variant } = useModal();

    return (
        <ModalSurface
            ref={modalRef}
            onClose={closeModal}
            className={className}
            variant={variant}
        >
            {renderModalContent(content)}
        </ModalSurface>
    );
};
