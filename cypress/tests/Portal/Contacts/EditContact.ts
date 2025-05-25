import contacts from '../../../fixtures/contacts.json';
import * as actions from '../../../support/portal/actions/ContactsActions';
import * as inputs from '../../../support/portal/inputs/ContactsInputs';
import * as verify from '../../../support/portal/displayed/Contactsdisplay';
import { faker } from '@faker-js/faker';

beforeEach(() =>
    cy.login()
);
describe("Contact Flow", () => {
    it(`Verify Edit a contact with all required fields `, () => {
        let name = "name-" + faker.string.uuid();
        actions.clickContacts();
        inputs.enterText('name');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        actions.clickEditButton();
        inputs.enterContactName(name);
        actions.clickSaveButton();
        verify.verifyContactName(name);

    });

    it(`Edit a contact with only mandatory fields `, () => {
        let name = "name-" + faker.string.uuid()
        let no = "name" + faker.number.int()
        let email = faker.string.alpha() + "@test.com"
        let firstname = faker.person.firstName('male')
        let lastname = faker.person.lastName('male')

        actions.clickContacts();
        inputs.enterText('@test.com');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        actions.clickEditButton();
        inputs.enterContactName(name);
        inputs.enterContactEmail(email);
        inputs.enterContactPhone("1234567890");
        inputs.enterCapricornMember(no);
        inputs.enterPaymentType('account');
        actions.clickAccountOption();
        actions.clickPrimaryPeopleTab();
        inputs.enterEditPrimaryPeopleFirstname(firstname);
        inputs.enterEditPrimaryPeopleLastname(lastname);
        inputs.enterEditPrimaryPeopleEmail(email)
        actions.clickIncludeEmail();
        actions.clickAddressTab();
        inputs.enterDeliveryAddress('Auckland');
        actions.clickDeliveryAddressOption1();
        actions.clickSaveButton();
        verify.verifyContactName(name);
        verify.verifyContactEmail(email);
        verify.verifyContactPhone("1234567890");
        verify.verifyContactCapriconID(no);
        verify.verifyContactPaymentType("Account");
        verify.verifyPrimaryFirstName(firstname);
        verify.verifyPrimaryLastName(lastname);
        verify.verifyContactEmail(email);

    });

    it(`Verify Invalid Contact Name - Empty `, () => {
        actions.clickContacts();
        inputs.enterText('name');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        actions.clickEditButton();
        actions.clearContactNameField();
        actions.clickSaveButton();
        verify.verifyContactNameValidation();

    });

    it(`Verify Invalid Contact Name - Exceeds Maximum Length `, () => {
        actions.clickContacts();
        inputs.enterText('name');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        actions.clickEditButton();
        inputs.enterContactName('A'.repeat(300));
        actions.clickSaveButton();
        verify.verifyContactNameMaxValidation();
    });

    it(`Verify Invalid Contact Email `, () => {
        actions.clickContacts();
        inputs.enterText('name');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        actions.clickEditButton();
        inputs.enterContactEmail('test.test.co');
        actions.clickSaveButton();
        verify.verifyEmailValidation();
    });

    contacts.invalid_phoneno.forEach((contacts) => {
        it(`Verify Invalid Phone no - ${contacts}`, () => {
            actions.clickContacts();
            inputs.enterText('name');
            actions.clickSearchButton();
            actions.clickActionRowButton();
            actions.clickEditButton();
            inputs.enterContactPhone(contacts);
            actions.clickSaveButton();
            verify.verifyPhoneValidation();
        });
    });

    it(`Verify Capricorn Member ID `, () => {
        actions.clickContacts();
        inputs.enterText('@test.com');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        actions.clickEditButton();
        inputs.enterCapricornMember('1-1-1');
        actions.clickSaveButton();
        verify.verifyCapriconMemberIDValidation();
    });

    it(`Verify No Information Provided`, () => {
        let name = "name-" + faker.string.uuid();
        actions.clickContacts();
        inputs.enterText('@test.com');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        actions.clickEditButton();
        inputs.enterContactName(name);
        inputs.enterContactEmail("test@test.com");
        actions.clickPrimaryPeopleTab();
        actions.clickCrossIcon();
        actions.clickAddRow();
        actions.clickSaveButton();
        verify.verifyNoInfoMsg();
    })

    it(`Verify Unique Contact Name `, () => {
        actions.clickContacts();
        inputs.enterText('name');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        actions.clickEditButton();
        inputs.enterContactName("Tony Stark");
        actions.clickSaveButton();
        verify.verifyEditContactNameMsg('Tony Stark');
    });

    it(`Verify Unique Capricorn Member ID `, () => {
        actions.clickContacts();
        inputs.enterText('name');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        actions.clickEditButton();
        inputs.enterContactName('test');
        inputs.enterCapricornMember('123');
        actions.clickSaveButton();
        verify.verifyEditCapriconMemberIDMsg();
    });


    it(`Verify Add Row for Primary Person - before email `, () => {
        actions.clickContacts();
        inputs.enterText('@test.com');
        actions.clickSearchButton();
        actions.clickActionRowButton();
        actions.clickEditButton();
        actions.clearContactEmailField()
        actions.clickPrimaryPeopleTab();
        actions.clickAddRow();
        actions.clickSaveButton();
        verify.verifyEditPrimaryPersonMsg();
    });
});
