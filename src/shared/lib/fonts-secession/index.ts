import localFont from "next/font/local";

export const FontSecession = localFont({
    src: [
        {
            path: "./assets/Secession-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./assets/Secession-Normal.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./assets/Secession-Regular.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./assets/Secession-Demibold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./assets/Secession-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-secession",
    display: "swap",
});
