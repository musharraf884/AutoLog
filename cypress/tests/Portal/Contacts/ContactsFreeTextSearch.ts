import contacts from '../../../fixtures/contacts.json';
import * as actions from '../../../support/portal/actions/ContactsActions';
import * as inputs from '../../../support/portal/inputs/ContactsInputs';
import * as verify from '../../../support/portal/displayed/Contactsdisplay';
beforeEach(() =>
    cy.login()
);
describe("Contact Flow", () => {
    it(`Verify Basic Search Functionality `, () => {
        actions.clickContacts();
        inputs.enterText('tony stark');
        actions.clickSearchButton();
        verify.verifyNameText();
    });

    it(`Verify Case Sensitivity `, () => {
        //lowercase
        actions.clickContacts();
        inputs.enterText('tony stark');
        actions.clickSearchButton();
        verify.verifyNameText();
        //uppercase
        inputs.enterText('TONY STARK');
        actions.clickSearchButton();
        verify.verifyNameText();
    });

    contacts['wildcard_characters'].forEach((contacts) => {
        it(`Verify Wildcard Search - ${contacts}`, () => {
            actions.clickContacts();
            inputs.enterText(contacts);
            actions.clickSearchButton();
            verify.verifyFirstRowVisibile();
        });
    });

    it(`Verify Empty  Search `, () => {
        actions.clickContacts();
        actions.clickSearchButton();
        verify.verifyFirstRowVisibile();
    });

    it(`Verify Non-matching Search `, () => {
        actions.clickContacts();
        inputs.enterText('QWERTY');
        actions.clickSearchButton();
        verify.verifyNoContacts();
    });

    it(`Verify Special Characters Search `, () => {
        actions.clickContacts();
        inputs.enterText('~!@#$%^&*()_+');
        actions.clickSearchButton();
        verify.verifyFirstRowVisibile();
    });

    it(`Verify Alphanumerical Search `, () => {
        actions.clickContacts();
        inputs.enterText('asdf1234');
        actions.clickSearchButton();
        verify.verifyNoContacts();
    });
    contacts.numeric.forEach((contacts) => {
        it(`Verify numeric Search - ${contacts}`, () => {
            actions.clickContacts();
            inputs.enterText(contacts);
            actions.clickSearchButton();
            verify.verifyFirstRowVisibile();
        });
    });

    it(`Verify Alphabetical Search `, () => {
        actions.clickContacts();
        inputs.enterText('asdf');
        actions.clickSearchButton();
        verify.verifyFirstRowVisibile();
    });

    it(`Verify Clear Search `, () => {
        actions.clickContacts();
        inputs.enterText('QWERTY');
        actions.clickSearchButton();
        actions.clickCrossIcon();
        verify.verifyFirstRowVisibile();
    });

});
