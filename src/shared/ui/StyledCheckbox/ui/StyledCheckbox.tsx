import { cn } from "@/shared/lib/cn";

import styles from "./StyledCheckbox.module.css";

type StyledCheckboxProps = {
    id: string;
};

export const StyledCheckbox = ({ id, ...props }: StyledCheckboxProps) => {
    return (
        <input
            id={id}
            type="checkbox"
            className={cn(styles.reset, styles.base, styles.position)}
            {...props}
            required
        />
    );
};
