import { BUSINESS_HOURS, CONTACT_PHONES, SOCIAL_LINKS } from "../config";
import { BusinessHoursList } from "./BusinessHoursList";
import { ContactsContainer } from "./ContactsContainer";
import { ContactsInfoColumn } from "./ContactsInfoColumn";
import { InfoGroup } from "./InfoGroup";
import { PhoneList } from "./PhoneList";
import { PostalAddress } from "./PostalAddress";
import { SocialLinkIcons } from "./SocialLinkIcons";
import { YandexMapEmbed } from "./YandexMapEmbed";

export const CompanyContacts = () => {
    return (
        <ContactsContainer>
            <h2 className="text-h2">Наши контакты</h2>
            <div className="xs:gap-8 flex flex-col gap-2 md:flex-row">
                <div className="xs:flex-row xs:gap-8 flex w-full flex-col gap-2 md:w-2/3">
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
                            <PostalAddress />
                        </InfoGroup>

                        <InfoGroup title="Почта">
                            <a
                                href="mailto:yamdstone@mail.ru"
                                className="hover:opacity-70"
                            >
                                yamdstone@mail.ru
                            </a>
                        </InfoGroup>

                        <InfoGroup
                            title="Социальные сети"
                            titleClassName="hidden md:block"
                        >
                            <SocialLinkIcons links={SOCIAL_LINKS} />
                        </InfoGroup>
                    </ContactsInfoColumn>
                </div>

                <YandexMapEmbed />
            </div>
        </ContactsContainer>
    );
};
