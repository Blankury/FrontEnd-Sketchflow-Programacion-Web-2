import React from "react";
import { ContactItem } from "./ContactItem";
import { ContactItem2 } from "./ContactItem2";

export const NavContact = ({ twitterLink, facebookLink, email }) => {
    return (
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

            <ContactItem
                link={twitterLink}
                classItem={"bi-twitter"}
            />

            <ContactItem
                link={facebookLink}
                classItem={"bi-facebook"}
            />

            <ContactItem2
                text={email}
                classItem={"bi-mailbox"}
            />
        </div>
    );
};
