///<reference types = "Cypress"/>

import { PartAction } from "../../../support/portal/actions/PartAction"


const part = new PartAction

describe('Part section ',()=>{
    beforeEach(()=>{
        cy.login()
    })

    it('TC_PARTS_1 Add part by filling all sections (Basic Info, Images, Pricing, Advance Detail, Comments, Custom) using Old vehicle data ',()=>{
        
        part.validateDashboard()
        part.createPart()
        part.addBasicDetails()
        part.addImageOnPart()
        part.addPricing()
        part.addAdvancedDetails()
        part.addComment()
        part.addCustom()
        part.addRow()
        part.partButton()
        part.verifySuccess()
    })
    it('TC_PARTS_2 Add part without filling all sections (Basic Info, Images, Pricing, Advance Detail, Comments, Custom) using Old vehicle data',()=>{
        part.validateDashboard()
        part.createPart()
        part.partButton()
        part.verifySuccess()
    })
    it('TC_PARTS_3 Add Part & Add Another after filling valid data in all sections (Basic Info, Images, Pricing, Advance Detail, Comments, Custom) using Old vehicle data',()=>{
        part.validateDashboard()
        part.createPart()
        part.addBasicDetails()
        part.addImageOnPart()
        part.addPricing()
        part.addAdvancedDetails()
        part.addComment()
        part.addCustom()
        part.addRow()
        part.addPartAndAddAnother()
        part.verifySuccess()
    })
    it(' TC_PARTS_4 Add part & Add Another without filling all sections (Basic Info, Images, Pricing, Advance Detail, Comments, Custom) using Old vehicle data',()=>{
        part.validateDashboard()
        part.createPart()
        part.addPartAndAddAnother()
        part.verifySuccess()
    })
    it(' TC_PARTS_5 Add Part & Print Tag after filling valid data in all sections (Basic Info, Images, Pricing, Advance Detail, Comments, Custom) using Old vehicle data',()=>{
        part.validateDashboard()
        part.createPart()
        part.addBasicDetails()
        part.addImageOnPart()
        part.addPricing()
        part.addAdvancedDetails()
        part.addComment()
        part.addCustom()
        part.addRow()
        part.addPartAndPrintTag()
        part.verifySuccess()
    })
    it(' TC_PARTS_6 Add part & Print Tag without filling all sections (Basic Info, Images, Pricing, Advance Detail, Comments, Custom) using Old vehicle data',()=>{
        part.validateDashboard()
        part.createPart()
        part.addPartAndPrintTag()
        part.verifySuccess()
    })
    it('TC_PARTS_7 Validate the Cancel option on Add part',()=>{
        part.validateDashboard()
        part.createPart()
        part.cancelButton()

    })
    it('TC_PARTS_8 Validate that user can update part detail using Edit Part using valid data',()=>{
        part.validateDashboard()
        part.createPart()
        part.addBasicDetails()
        part.addImageOnPart()
        part.addPricing()
        part.addAdvancedDetails()
        part.addComment()
        part.addCustom()
        part.partButton()
        part.verifySuccess()
        part.actionButton()
        part.editButton()
        part.saveChangingButton()


    })
    it('TC_PARTS_9 Validate Delete action on Part listing page',()=>{
        part.validateDashboard()
        part.createPart()
        part.addBasicDetails()
        part.addImageOnPart()
        part.addPricing()
        part.addAdvancedDetails()
        part.addComment()
        part.addCustom()
        part.partButton()
        part.verifySuccess()
        part.actionButton()
        part.delete()
        part.verifySuccess()
    })
    it('TC_PARTS_10 Validate Print Tag Action on Part listing page',()=>{
        part.validateDashboard()
        part.createPart()
        part.addBasicDetails()
        part.addImageOnPart()
        part.addPricing()
        part.addAdvancedDetails()
        part.addComment()
        part.addCustom()
        part.partButton()
        part.verifySuccess()
        part.actionButton()
        part.printTag()

    })
    it('TC_PARTS_14 Validate Quick Sell Action under Sales on Part listing page',()=>{
        part.searchTab()
        part.actionButton()
        part.selectQuicSale()
        part.validateQuickSale()
        part.addQuickSaleButton()
    })
    it('TC_PARTS_23 Validate "Stock Take" Action on Part Listing Page',()=>{
        part.searchTab()
        part.actionButton()
        part.selectStockTake()
        part.verifySuccess()
    })
    it('TC_PARTS_24 Validate "Mark As Missing" Action on Part Listing Page',()=>{
        part.searchTab()
        part.actionButton()
        part.selectMarkAsMissing()
        part.verifySuccess()
    })
    it('TC_PARTS_25 Validate "Mark As Found" Action on Part Listing Page',()=>{
        part.searchTab()
        part.actionButton()
        part.selectMarkAsFound()
        part.verifySuccess()
    })

})

