///<reference types = "Cypress"/>

import { SearchAction } from "../../../support/portal/actions/SearchAction"

describe('Search Tab',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.login()
    })
    const search = new SearchAction
    it('TC_Search_01 Validate "Only Show Vehicles" Filter on Search Page',()=>{
        search.validateDashboard()
        search.searchTab()
        search.showVehiclesOnly()
        search.validatePartShown()
    })
    it('TC_Search_02 Validate "Only Show Parts" Filter on Search Page',()=>{
        search.validateDashboard()
        search.searchTab()
        search.showPartsOnly()
        search.validateVehiclesShown()
    })
    it('TC_Search_03 Validate "Not Arrived" Filter on Search Page',()=>{
        search.validateDashboard()
        search.searchTab()
        search.notArrivedFilter()
        search.VerifyFilterNotArrived()
    })
    it('TC_Search_04 Validate "Arrived" Filter on Search Page',()=>{
        search.validateDashboard()
        search.searchTab()
        search.arrivedFilter()
        search.verifyArrivedFilter()
    })
    it('TC_Search_05 Validate "Not Sold" Filter on Search Page',()=>{
        search.validateDashboard()
        search.searchTab()
        search.notSoldFilter()
        search.verifyNotSoldFilter()
    })
    it('TC_Search_06 Validate "Not Crushed" Filter on Search Page',()=>{
        search.validateDashboard()
        search.searchTab()
        search.notCrushedFilter()
        search.verifyNotCrushedFilter()

    })
    it('TC_Search_07 Validate "Year" Filter on Search Page',()=>{
        search.validateDashboard()
        search.searchTab()
        search.unCheckAllCheckBox()
        search.yearFilter()
    })
    it('TC_Search_08 Validate the "Make" Filter on the Search Page',()=>{
        search.validateDashboard()
        search.searchTab()
        search.unCheckAllCheckBox()
        search.makeFilter()
    })
    it('TC_Search_09 Validate "Model" Filter on Search Page',()=>{
        search.validateDashboard()
        search.searchTab()
        search.unCheckAllCheckBox()
        search.modelFilter()
    })

    it('TC_Search_10 Validate "Sub Model" Filter on the Search Page',()=>{
        search.validateDashboard()
        search.searchTab()
        search.unCheckAllCheckBox()
        search.subModelFilter()
    })
    it('TC_Search_11 Validate "Part Type" Filter on Search Page',()=>{
        search.validateDashboard()
        search.searchTab()
        search.unCheckAllCheckBox()
        search.partTypeFilter()
    })
    it('TC_Search_12 Validate "Interchange" Filter on Search Page',()=>{
        search.validateDashboard()
        search.searchTab()
        search.unCheckAllCheckBox()
        search.interchangeFilter()
    })

    
})