export class PartAction{
    validateDashboard(){
        cy.get('p[data-test="Dashboard-title"]').should('have.text','Dashboard')
    }
    createPart(){
        cy.get('button[data-test="Create-button"]').click()
        cy.get('li[data-test="Part-menu-item"]').click()
    }
    addBasicDetails(){
        cy.get('p[data-test="Add Part-title"]').should('have.text','Add Part')
        cy.get('.MuiBox-root.css-1uu95av').eq(0).should('have.text','Basic Details')
        cy.get("div[class='MuiBox-root css-vmiqra'] div:nth-child(2) label:nth-child(1) div:nth-child(1) div:nth-child(1)")
        .should('contain.text','Year Range') //validate year range 
        cy.get('input[data-test="year_from-input"]').click({force:true})
        cy.contains('2005').click()
        //range to
        cy.get('input[data-test="year_to-input"]').click({force:true})
        cy.contains('2023').click()
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(1)
        .should('contain.text','Year')
        cy.get('input[data-test="year-input"]').click({force:true})
        cy.contains('2022').click()
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(2).should('contain.text','Make')
        cy.get('input[data-test="make-input"]').click({force:true})
        cy.contains('Honda').click()
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(3).should('contain.text','Model')
        cy.get('input[data-test="sub_model-input"]').click({force:true})
        cy.contains('Accord').click()
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(4).should('contain.text','Sub Model')
        cy.get('input[data-test="series-input"]').click().type('1220')
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(5).should('contain.text','Series')
        cy.get('input[data-test="part_type-input"]').click({force:true})
        cy.contains('2nd Seat Headrest').click()
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(6).should('contain.text','Part Type')
        cy.get('input[data-test="interchange_part-input"]').click({force:true})
        cy.contains('No Interchange').click()
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(7).should('contain.text','Interchange Part')
        cy.get('input[data-test="location-input"]').click({force:true})
        cy.contains('Jash 5.3').click()
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(8).should('contain.text','Location')

        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(9).should('contain.text','Cost')

        cy.get('input[data-test="unit_cost-input"]').click().type('100')
    }
    partButton(){
        cy.get('button[data-test="Add Part-button"]').click()
    }
    addImageOnPart(){
        cy.get("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-md-4 css-101c7hp'] div:nth-child(2) div:nth-child(1) span:nth-child(1)").click()
        cy.get('.MuiBox-root.css-1uu95av').should('contain.text','Images')
    }
    addPricing(){
        cy.get('div[class="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters css-2dv8c5"]').eq(1).click()
        cy.get('.MuiBox-root.css-1uu95av').should('contain.text','Pricing')
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(0).should('contain.text','Retail')
        cy.get('input[data-test="retail_price-input"]').click().type('150')
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(1).should('contain.text','Trade')
        cy.get('input[data-test="trade_price-input"]').click().type('100')
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(2).should('contain.text','Walk In')
        cy.get('input[data-test="walk_in_price-input"]').click().type('110')
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(3).should('contain.text','other')
        cy.get('input[data-test="other_price-input"]').click().type('10')
    }
    addAdvancedDetails(){
        // first one is CLick on adv detail Link 
        cy.get('div[class="MuiListItemText-root css-1tsvksn"]').eq(3).click()//"div[class='MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected css-2dv8c5'] span[class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1gqpc03']").click()
        cy.get('.MuiBox-root.css-1uu95av').should('contain.text','Advanced Details')
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(0).should('contain.text','Chassis #')//Chassis No
        cy.get('input[data-test="chassis_code-input"]').click().type('12xy')
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(1).should('contain.text','Part #')//Part NO 
        cy.get('input[data-test="part_number-input"]').click().type('14235')
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(2).should('contain.text','Category')//Category 
        cy.get('input[data-test="category-input"]').click().type('car')
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(3).should('contain.text','Old Tag #')//old tag
        cy.get('input[data-test="old_tag_id-input"]').click().type('1233')
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(4).should('contain.text','Inventory date')//Date
        cy.get('input[data-test="inventory_date-date-picker"]').click().type('{enter}')
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(5).should('contain.text','Condition')
        cy.get("button[value='A']").click({force:true})
    }
    addComment(){
        cy.get('div[class="MuiListItemText-root css-1tsvksn"]').eq(4).click({force:true})
        cy.get('.MuiBox-root.css-1uu95av').should('contain.text','Comments')
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(0).should('contain.text','Public')
        cy.get('textarea[data-test="public_comments-input"]').type('Testing ')
        cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(1).should('contain.text','Private')
        cy.get('textarea[data-test="private_comments-input"]').type('testing')
    }
    addCustom(){
        cy.get('div[class="MuiListItemText-root css-1tsvksn"]').eq(5).click()
        cy.get('.MuiBox-root.css-1uu95av').should('contain.text','Custom')

        cy.get('div[data-field="field_name"]').eq(0).should('contain.text','Field Name')
        cy.get('div[data-field="field_value"]').eq(0).should('contain.text','Value')
    }
    addRow(){
        cy.get('.MuiStack-root.css-y6ta9y').click()
    }
    verifySuccess() {
        cy.get('[data-test="success-alert"]').should('be.visible');
        
    }
    addPartAndAddAnother(){
        cy.get('button[data-test="Add Part-dropdown-button"]').click()
        cy.get('li[data-test="Add Part & Add Another-menu-item"]').click()
    }
    addPartAndPrintTag(){
        cy.get('button[data-test="Add Part-dropdown-button"]').click()
        cy.get('li[data-test="Add Part & Print Tag-menu-item"]').click()
    }
    cancelButton(){
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.css-yfawp4').click()
    }
    searchTab(){
        cy.get('a[data-test="Search-menu-item"]').click({force:true})
    }
    actionButton(){
        cy.get('div[data-test="Actions-button"]').eq(0).click()
    }

    editButton(){
        cy.get('li[data-id="edit"]').should('be.visible').click({force:true})
    }
    saveChangingButton(){
        cy.get('button[data-test="Save Changes-button"]').click({force:true})
    }
    delete(){
        cy.get('li[data-id="delete"]').click()
        cy.get('p[data-test="Delete Part-title"]').should('contain.text','Delete Part?')
        cy.get('button[data-test="Delete Part-button"]').click()
    }
    printTag(){
        cy.get('li[data-id="print_tag"]').click()
    }
    selectGenerateQuote(){
        cy.get('li:nth-child(1) div:nth-child(2) li:nth-child(1) div:nth-child(1) p:nth-child(1)').trigger('mouseover')
        cy.contains('Generate Quote').click({force:true})
    }
    validateGenerateQuotePage(){
        cy.get('p[data-test="Review Quote-title"]').should('contain.text','Review Quote')
       
    }
    selectQuicSale(){
        cy.get('li:nth-child(1) div:nth-child(2) li:nth-child(1) div:nth-child(1) p:nth-child(1)').trigger('mouseover')
        cy.contains('Quick Sell').click()
    }
    validateQuickSale(){
        cy.get('p[data-test="Add Quick Sale-title"]').should('contain.text','Add Quick Sale')
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1jcy8nw').should('contain.text','Sale Details')
        //cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(6).should('contain.text','Total Price')
        cy.get('input[data-test="sold_price-input"]').clear().type('150')
        //cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(7).should('contain.text','Quantity')
        cy.get('input[data-test="quantity-input"]').invoke('val').then(inputValue => {
            // Static value for comparison
            const staticValue = '1'; // Replace with your expected static value
        
            // Validate the input value against the static value
            expect(inputValue).to.equal(staticValue);
          });
        //cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(8).should('contain.text','Contact')
        cy.get('input[data-test="contact_id-input"]').click()
        cy.contains('XEROXERO').click()
        //cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(9).should('contain.text','Sales Person')
        cy.get('input[data-test="sales_person_id-input"]').clear()
        cy.contains('Muhammad').click()
        //cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(10).should('contain.text','Payment Type')
        cy.get('input[data-test="payment_type-input"]').clear()
        cy.contains('Cash').click()
        //cy.get('div[class="MuiStack-root css-1xhj18k"]').eq(11).should('contain.text','Sales Channel')
        cy.get('input[data-test="sales_channel-input"]').clear()
        cy.contains('Walk In').click()
    }
    addQuickSaleButton(){
        cy.get('button[data-test="form-action-button-button"]').click()
    }
    selectStockTake(){
        cy.get('li[data-id="stock_take"]').click()
    }
    selectMarkAsMissing(){
        cy.get('li[data-id="mark_as_missing"]').click()
    }
    selectMarkAsFound(){
        cy.get('li[data-id="mark_as_found"]').click()
    }
  
}