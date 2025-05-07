import { HomeSection } from "@/components/structure/HomeSection";
import { SeoSection } from "@/components/structure/SeoSection";
import { KitchenMenuSection } from "@/components/structure/KitchenMenuSection";
import { ReservationSection } from "@/components/structure/ReservationSection";
import { FeedbackSection } from "@/components/structure/FeedbackSection";
import { ContactSection } from "@/components/structure/ContactSection";

export default function Home() {
    return (
        <main>
            <HomeSection />
            <SeoSection />
            <KitchenMenuSection />
            <ReservationSection />
            <FeedbackSection />
            <ContactSection />
        </main>
    );
}
