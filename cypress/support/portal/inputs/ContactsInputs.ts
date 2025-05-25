import { selectors } from '../selectors/ContactsSelectors';

export let enterText = (input: string) => {
    cy.get(selectors.contacts.searchInputField, { timeout: 10000 })
        .clear()
        .type(input)
};

export let enterContactName = (input: string) => {
    cy.get(selectors.contacts.contactName, { timeout: 10000 })
        .clear().type(input, { delay: 1 })
};

export let enterContactEmail = (input: string) => {
    cy.get(selectors.contacts.email, { timeout: 10000 })
        .clear().type(input)
};

export let enterContactPhone = (input: string) => {
    cy.get(selectors.contacts.phone, { timeout: 10000 })
        .clear().type(input)
};

export let enterCapricornMember = (input: string) => {
    cy.get(selectors.contacts.capricornMember, { timeout: 10000 })
        .clear().type(input)
};

export let enterPaymentType = (input: string) => {
    cy.get(selectors.contacts.paymentType, { timeout: 10000 })
        .clear().type(input)
};

export let enterPrimaryPeopleFirstname = (input: string) => {
    cy.get(selectors.contacts.PrimaryPeopleFirstname, { timeout: 10000 })
        .type(input)
};

export let enterEditPrimaryPeopleFirstname = (input: string) => {
    cy.get(selectors.contacts.PrimaryPeopleFirstname, { timeout: 10000 })
        .clear().type(input)
};

export let enterPrimaryPeopleLastname = (input: string) => {
    cy.get(selectors.contacts.PrimaryPeopleLastname, { timeout: 10000 })
        .eq(0).type(input)
};

export let enterEditPrimaryPeopleLastname = (input: string) => {
    cy.get(selectors.contacts.PrimaryPeopleLastname, { timeout: 10000 })
        .clear().eq(0).type(input)
};

export let enterPrimaryPeopleEmail = (input: string) => {
    cy.get(selectors.contacts.PrimaryPeopleEmail, { timeout: 10000 })
        .eq(0).type(input)
};

export let enterEditPrimaryPeopleEmail = (input: string) => {
    cy.get(selectors.contacts.PrimaryPeopleEmail, { timeout: 10000 })
        .clear().eq(0).type(input)
};

export let enterDeliveryAddress = (input: string) => {
    cy.get(selectors.contacts.searchInputField, { timeout: 10000 })
        .eq(0).type(input)
};



export let enterPaymentFilter = () => {
    cy.get(selectors.contacts.paymentFilter, { timeout: 10000 })
        .click()
};
