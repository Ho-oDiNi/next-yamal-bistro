import FieldWrapper from "./FieldWrapper";

export default function NameField() {
    const id = "name";
    return (
        <FieldWrapper id={id} label="Ваше имя">
            <input
                id={id}
                name="name"
                type="text"
                placeholder="Иван"
                required
                autoComplete="name"
                className="input"
            />
        </FieldWrapper>
    );
}
