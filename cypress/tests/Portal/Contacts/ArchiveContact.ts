import * as actions from '../../../support/portal/actions/ContactsActions';
import * as inputs from '../../../support/portal/inputs/ContactsInputs';
import * as verify from '../../../support/portal/displayed/Contactsdisplay';

beforeEach(() =>
    cy.login()
);

describe("Contact Flow", () => {
    it(`Verify Archive Contact Function`, () => {
        actions.clickContacts();
        inputs.enterText('name');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        actions.clickArchiveButton();
        actions.clickDeleteContactButton();
    });

    it(`Verify Archive Confirmation Dialog`, () => {
        actions.clickContacts();
        inputs.enterText('name');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        actions.clickArchiveButton();
        verify.VerifyDeleteContactButton();
        verify.VerifyCancelButton();
    });

    it(`Verify Cacelling of Dialog`, () => {
        actions.clickContacts();
        inputs.enterText('name');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        actions.clickArchiveButton();
        actions.clickCancelButton();
    });
});
