import FieldWrapper from "./FieldWrapper";

export default function PhoneField() {
    const id = "phone";
    return (
        <FieldWrapper id={id} label="Ваш телефон">
            <input
                id={id}
                name="phone"
                type="tel"
                placeholder="+7 900 000-00-00"
                required
                autoComplete="tel"
                inputMode="tel"
                pattern="^\+?\d[\d\s\-()]{9,}$"
                className="input"
            />
        </FieldWrapper>
    );
}
