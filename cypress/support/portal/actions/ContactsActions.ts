import { selectors } from '../selectors/ContactsSelectors';

export let clickContacts = () => {
    cy.contains(selectors.contacts.contactUrl, { timeout: 100000 })
        .click();
};

export let clickSearchButton = () => {
    cy.get(selectors.contacts.search, { timeout: 10000 })
        .click();
};

export let clickCrossIcon = () => {
    cy.get(selectors.contacts.close, { timeout: 10000 })
        .eq(3)
        .click();
};

export let clickAddContactButton = () => {
    cy.get(selectors.contacts.addContact, { timeout: 10000 })
        .click();
};

export let clickCheckBox = () => {
    //click is your contact a business?
    cy.get(selectors.contacts.isBusinessContactCheckbox, { timeout: 10000 }).eq(0)
        .click();
    //click is your contact a capricorn member?
    cy.get(selectors.contacts.isCapricornMemberCheckbox, { timeout: 10000 }).eq(1)
        .click();
};

export let clickCashOption = () => {
    cy.get(selectors.contacts.cash, { timeout: 10000 })
        .click();
};

export let clickAccountOption = () => {
    cy.get(selectors.contacts.account, { timeout: 10000 })
        .click();
};

export let clickPrimaryPeopleTab = () => {
    cy.get(selectors.contacts.primaryPeopleTab, { timeout: 10000 })
        .click();
};

export let clickAddRow = () => {
    cy.get(selectors.contacts.addrow, { timeout: 10000 })
        .click();
};

export let clickIncludeEmail = () => {
    cy.get(selectors.contacts.inculdeEmail, { timeout: 10000 }).eq(0)
        .click();
};

export let clickAddressTab = () => {
    cy.get(selectors.contacts.addressTab, { timeout: 10000 })
        .click();
};

export let clickDeliveryAddressOption1 = () => {
    cy.wait(5000);
    cy.get(selectors.contacts.deliveryAddressOption1, { timeout: 10000 })
        .click();
};

export let clickSameAsPostalCheckBox = () => {
    cy.get(selectors.contacts.sameAsDeliveryAddressCheckbox, { timeout: 10000 }).eq(1)
        .click();
}

export let clickAddContact = () => {
    cy.get(selectors.contacts.addContactButton, { timeout: 10000 })
        .click();
}

export let clickActionRowButton = () => {
    cy.get(selectors.contacts.actionForwardButton, { timeout: 10000 })
        .eq(0)
        .click({ multiple: true });
}

export let clickEditButton = () => {
    cy.get(selectors.contacts.edit, { timeout: 10000 })
        .click();
}

export let clickSaveButton = () => {
    cy.get(selectors.contacts.addContactButton, { timeout: 10000 })
        .click();
}

export let clearContactNameField = () => {
    cy.get(selectors.contacts.contactName, { timeout: 10000 })
        .clear()
}

export let clearContactEmailField = () => {
    cy.get(selectors.contacts.email, { timeout: 10000 })
        .clear()
}

export let clickArchiveButton = () => {
    cy.get(selectors.contacts.archive, { timeout: 10000 })
        .click();
}

export let clickDeleteContactButton = () => {
    cy.get(selectors.contacts.deleteContact, { timeout: 15000 })
        .click();
}

export let clickCancelButton = () => {
    cy.contains('button', selectors.contacts.cancel, { timeout: 15000 })
        .click();
}

export let clickOnlyCapriconMemberCheckbox = () => {
    cy.get(selectors.contacts.onlyShowCapricornCheckbox, { timeout: 15000 }).eq(0)
        .click();
}

export let clickOnlyOnHoldCheckbox = () => {
    cy.get(selectors.contacts.onlyShowOnHoldCheckbox, { timeout: 15000 }).eq(1)
        .click();
}

export let clickNameFilterOption = () => {
    // cy.get(selectors.contacts.NameFilterOption, { timeout: 15000 })
    //     .click();
    cy.get(selectors.contacts.NameFilter, { timeout: 10000 })
    .click()
}

export let clickPaymentFilterOption = () => {
    cy.get(selectors.contacts.paymentFilterOption, { timeout: 15000 })
        .click();
}

export let clickFilterCrossIcon = () => {
    cy.get(selectors.contacts.close, { timeout: 10000 })
        .eq(4)
        .click();
    cy.get(selectors.contacts.close, { timeout: 10000 })
        .eq(4)
        .click();
    cy.get(selectors.contacts.close, { timeout: 10000 })
        .eq(4)
        .click();
   
};