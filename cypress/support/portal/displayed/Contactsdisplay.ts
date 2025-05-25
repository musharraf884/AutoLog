import { selectors } from '../selectors/ContactsSelectors';

export let verifyNameText = () => {
    cy.get(selectors.contacts.nameRow, { timeout: 10000 })
        .last()
        .invoke("text")
        .should("eq", "Tony Stark");
};

export let verifyFirstRowVisibile = () => {
    cy.get(selectors.contacts.nameRow, { timeout: 10000 })
        .first()
        .should("be.visible");
};

export let verifyNoContacts = () => {
    cy.get(selectors.contacts.noContact, { timeout: 10000 })
        .invoke("text")
        .should("eq", "No Contacts");
};

export let verifyContactNameValidation = () => {
    cy.contains(selectors.contacts.contactNameValidation, { timeout: 10000 })
        .invoke("text")
        .should("eq", "Contact Name is a required field");
};


export let verifyContactNameMaxValidation = () => {
    cy.contains(selectors.contacts.ContactNameMaxValidation, { timeout: 10000 })
        .invoke("text")
        .should("eq", "Contact Name must be at most 255 characters");
};

export let verifyEmailValidation = () => {
    cy.contains(selectors.contacts.contactEmailValidation, { timeout: 10000 })
        .invoke("text")
        .should("eq", "Must be a valid email.");
};

export let verifyPhoneValidation = () => {
    cy.contains(selectors.contacts.contactPhoneValidation, { timeout: 10000 })
        .invoke("text")
        .should("eq", "Invalid phone number format.");
};

export let verifyCapriconMemberIDValidation = () => {
    cy.contains(selectors.contacts.capriconMemberIDValidation, { timeout: 10000 })
        .invoke("text")
        .should("eq", "Capricorn Member ID must contain only alphanumeric characters.");
};


export let verifySucessMsg = (input: string) => {
    cy.wait(2000);
    cy.get(selectors.contacts.msg, { timeout: 10000 })
        .should('be.visible')
        .invoke("text")
        .should("eq", input + " was added successfully.");
};

export let verifyContactNameMsg = (input: string) => {
    cy.wait(2000);
    cy.get(selectors.contacts.msg, { timeout: 10000 })
        .should('be.visible')
        .invoke("text")
        .should("eq", input + " was not added.");
};

export let verifyEditContactNameMsg = (input: string) => {
    cy.wait(2000);
    cy.get(selectors.contacts.msg, { timeout: 10000 })
        .should('be.visible')
        .invoke("text")
        .should("eq", input + " was not edited. Contact name or account number already exists.");
};


export let verifyNoInfoMsg = () => {
    cy.wait(2000);
    cy.get(selectors.contacts.msg, { timeout: 10000 })
        .should('be.visible')
        .invoke("text")
        .should("eq", "You must provide at least one of the following: First Name, Last Name, or Email for each person.");
};


export let verifyCapriconMemberIDMsg = () => {
    cy.wait(2000);
    cy.get(selectors.contacts.msg, { timeout: 10000 })
        .should('be.visible')
        .invoke("text")
        .should("eq", "Contact name or Capricorn member ID already exists.");
};

export let verifyEditCapriconMemberIDMsg = () => {
    cy.wait(2000);
    cy.get(selectors.contacts.msg, { timeout: 10000 })
        .should('be.visible')
        .invoke("text")
        .should("eq", "test was not edited. Contact name or account number already exists.");
};

export let verifyPrimaryPersonMsg = () => {
    cy.wait(2000);
    cy.get(selectors.contacts.msg, { timeout: 10000 })
        .should('be.visible')
        .invoke("text")
        .should("eq", "Contact must have an email before adding primary people.");
};

export let verifyEditPrimaryPersonMsg = () => {
    cy.wait(2000);
    cy.get(selectors.contacts.msg, { timeout: 10000 })
        .should('be.visible')
        .invoke("text").then(text=>{
            cy.log(text)
            cy.wrap(text).should('include', "Contact must have an email before adding primary people.");
        })
        
};

export let verifyContactName = (input: string) => {

    cy.get(selectors.contacts.contactValues, { timeout: 10000 })
        .eq(1)
        .invoke("text")
        .should("eq", input);
};

export let verifyContactEmail = (input: string) => {

    cy.get(selectors.contacts.contactValues, { timeout: 10000 })
        .eq(2)
        .invoke("text")
        .should("eq", input);
};

export let verifyContactPhone = (input: string) => {

    cy.get(selectors.contacts.contactValues, { timeout: 10000 })
        .eq(3)
        .invoke("text")
        .should("eq", input);
};

export let verifyContactCapriconID = (input: string) => {

    cy.get(selectors.contacts.contactValues, { timeout: 10000 })
        .eq(6)
        .invoke("text")
        .should("eq", input);
};

export let verifyContactPaymentType = (input: string) => {

    cy.get(selectors.contacts.contactValues, { timeout: 10000 })
        .eq(8)
        .invoke("text")
        .should("eq", input);
};


export let verifyPrimaryFirstName = (input: string) => {

    cy.get(selectors.contacts.editFirstname, { timeout: 10000 })
        .eq(1)
        .invoke("text")
        .should("eq", input);
};

export let verifyPrimaryLastName = (input: string) => {

    cy.get(selectors.contacts.editLastname, { timeout: 10000 })
        .eq(1)
        .invoke("text")
        .should("eq", input);
};

export let VerifyDeleteContactButton = () => {
    cy.get(selectors.contacts.deleteContact, { timeout: 15000 })
        .should('be.visible');
}

export let VerifyCancelButton = () => {
    cy.contains('button', selectors.contacts.cancel, { timeout: 15000 })
        .should('be.visible');
}

export let VerifyOnholdLabel = () => {
    cy.get(selectors.contacts.onholdLabel, { timeout: 15000 })
        .eq(0).should('be.visible');
}

export let VerifyRemoveholdButton = () => {
    cy.get(selectors.contacts.removeOnhold, { timeout: 15000 })
       .click({force:true});
}

export let VerifyPaginationControls = () => {
    cy.get(selectors.contacts.previousControl, { timeout: 10000 })
        .should('be.visible').should('be.visible');

    cy.get(selectors.contacts.nextControl, { timeout: 10000 })
        .should('be.visible').should('be.visible');

    cy.contains(selectors.contacts.pageno, { timeout: 10000 })
        .should('be.visible').should('be.visible');

}

export let VerifyTotalRows = () => {
    cy.get(selectors.contacts.totalPagination).within(() => {
        cy.get(selectors.contacts.totalRows).should('have.length', '10');
    });
}

export let VerifyChangeLimit = () => {
    cy.get(selectors.contacts.nextControl, { timeout: 10000 })
        .should('be.visible').should('be.visible').click();
    cy.get(selectors.contacts.rowsCount).should('contain', '11–20');

    cy.get(selectors.contacts.previousControl, { timeout: 10000 })
        .should('be.visible').should('be.visible').click();
    cy.get(selectors.contacts.rowsCount).should('contain', '1–10');
}

export let VerifyPreNextRowsNavigation = () => {
    cy.get(selectors.contacts.nextControl, { timeout: 10000 })
        .should('be.visible').should('be.visible').click();
    cy.get(selectors.contacts.totalPagination).within(() => {
        cy.get(selectors.contacts.totalRows).should('have.length', '10');
    });

    cy.get(selectors.contacts.previousControl, { timeout: 10000 })
        .should('be.visible').should('be.visible').click();
    cy.get(selectors.contacts.totalPagination).within(() => {
        cy.get(selectors.contacts.totalRows).should('have.length', '10');
    });
}

export let VerifyStatusDisplay = () => {
    cy.get(selectors.contacts.rowsCount).should('contain', '1–10');
}

export let VerifyFilterLabel = () => {
    cy.get(selectors.contacts.filterLabel).should('be.visible');
}

export let VerifyPaymentTypeFilter = () => {
    cy.get('.MuiChip-label.MuiChip-labelMedium.css-9iedg7').should('contain', 'Capricorn');
}
