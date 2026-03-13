import { HEADER_OFFSET } from "../config";

export const scrollToTarget = async (targetId?: string) => {
    if (!targetId) {
        return;
    }

    const element = document.getElementById(targetId);

    if (!element) {
        return;
    }

    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: elementTop - HEADER_OFFSET,
        behavior: "smooth",
    });

    await new Promise((resolve) => setTimeout(resolve, 300));
};
