import FieldWrapper from "./FieldWrapper";

export default function DateField({ minDate }: { minDate: string }) {
    const id = "date";
    return (
        <FieldWrapper id={id} label="Дата">
            <input
                id={id}
                name="date"
                type="date"
                placeholder="Дата"
                min={minDate}
                required
                className="input"
            />
        </FieldWrapper>
    );
}
