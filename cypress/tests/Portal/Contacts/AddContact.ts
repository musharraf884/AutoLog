import contacts from '../../../fixtures/contacts.json';
import * as actions from '../../../support/portal/actions/ContactsActions';
import * as inputs from '../../../support/portal/inputs/ContactsInputs';
import * as verify from '../../../support/portal/displayed/Contactsdisplay';
import { faker } from '@faker-js/faker';

beforeEach(() =>
    cy.login()
);
describe("Contact Flow", () => {
    it(`Verify adding a contact with all required fields `, () => {
        let name = "name-" + faker.string.uuid();
        actions.clickContacts();
        actions.clickAddContactButton();
        inputs.enterContactName(name);
        actions.clickAddContact();
        verify.verifySucessMsg(name);

    });

    it(`Adding a contact with only mandatory fields `, () => {
        let name = "name-" + faker.string.uuid()
        let no = "name" + faker.number.int()
        actions.clickContacts();
        actions.clickAddContactButton();
        inputs.enterContactName(name);
        inputs.enterContactEmail("test@test.com");
        inputs.enterContactPhone("1234567890");
        actions.clickCheckBox();
        inputs.enterCapricornMember(no);
        inputs.enterPaymentType('cash');
        actions.clickCashOption();
        actions.clickPrimaryPeopleTab();
        actions.clickAddRow();
        inputs.enterPrimaryPeopleFirstname("first");
        inputs.enterPrimaryPeopleLastname('last');
        inputs.enterPrimaryPeopleEmail('test@test.com')
        actions.clickIncludeEmail();
        actions.clickAddressTab();
        inputs.enterDeliveryAddress('Auckland');
        actions.clickDeliveryAddressOption1();
        actions.clickSameAsPostalCheckBox();
        actions.clickAddContact();
        verify.verifySucessMsg(name);

    });

    it(`Verify Invalid Contact Name - Empty `, () => {
        actions.clickContacts();
        actions.clickAddContactButton();
        actions.clickAddContact();
        verify.verifyContactNameValidation();

    });

    it(`Verify Invalid Contact Name - Exceeds Maximum Length `, () => {
        actions.clickContacts();
        actions.clickAddContactButton();
        inputs.enterContactName('A'.repeat(300));
        actions.clickAddContact();
        verify.verifyContactNameMaxValidation();
    });

    it(`Verify Invalid Contact Email `, () => {
        actions.clickContacts();
        actions.clickAddContactButton();
        inputs.enterContactEmail('test.test.co');
        actions.clickAddContact();
        verify.verifyEmailValidation();
    });

    contacts.invalid_phoneno.forEach((contacts) => {
        it(`Verify Invalid Phone no - ${contacts}`, () => {
            actions.clickContacts();
            actions.clickAddContactButton();
            inputs.enterContactPhone(contacts);
            actions.clickAddContact();
            verify.verifyPhoneValidation();
        });
    });

    it(`Verify Capricorn Member ID `, () => {
        actions.clickContacts();
        actions.clickAddContactButton();
        actions.clickCheckBox();
        inputs.enterCapricornMember('1-1-1');
        actions.clickAddContact();
        verify.verifyCapriconMemberIDValidation();
    });

    it(`Verify No Information Provided`, () => {
        actions.clickContacts();
        actions.clickAddContactButton();
        inputs.enterContactName('12345!!!');
        inputs.enterContactEmail("test@test.com");
        actions.clickPrimaryPeopleTab();
        actions.clickAddRow();
        actions.clickAddContact();
        verify.verifyNoInfoMsg();
    })

    it(`Verify Unique Contact Name `, () => {
        actions.clickContacts();
        actions.clickAddContactButton();
        inputs.enterContactName("Tony Stark");
        actions.clickAddContact();
        verify.verifyContactNameMsg('Tony Stark');

    });

    it(`Verify Unique Capricorn Member ID `, () => {
        actions.clickContacts();
        actions.clickAddContactButton();
        inputs.enterContactName('test');
        actions.clickCheckBox();
        inputs.enterCapricornMember('123');
        actions.clickAddContact();
        verify.verifyCapriconMemberIDMsg();

    });


    it(`Verify Add Row for Primary Person - before email `, () => {
        actions.clickContacts();
        actions.clickAddContactButton();
        actions.clickPrimaryPeopleTab();
        actions.clickAddRow();
        verify.verifyPrimaryPersonMsg();

    });
});
