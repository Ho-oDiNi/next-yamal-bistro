import localFont from "next/font/local";

export const FontSecession = localFont({
    src: [
        {
            path: "./assets/Secession-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./assets/Secession-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./assets/Secession-Normal.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./assets/Secession-Demibold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./assets/Secession-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-secession",
    display: "swap",
});
