import localFont from "next/font/local";

export const Secession = localFont({
    src: [
        {
            path: "../../public/fonts/Secession-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/Secession-Demibold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/Secession-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Secession-Light.ttf",
            weight: "300",
            style: "normal",
        },
    ],
    variable: "--font-secession",
    display: "swap",
});
