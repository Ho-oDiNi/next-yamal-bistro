export default function ConsentField() {
    const id = "consent";
    return (
        <label
            htmlFor={id}
            className="flex max-w-[20ch] items-start gap-3 text-sm"
        >
            <input
                id={id}
                name="consent"
                type="checkbox"
                className="mt-1 h-5 w-5 shrink-0 border-neutral-500"
                required
                aria-required="true"
            />
            <span>
                Заполняя форму, я даю согласие на обработку персональных данных
            </span>
        </label>
    );
}
