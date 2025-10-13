import FieldWrapper from "./FieldWrapper";

export default function GuestsField() {
    const id = "guests";
    return (
        <FieldWrapper id={id} label="Количество человек">
            <input
                id={id}
                name="guests"
                type="number"
                placeholder="Например, 4"
                min={1}
                max={20}
                required
                inputMode="numeric"
                className="input"
                aria-describedby="guests-help"
            />
            <span id="guests-help" className="text-xs opacity-70">
                От 1 до 20 гостей
            </span>
        </FieldWrapper>
    );
}
