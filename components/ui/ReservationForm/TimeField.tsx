import FieldWrapper from "./FieldWrapper";

export default function TimeField() {
    const id = "time";
    return (
        <FieldWrapper id={id} label="Время">
            <input
                id={id}
                name="time"
                type="time"
                placeholder="Время"
                required
                className="input"
            />
        </FieldWrapper>
    );
}
