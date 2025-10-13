type EmailLinkProps = { email: string };

export default function EmailLink({ email }: EmailLinkProps) {
    return (
        <a href={`mailto:${email}`} aria-label={`Написать на ${email}`}>
            {email}
        </a>
    );
}
