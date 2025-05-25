import contacts from '../../../fixtures/contacts.json';
import * as actions from '../../../support/portal/actions/ContactsActions';
import * as inputs from '../../../support/portal/inputs/ContactsInputs';
import * as verify from '../../../support/portal/displayed/Contactsdisplay';
beforeEach(() =>
    cy.login()
);
describe("Contact Flow", () => {
    it(`Verify Filter: Only show Capricorn members`, () => {
        actions.clickContacts();
        actions.clickOnlyCapriconMemberCheckbox();
        verify.VerifyFilterLabel();
    });

    it(`Verify Filter: Only show On Hold members`, () => {
        actions.clickContacts();
        actions.clickOnlyOnHoldCheckbox();
        verify.VerifyFilterLabel();
    });


    it(`Verify Filter: Name`, () => {
        actions.clickContacts();
        actions.clickNameFilterOption();
       
    });

    it(`Verify Filter: Payment Type`, () => {
        actions.clickContacts();
        inputs.enterPaymentFilter();
        actions.clickPaymentFilterOption();
        verify.VerifyPaymentTypeFilter();
    });

    it(`Verify Filtered Search with Multiple Criteria`, () => {
        actions.clickContacts();
        actions.clickOnlyCapriconMemberCheckbox();
        verify.VerifyFilterLabel();
        actions.clickOnlyOnHoldCheckbox();
        verify.VerifyFilterLabel();
        actions.clickNameFilterOption();
        inputs.enterPaymentFilter();
        actions.clickPaymentFilterOption();
        verify.VerifyPaymentTypeFilter();
    });

    it(`Verify the Removal of Filtered Search`, () => {
        actions.clickContacts();
        actions.clickOnlyCapriconMemberCheckbox();
        verify.VerifyFilterLabel();
        actions.clickOnlyOnHoldCheckbox();
        verify.VerifyFilterLabel();
        actions.clickNameFilterOption();
        inputs.enterPaymentFilter();
        actions.clickPaymentFilterOption();
        verify.VerifyPaymentTypeFilter();
        actions.clickFilterCrossIcon();
        verify.VerifyTotalRows();
    });

});
