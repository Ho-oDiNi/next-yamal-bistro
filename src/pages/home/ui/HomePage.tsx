import { AboutCompany } from "@/widgets/about-company";
import { CompanyContacts } from "@/widgets/company-contacts/ui/CompanyContacts";
import { CompanyReview } from "@/widgets/company-review";
import { HeroCta } from "@/widgets/hero-cta/ui/HeroCta";
import { LeadReservation } from "@/widgets/lead-reservation";

export const HomePage = async () => {
    return (
        <>
            <HeroCta />
            <AboutCompany />
            <LeadReservation />
            <CompanyReview />
            <CompanyContacts />
        </>
    );
};
