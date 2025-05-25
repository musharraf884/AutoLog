import * as actions from '../../../support/portal/actions/ContactsActions';
import * as inputs from '../../../support/portal/inputs/ContactsInputs';
import * as verify from '../../../support/portal/displayed/Contactsdisplay';

beforeEach(() =>
    cy.login()
);

describe("Contact Flow", () => {
    it(`Verify Put Contact On Hold Function`, () => {
        actions.clickContacts();
        inputs.enterText('name');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        verify.VerifyOnholdLabel();
    });

    it(`Verify Remove Hold button appears`, () => {
        actions.clickContacts();
        inputs.enterText('name');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        verify.VerifyRemoveholdButton();
    
    });
});
