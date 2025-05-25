import * as actions from '../../../support/portal/actions/ContactsActions';
import * as inputs from '../../../support/portal/inputs/ContactsInputs';
import * as verify from '../../../support/portal/displayed/Contactsdisplay';

beforeEach(() =>
    cy.login()
);
describe("Contact Flow", () => {
    it(`Verify View Contact Functionality `, () => {
        actions.clickContacts();
        inputs.enterText('Tony Stark');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        verify.verifyContactName('Tony Stark');
    });

    it(`Verify View Contact Details`, () => {
        actions.clickContacts();
        inputs.enterText('Tony Stark');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        verify.verifyContactName('Tony Stark');
        verify.verifyContactEmail('cian.blake11@gmail.com');
    });

});
