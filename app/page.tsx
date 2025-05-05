import { HomePage } from "@/components/structure/HomePage";
import { SeoPage } from "@/components/structure/SeoPage";
// import { KitchenMenuPage } from "@/components/structure/KitchenMenuPage";
import { ReservationPage } from "@/components/structure/ReservationPage";
import { FeedbackPage } from "@/components/structure/FeedbackPage";
import { ContactPage } from "@/components/structure/ContactPage";

export default function Home() {
    return (
        <>
            <HomePage />
            <SeoPage />
            {/* <KitchenMenuPage /> */}
            <ReservationPage />
            <FeedbackPage />
            <ContactPage />
        </>
    );
}
