export class InvoiceAction {
    createInvoice() {
        cy.get('p[data-test="Dashboard-title"]')
            .should('have.text', 'Dashboard')
        cy.get('button[data-test="Create-button"]').click()
        cy.get('li[data-test="Invoice-menu-item"]').click()
        cy.get('p[data-test="Add Invoice-title"]')
            .should('have.text', 'Add Invoice')
    }
    validateContactField() {
        cy.get('button[data-test="Save & Close-button"]').click()
        cy.get('p[data-test="Contact-helperText"]')
            .should('have.text', 'Contact is required')
    }
    addInvoiceDetails() {
        cy.reload()
        cy.get('input[data-test="contact_id-input"]').click().type('NomanTest')
        cy.contains('NomanTestAccount').should('be.visible').wait(1000)
        cy.contains('NomanTestAccount').type('{downarrow}{enter}')
        cy.get('input[data-test="reference-input"]').should('be.visible').wait(1000)
        cy.get('input[data-test="reference-input"]').type('REF001').should('have.value', 'REF001')
        cy.get('input[data-test="issue_date-date-picker"]').should('be.visible').wait(1000)
        cy.get('input[data-test="issue_date-date-picker"]').invoke('val', '').type(this.getCurrentDate())
        cy.get('input[data-test="due_date-date-picker"]').should('be.visible').wait(1000)
        cy.get('input[data-test="due_date-date-picker"]').invoke('val', '').type(this.getCurrentDate())

    }
    addSalesChannel(){
        cy.get('#mui-component-select-sales_channel').click()
        cy.contains('Walk In').click({force:true})
    }
    addDeliveryMethod(){
        cy.get('#mui-component-select-delivery_method').click()
        cy.contains('Courier').click()
    }
    addDelivertDetails(){
        cy.get('input[data-test="delivery_details-input"]').type('testing').type('{enter}')
    }
    getCurrentDate(): string {
        const currentDate: Date = new Date();
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long' };
        const day: number = currentDate.getDate();
        const monthIndex: number = currentDate.getMonth();
        const year: number = currentDate.getFullYear();
        const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthName: string = months[monthIndex];
        const formattedDate: string = `${day} ${monthName} ${year}`;
        return formattedDate;
    }

    saveCloseButton() {
        cy.get('button[data-test="Save & Close-button"]').click({ force: true })
    }
    approveEmailButton() {
        cy.get('button[data-test="Approve & Email-button"]').click()
    }
    approveAddanotherButton() {
        cy.get('button[data-test="Approve & Email-dropdown-button"]').click()
        cy.get('li[data-test="Approve & Add Another-menu-item"]').click()
    }
    approvePrintButton() {
        cy.get('button[data-test="Approve & Email-dropdown-button"]').click()
        cy.get('li[data-test="Approve & Print-menu-item"]').click()
    }

    getPrice(): Cypress.Chainable<string> {
    return cy.get('input[data-test="unit_price-currency-cell-input"]').invoke('val').then((price) => {
        const priceString = String(price);
        cy.log('Price is: ', priceString);
        return cy.wrap(priceString);
    });
}
    getQuantity(): Cypress.Chainable<string> {
        return cy.get('input[data-test="quantity-currency-cell-input"]').invoke('val').then((quantity) => {
            const quantityString = String(quantity)
            cy.log('Quantity is: ', quantityString);
            return cy.wrap(quantityString)
        })
    }
    getContact(): Cypress.Chainable<string> {
        return cy.get('input[data-test="contact_id-input"]').invoke('val').then((contact) => {
            const contactString = String(contact)
            cy.log('Quantity is: ', contactString);
            return cy.wrap(contactString)
        })
    }
    
    getAmount(): Cypress.Chainable<string> {
        return cy.get('input[data-test="line_amount-currency-cell-input"]').invoke('val').then((amountValue) => {
          const amountString = String(amountValue);
          cy.log('Amount is: ', amountString);
          return cy.wrap(amountString)
        });
    }
    addInvoiceEmptyfields() {
        cy.get('p[data-test="Contact-helperText"]')
            .should('have.text', 'Contact is required')
        cy.get('[data-test="Add Row-button"]').click({ force: true })
        cy.get('[data-id="addShipping"]').click()
    }
    addRowWithInvalidata() {
        cy.get('div[data-test="Add Row-button"]').click({ force: true })
        cy.get('li[data-id="addPartsByTagNumber"]').click()
        cy.get('input[data-test="id-input-cell-input"]').click().type('12302223654')
        cy.get('button[data-test="id-input-cell-submit-button"]').click()
        cy.contains('Invalid input').should('exist')
    }
    verifySuccess() {
        cy.get('[data-test="success-alert"]').should('be.visible')
        
    }
    verifyError() {
        cy.get('[data-test="error-alert"]').should('be.visible')
    }
    deleteInvoice() {
        cy.get('div[data-test="Actions-button"]').click()
        cy.get('li[data-id="delete"]').should('be.visible').click()
        cy.get('.MuiTypography-root.MuiTypography-body1.MuiTypography-noWrap.css-1016a2f')
            .should('have.text', 'Delete Invoice?')
        cy.get('button[data-test="Delete Invoice-button"]').click()
    }
    addRow(option: string) {
        cy.get('div[data-test="Add Row-button"]').should('exist').click()
        cy.get('li[data-id="' + option + '"]').should('be.visible').click()
    }
    setQuantity(index: number, quantity: string) {
        cy.get('div[data-field="quantity"]').eq(0).should('have.text', 'Quantity');
        cy.get('input[data-test="quantity-currency-cell-input"]').eq(index).clear().type(quantity);
    }
    setPrice(index: number, price: string) {
        cy.get('div[data-field="unit_price"]').eq(0).should('have.text', 'Price');
        cy.get('input[data-test="unit_price-currency-cell-input"]').eq(index).clear().type(price);
    }
    setDescription(index: number, description: string) {
        cy.get('div[data-field="description"]').eq(0).should('have.text', 'Description');
        cy.get('input[data-test="description-input-cell"]').eq(index).clear().type(description);
    }
    setAccount(index: number, accountType:string) {
        cy.get('div[data-field="account"]').eq(0).should('have.text', 'Account');
        cy.get('input[data-test="account-dropdown-cell-input"]').eq(index).clear().wait(2000);
        cy.contains(accountType).click()
    }
    setTax(index: number, rate:string) {
        cy.get('div[data-field="tax_type"]').eq(0).should('have.text', 'Tax Rate');
        cy.get('input[data-test="tax_type-dropdown-cell-input"]').eq(index).clear().wait(2000);
        cy.get('input[data-test="tax_type-dropdown-cell-input"]').click().type(rate)
        cy.contains(rate).click()
    }
    compareTax(amount: string, rate: number) {;
        let rowAmount:number = parseFloat(amount)
        const rowTax = rowAmount * rate;
        cy.get('p[data-test="Total GST-label"]').should('have.text', 'Total GST');
        cy.get('p[data-test="Total GST-value"]').invoke('text').then((value: string) => {
            const displayedTax = parseFloat(value.replace(/[^\d.-]/g, ''));
            expect(displayedTax).to.be.closeTo(rowTax, 0.01);
        });
    }

    deleteRow(index) {
        cy.get("button[aria-label='removeRow']").eq(index).click({ force: true })
    }
    cancelInvoice() {
        cy.get('button[data-test="cancel-button"]').click({ force: true })
        cy.get('p[data-test="Invoices-title"]').should('be.visible')
    }
    previewInvoice() {
        cy.get('button[data-test="preview-button"]').click({ force: true })
        cy.get('h5[data-test="TAX INVOICE-title"]').should('contain', 'TAX INVOICE')
    }
    goInvoicePage() {
        cy.get('a[data-test="Invoices-menu-item"]').click()
        cy.get('p[data-test="Invoices-title"]').should('have.text', 'Invoices')
    }
    viewInvoice(index){
        cy.get('div[data-field="invoice_display_id"] a').eq(index).should('be.visible').invoke('text').then(invoiceId => {
            cy.log('id is = ', invoiceId)
            cy.wrap(invoiceId).as('invoiceID')
        })
        cy.get('button[data-test="view-button"]').eq(index).click()
        cy.get('@invoiceID').then(invoiceID => {
            cy.get('p[data-test*="-title"]').should('contain.text','Invoice #'+invoiceID)
        })
    }
    editInvoice() {
        cy.get('button[data-test="undefined-button"]').eq(1).click()
        cy.get('p[data-test*="-title"]').should('contain.text', 'Edit Invoice')
    }
    clickSaveChanges()
    {
        cy.get('button[data-test="Save Changes-button"]').click({force:true})
    }
    savePrint()
    {
        cy.get('button[data-test="Save Changes-dropdown-button"]').should('be.visible').click().wait(5000)
        cy.get('li[data-test="Save & Print-menu-item"]').should('contain.text','Save & Print').click()
    }
    savePrintPackingSlip()
    {
        cy.get('button[data-test="Save Changes-dropdown-button"]').should('be.visible').click().wait(5000)
        cy.get('li[data-test="Save & Print Packing Slip-menu-item"]').should('contain.text','Save & Print Packing Slip').click()
    }
    enterTagNumber(){
        cy.get('input[data-test="id-input-cell-input"]').click().type('251')
        cy.get('button[data-test="id-input-cell-submit-button"]').click({force:true})
    }
    removeAttributesfromROw(){
        cy.get('input[data-test="quantity-currency-cell-input"]').clear()
        cy.get('input[data-test="unit_price-currency-cell-input"]').clear()
        cy.get('input[data-test="account-dropdown-cell-input"]').clear()
        cy.get('input[data-test="tax_type-dropdown-cell-input"]').clear()
    }
    cancelChangesButton(){
        cy.get('button[data-test="cancel-button"]').click()
    }
    comparePreviewData(){
        const previousContact = this.getContact()
        const previousPrice = this.getPrice()
        const previousQuantity = this.getQuantity()
        const previousAmount = this.getAmount()
    }
    validateEmailedTag(emailtag: string){
        cy.get('div[class="MuiChip-root MuiChip-filled MuiChip-sizeSmall MuiChip-colorSuccess MuiChip-filledSuccess css-5olyte"]')
        .should('contain.text','Emailed')

    }
    emailButton(){
        cy.get('button[data-test="email-button"]').should('be.visible').click()
    }
    approvedButton(){
        cy.get('div[data-test="Actions-button"]').click()
        cy.get('li[data-id="approve"]').should('be.visible').click()

    }
    printInvoice(){
        cy.get('div[data-test="Actions-button"]').click()
        cy.get('[data-id="print"]').should('be.visible').click()
    }
    printWithoutPartPricesButton(){
        cy.get('div[data-test="Actions-button"]').click()
        cy.get('li[data-id="printWithoutPartPrices"]').click()
    }
    selectAddPayment(){
        cy.get('div[data-test="Actions-button"]').click()
        cy.get('li[data-id="addPayment"]').should('be.visible').click()
    }
    getDueAmount(): Cypress.Chainable<string> {
        return cy.get('p[data-test="Amount Due-value"]').invoke('text').then(totalAmount=>{
            const totalstring = String(totalAmount)
            cy.log('Total amount is ', totalstring)
            return cy.wrap(totalstring)
        })

    }
    addPaymentDetails(amount :Number, paidAmount :Number){
        cy.get("p[data-test='Add Payment-title']").should('have.text','Add Payment')
        cy.get('p[class="MuiTypography-root MuiTypography-body1 css-avz2a8"]').eq(4).should('have.text','Amount Due')
        cy.get(".MuiTypography-root.MuiTypography-body1.css-tuk2r0[data-test='Total-value']").invoke('text').then(ele=>{
            const dueamont = ele.trim()
            cy.log(dueamont)
            cy.wrap(dueamont).should('contain',amount)
        })
        cy.get('#mui-component-select-account_id').click({force:true}).wait(2000)
        cy.contains('123test').click({force:true})
        cy.get('input[data-test="amount_paid-input"]').clear().type(String(paidAmount))
    }
    addPaymentButton(){
        cy.get('button[data-test="Add Payment-button"]').click()
    }
    applyStatusFilter(){
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(0).should('contain.text','Status')
        cy.get('input[data-test="status-input"]').click()
        cy.contains('Awaiting Payment').click()
    }
    printPackingInvoice(){
        cy.get('div[data-test="Actions-button"]').click()
        cy.get('li[data-id="printPackingSlip"]').click()
    }
    dispatch(){
        cy.get('div[data-test="Actions-button"]').click()
        cy.get('li[data-id="dispatch"]').click()
    }
    notDispatch(){
        cy.get('div[data-test="Actions-button"]').click()
        cy.get('li[data-id="notDispatched"]').should('be.visible').click()
    }
    void(){
        cy.get('div[data-test="Actions-button"]').click()
        cy.get('li[data-id="void"]').should('be.visible').click()
    }
}