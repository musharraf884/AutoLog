///<reference types="Cypress"/>

export class VehicleAction {
    validateDashboard() {
        cy.get('p[data-test="Dashboard-title"]').should('have.text', 'Dashboard')
    }
    searchTab() {
        cy.get('a[data-test="Search-menu-item"]').click({ force: true })
    }
    searchInventory(text)
    {
        cy.get('input[data-test="search-input"]').should('exist').type(text)
        cy.get('button[data-test="search-button"]').should('contain.text','Search').click() //Search button
        cy.get('a[href*="/vehicle/view"]').eq(0).click() //Stock Tag
    }
    createVehicle() {
        cy.get('button[data-test="Create-button"]').click()
        cy.get('li[data-test="Vehicle-menu-item"]').click()
    }
    addBasicDetails(regNo, VIN) {
        cy.get('p[data-test="Add Vehicle-title"]')
        //enter Year 
        cy.get('input[data-test="year-input"]').click()
        cy.contains('2021').click()
        //enter Maker
        cy.get('input[data-test="make-input"]').click()
        cy.contains('Audi').click()
        //enter Model
        cy.get('input[data-test="model-input"]').click()
        cy.contains('100').click()
        //sub Model
        cy.get('input[data-test="sub_model-input"]').click()
        cy.contains('100').click()
        //Series 
        cy.get('input[data-test="series-input"]').click().type('A4-1')
        //Registration No
        cy.get('input[data-test="registration_id-input"]').click().type(regNo)
        //VIN No
        cy.get('input[data-test="vin-input"]').click().type(VIN)
    }
    autoFillBasicInfo() {
        cy.get('input[data-test="search-input"]').click().type('vehicleRegno')
        cy.get('[data-test="search-button"]').click()
    }
    arrivedStatus() {
        cy.get('button[data-test="arrived-button"]').click()
    }
    advanceDetail() {
        //click on Advance detail tab 
        cy.get('div[data-test="Advanced Details-button"]').click()
        cy.get('.MuiBox-root.css-1uu95av').should('contain.text', 'Advanced Details')
        //Engine No
        cy.get('input[data-test="engine_code-input"]').click().type('DC12345AB')
        //fule type 
        cy.get('input[data-test="fuel_type-input"]').click()
        cy.contains('Petrol').click()
        //Transmission
        cy.get('input[data-test="transmission_code-input"]').click().type('Manual')
        //gear box
        cy.get('input[data-test="gear_box_code-input"]').click().type('CVT')
        //Chassis No
        cy.get('input[data-test="chassis_code-input"]').click().type('1235')
        //body style 
        cy.get('input[data-test="body_type-input"]').click()
        cy.contains('Articulated Truck').click()
        //Vehicle Type 
        cy.get('input[data-test="vehicle_type-input"]').click()
        cy.contains('Moped').click()
        //
    }
    addOtherDetails() {
        //Other Details Tab
        cy.get('div[data-test="Other Details-button"]').click()
        cy.get('.MuiBox-root.css-1uu95av').should('contain.text', 'Other Details')
        //Location
        cy.get('input[data-test="location_id-input"]').click()
        cy.contains('Jash 5.3').click()
        //select Date
        cy.get('.MuiIconButton-edgeEnd').should('exist').click() //Calender icon
        cy.get('.MuiPickersDay-today').click() //today date
        //Color
        cy.get('input[data-test="color-input"]').click()
        cy.contains('Black').click()
        //Odometer
        cy.get('input[data-test="odometer-input"]').click().type('350')
        //Weight
        cy.get('input[data-test="weight-input"]').click().type('200')
        //Purpose
        cy.get('input[data-test="purpose-input"]').click()
        cy.contains('Dismantle').click()
        //Country Of Origin
        cy.get('input[data-test="country_of_origin-input"]').click()
        cy.contains('Pakistan').click()

    }
    addCosts() {
        cy.get('div[data-test="Costs-button"]').click()
        cy.get('.MuiBox-root.css-1uu95av').should('contain.text', 'Costs')
        //Purchase
        cy.get('input[data-test="purchase-input"]').click().type('100')
        //Tow
        cy.get('input[data-test="tow-input"]').click().type('50')
        //Storage
        cy.get('input[data-test="storage-input"]').click().type('100')
        //Other
        cy.get('input[data-test="other-input"]').click().type('200')

    }
    addComments() {
        cy.get('div[data-test="Comments-button"]').click()
        cy.get('.MuiBox-root.css-1uu95av').should('contain.text', 'Comments')
        //Public
        cy.get('textextarea[data-test="public_comments-input"]').click().type('Testing')
        //Private
        cy.get('textextarea[data-test="private_comments-input"]').click().type('Private')
        //Damages 

        cy.get('textextarea[data-test="damages-input"]').click().type('Testing ')
    }
    addImage() {

        cy.get('div[data-test="Images-button"]').click()
        cy.get('.MuiBox-root.css-1uu95av').should('contain.text', 'Images')
        //image upload
        cy.get('.MuiTypography-root.MuiTypography-body1.css-v6qhpn').attachFile('Image1.jpg')
        cy.wait(3000)
    }
    addCustomDetail() {
        cy.get('div[data-test="Custom-button"]').click()
        cy.get('.MuiBox-root.css-1uu95av').should('contain.text', 'Custom')

        cy.get('div[data-field="field_name"]').eq(0).should('contain.text', 'Field Name')
        cy.get('div[data-field="field_value"]').eq(0).should('contain.text', 'Value')
        //Add row
        cy.get('[class="MuiStack-root css-y6ta9y"]').should('contain.text','Add Row').click()
        cy.get('input[data-test*="field_name-"]').should('exist').type('CustomTag')
        cy.get('input[data-test*="field_value-"]').eq(0).should('exist').type('available')
    }
    addVehicleAndAddAnotherButton() {
        cy.get('[data-test="Add Vehicle-dropdown-button"]').should('exist').click()
        cy.get('li[data-test="Add Vehicle & Add Another-menu-item"]').should('exist').click()
    }
    addVehicleButton() {
        cy.get('button[data-test="Add Vehicle-button"]').click()
    }
    verifySuccessToastMsg() {
        //expectedMessage: string
        cy.get('[data-test="success-alert"]').should('be.visible').should('exist')//.should("contain.text", expectedMessage);
        cy.get('[data-test="success-alert"]').should('not.be.visible')
    }
    addVehicleAndPrintTagButton() {
        cy.get('[data-test="Add Vehicle-dropdown-button"]').should('exist').click()
        cy.get('li[data-test="Add Vehicle & Print Tag-menu-item"]').click()
    }
    cancelButton() {
        cy.get('button[data-test="Cancel-button"]').click()
        cy.get('p[data-test="Inventory Search-title"]').should('contain.text','Inventory Search') //heading
    }
    deleteVehicle(index) {
        //On Vechile Detail
        cy.get('[data-test="Actions-button"]').eq(index).should('exist').click() //Action Button
        cy.get('[data-id="delete"]').should('exist').click() //Delete
        //Toast Appears
        cy.get('[data-test="Delete Vehicle-button"]').should('contain.text', 'Delete Vehicle').click() //Delete Vehicle
    }
    generateRandomNumber(length: number): string {
        const numbers = '0123456789';
        let randomNum = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * numbers.length);
            randomNum += numbers.charAt(randomIndex);
        }

        return randomNum;
    }
    applyArriveFilter()
    {
        cy.get('input[data-test="only_show_arrived_vehicles-checkbox"]').should('exist').check()
    }
    removeArriveFilter()
    {
        cy.get('input[data-test="only_show_arrived_vehicles-checkbox"]').should('exist').uncheck()
    }
    applyOnlyShowVehiclesFilter()
    {
        cy.get('input[data-test="only_show_vehicles-checkbox"]').should('exist').check()
    }
    removeOnlyShowVehiclesFilter()
    {
        cy.get('input[data-test="only_show_vehicles-checkbox"]').should('exist').uncheck()
    }
}