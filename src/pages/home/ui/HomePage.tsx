import { AboutCompany } from "@/widgets/about-company";
import { CompanyContacts } from "@/widgets/company-contacts";
import { CompanyReview } from "@/widgets/company-review";
import { HeroCta } from "@/widgets/hero-cta";
import { KitchenMenu } from "@/widgets/kitchen-menu";
import { LeadReservation } from "@/widgets/lead-reservation";

export const HomePage = async () => {
    return (
        <>
            <HeroCta />
            <AboutCompany />
            <KitchenMenu />
            <LeadReservation />
            <CompanyReview />
            <CompanyContacts />
        </>
    );
};
