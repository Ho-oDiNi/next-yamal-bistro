import Image from "next/image";

import { StyledLink } from "@/shared/ui/StyledLink";

import notFoundImage from "@images/404.png";

export const NotFoundPage = () => {
    return (
        <section className="m-auto max-w-4xl px-4 py-12 md:py-6 xl:py-16">
            <div className="flex-between container m-auto w-full flex-col-reverse gap-12 md:flex-row">
                <div className="flex flex-col gap-8 md:gap-12">
                    <hgroup className="space-y-4">
                        <h1 className="text-h1">Страница не найдена</h1>
                        <p className="text-accent">Но есть много других</p>
                    </hgroup>
                    <StyledLink href="/" variant="primary" size="lg">
                        На главную
                    </StyledLink>
                </div>
                <Image
                    src={notFoundImage}
                    alt="Ошибка 404"
                    className="h-auto w-100 rounded-2xl"
                />
            </div>
        </section>
    );
};
