import * as actions from '../../../support/portal/actions/ContactsActions';
import * as inputs from '../../../support/portal/inputs/ContactsInputs';
import * as verify from '../../../support/portal/displayed/Contactsdisplay';

beforeEach(() =>
    cy.login()
);
describe("Contact Flow", () => {
    it(`Verify Pagination Controls Visibility`, () => {
        actions.clickContacts();
        verify.VerifyPaginationControls();
    });

    it(`Verify Default Pagination Settings`, () => {
        actions.clickContacts();
        verify.VerifyTotalRows();
    });

    it(`Verify Pagination Navigation`, () => {
        actions.clickContacts();
        verify.VerifyPreNextRowsNavigation();

    });

    it(`Verify Pagination Limit Change`, () => {
        actions.clickContacts();
        verify.VerifyChangeLimit();
    });

    it(`Verify Pagination Status Display`, () => {
        actions.clickContacts();
        verify.VerifyStatusDisplay();
    });

});
