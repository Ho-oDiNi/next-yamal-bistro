import BusinessHoursList from "./BusinessHoursList";
import ContactsInfoColumn from "./ContactsInfoColumn";
import ContactsSectionLayout from "./ContactsSectionLayout";
import ContactsSectionTitle from "./ContactsSectionTitle";
import EmailLink from "./EmailLink";
import InfoGroup from "./InfoGroup";
import PhoneList from "./PhoneList";
import PostalAddress from "./PostalAddress";
import SocialLinkIcons from "./SocialLinkIcons";
import YandexMapEmbed from "./YandexMapEmbed";
import {
    BUSINESS_HOURS,
    CONTACT_PHONES,
    ORGANIZATION_ADDRESS,
    CONTACT_EMAIL,
    SOCIAL_LINKS,
    CONTACT_MAP,
} from "./contacts.data";

export default function ContactSection() {
    return (
        <ContactsSectionLayout>
            <ContactsSectionTitle text="Наши контакты" />
            <div className="flex justify-between">
                <ContactsInfoColumn>
                    <InfoGroup title="Часы работы">
                        <BusinessHoursList hours={BUSINESS_HOURS} />
                    </InfoGroup>

                    <InfoGroup title="Телефон">
                        <PhoneList numbers={CONTACT_PHONES} />
                    </InfoGroup>
                </ContactsInfoColumn>

                <ContactsInfoColumn>
                    <InfoGroup title="Адрес">
                        <PostalAddress {...ORGANIZATION_ADDRESS} />
                    </InfoGroup>

                    <InfoGroup title="Почта">
                        <EmailLink email={CONTACT_EMAIL} />
                    </InfoGroup>

                    <InfoGroup title="Социальные сети">
                        <SocialLinkIcons links={SOCIAL_LINKS} />
                    </InfoGroup>
                </ContactsInfoColumn>

                <YandexMapEmbed
                    embedSrc={CONTACT_MAP.yandexEmbedSrc}
                    title={CONTACT_MAP.title}
                />
            </div>
        </ContactsSectionLayout>
    );
}
