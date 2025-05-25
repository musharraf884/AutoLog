export class SearchAction{
    validateDashboard(){
        cy.get('p[data-test="Dashboard-title"]').should('have.text','Dashboard')
    }
    searchTab(){
        cy.get('a[data-test="Search-menu-item"]').click({force:true})
    }
    showVehiclesOnly(){
        cy.get('p[data-test="Inventory Search-title"]').should('contain.text','Inventory Search')
        cy.get('input[type="checkbox"]').uncheck();

  // Check the specific checkbox you want
        cy.get('input[data-test="only_show_vehicles-checkbox"]').check();

  // Ensure that only the specific checkbox is checked
        cy.get('input[type="checkbox"]').each(($checkbox) => {
        if ($checkbox.attr('data-test') !== 'only_show_vehicles-checkbox') {
         expect($checkbox).not.to.be.checked; // Ensure other checkboxes are not checked
            } else {
         expect($checkbox).to.be.checked; // Ensure the specific checkbox is checked
         }
        });
    }
    validatePartShown(){
        cy.get('div[class="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-20d9fz"]')
        .eq(2).should('have.text','0')
    }
    showPartsOnly(){
        cy.get('p[data-test="Inventory Search-title"]').should('contain.text','Inventory Search')
        cy.get('input[type="checkbox"]').uncheck();

  // Check the specific checkbox you want
  cy.get('input[data-test="only_show_parts-checkbox"]').check();

  // Ensure that only the specific checkbox is checked
  cy.get('input[type="checkbox"]').each(($checkbox) => {
    if ($checkbox.attr('data-test') !== 'only_show_parts-checkbox') {
      expect($checkbox).not.to.be.checked; // Ensure other checkboxes are not checked
        } 
        else {
      expect($checkbox).to.be.checked; // Ensure the specific checkbox is checked
             }
        });
    }
    validateVehiclesShown(){
        cy.get('div[class="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-20d9fz"]')
        .eq(1).should('have.text','0')
    }
    notArrivedFilter(){
    cy.get('p[data-test="Inventory Search-title"]').should('contain.text','Inventory Search')
    cy.get('input[type="checkbox"]').uncheck();

  // Check the specific checkbox you want
    cy.get('input[data-test="only_show_not_arrived_vehicles-checkbox"]').check();

  // Ensure that only the specific checkbox is checked
    cy.get('input[type="checkbox"]').each(($checkbox) => {
    if ($checkbox.attr('data-test') !== 'only_show_not_arrived_vehicles-checkbox') {
      expect($checkbox).not.to.be.checked; // Ensure other checkboxes are not checked
        } 
        else {
      expect($checkbox).to.be.checked; // Ensure the specific checkbox is checked
            }
        });
    }
    arrivedFilter(){
        cy.get('p[data-test="Inventory Search-title"]').should('contain.text','Inventory Search')
        cy.get('input[type="checkbox"]').uncheck();

  // Check the specific checkbox you want
        cy.get('input[data-test="only_show_arrived_vehicles-checkbox"]').check();

  // Ensure that only the specific checkbox is checked
        cy.get('input[type="checkbox"]').each(($checkbox) => {
    if ($checkbox.attr('data-test') !== 'only_show_arrived_vehicles-checkbox') {
      expect($checkbox).not.to.be.checked; // Ensure other checkboxes are not checked
        } else {
      expect($checkbox).to.be.checked; // Ensure the specific checkbox is checked
        }
        });
    }
    VerifyFilterNotArrived(){
        cy.get('.MuiButtonBase-root.MuiChip-root.MuiChip-filled.MuiChip-sizeMedium.MuiChip-colorDefault.MuiChip-deletable.MuiChip-deletableColorDefault.MuiChip-filledDefault.css-2vrs0n').should('exist')
    }
    verifyArrivedFilter(){
        cy.get('div[class="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-deletable MuiChip-deletableColorDefault MuiChip-filledDefault css-2vrs0n"]').should('exist')
    }
    notSoldFilter(){
        cy.get('p[data-test="Inventory Search-title"]').should('contain.text','Inventory Search')

        cy.get('input[type="checkbox"]').uncheck();

        // Check the specific checkbox you want
        cy.get('input[data-test="only_show_not_sold_parts-checkbox"]').check();
      
        // Ensure that only the specific checkbox is checked
        cy.get('input[type="checkbox"]').each(($checkbox) => {
          if ($checkbox.attr('data-test') !== 'only_show_not_sold_parts-checkbox') {
            expect($checkbox).not.to.be.checked; // Ensure other checkboxes are not checked
          } else {
            expect($checkbox).to.be.checked; // Ensure the specific checkbox is checked
          }
        });
    }
    verifyNotSoldFilter(){
        cy.get('div[class="MuiButtonBase-root MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-deletable MuiChip-deletableColorDefault MuiChip-filledDefault css-2vrs0n"]').should('exist')
    }
    notCrushedFilter(){
      cy.get('p[data-test="Inventory Search-title"]').should('contain.text','Inventory Search')
      cy.get('input[type="checkbox"]').uncheck();

      // Check the specific checkbox you want
      cy.get('input[data-test="only_show_not_crushed_vehicles-checkbox"]').check();
    
      // Ensure that only the specific checkbox is checked
      cy.get('input[type="checkbox"]').each(($checkbox) => {
        if ($checkbox.attr('data-test') !== 'only_show_not_crushed_vehicles-checkbox') {
          expect($checkbox).not.to.be.checked; // Ensure other checkboxes are not checked
        } else {
          expect($checkbox).to.be.checked; // Ensure the specific checkbox is checked
        }
      });

  }
  verifyNotCrushedFilter(){
    cy.get("div[role='button'] span[class='MuiChip-label MuiChip-labelMedium css-9iedg7']").should('exist')
}
unCheckAllCheckBox(){
  cy.get('input[type="checkbox"]').each(($checkbox) => {
      if ($checkbox.prop('checked')) {
        cy.wrap($checkbox).uncheck(); // Uncheck the checkbox if it is checked
      }
    });
  
    // Verify that all checkboxes are unchecked
    cy.get('input[type="checkbox"]').each(($checkbox) => {
      expect($checkbox).not.to.be.checked; // Verify that each checkbox is unchecked
    });
}
yearFilter(){
    
  cy.get('input[data-test="year-input"]').clear()
  cy.contains('2008').click()
  cy.get("div[role='button'] span[class='MuiChip-label MuiChip-labelMedium css-9iedg7']").should('exist')
  //remove filter 
  cy.get('input[data-test="year-input"]').clear()
  cy.get("div[role='button'] span[class='MuiChip-label MuiChip-labelMedium css-9iedg7']").should('not.exist')

}
makeFilter(){
    
  cy.get('input[data-test="make-input"]').click({force:true}).wait(1000)
  cy.contains('Audi').click({force:true})
  cy.get('.MuiButtonBase-root.MuiChip-root.MuiChip-filled.MuiChip-sizeMedium.MuiChip-colorDefault.MuiChip-deletable.MuiChip-deletableColorDefault.MuiChip-filledDefault.css-2vrs0n').should('exist')
  cy.get('input[data-test="make-input"]').clear()
  cy.get('.MuiButtonBase-root.MuiChip-root.MuiChip-filled.MuiChip-sizeMedium.MuiChip-colorDefault.MuiChip-deletable.MuiChip-deletableColorDefault.MuiChip-filledDefault.css-2vrs0n').should('not.exist')
}
modelFilter(){
  cy.get('input[data-test="model-input"]').click({force:true}).wait(1000)
  cy.contains('A4').click({force:true})

  cy.get(".MuiButtonBase-root.MuiChip-root.MuiChip-filled.MuiChip-sizeMedium.MuiChip-colorDefault.MuiChip-deletable.MuiChip-deletableColorDefault.MuiChip-filledDefault.css-2vrs0n")
  .should('exist')
  //remove filter 
  cy.get('input[data-test="model-input"]').clear()
  cy.get(".MuiButtonBase-root.MuiChip-root.MuiChip-filled.MuiChip-sizeMedium.MuiChip-colorDefault.MuiChip-deletable.MuiChip-deletableColorDefault.MuiChip-filledDefault.css-2vrs0n").should('not.exist')

}
subModelFilter(){
  cy.get('input[data-test="sub_model-input"]').click({force:true}).wait(1000)
  cy.contains('A4').click({force:true})
  cy.wait(3000)
  cy.get('.MuiButtonBase-root.MuiChip-root.MuiChip-filled.MuiChip-sizeMedium.MuiChip-colorDefault.MuiChip-deletable.MuiChip-deletableColorDefault.MuiChip-filledDefault.css-2vrs0n').should('exist')
  //remove filter 
  cy.get('input[data-test="sub_model-input"]').clear()

  cy.get('.MuiButtonBase-root.MuiChip-root.MuiChip-filled.MuiChip-sizeMedium.MuiChip-colorDefault.MuiChip-deletable.MuiChip-deletableColorDefault.MuiChip-filledDefault.css-2vrs0n').should('not.exist')

}
partTypeFilter(){
  cy.get('input[data-test="part_type-input"]').click({force:true}).wait(1000)
  cy.contains('4th Seat').click({force:true})
  cy.get('.MuiButtonBase-root.MuiChip-root.MuiChip-filled.MuiChip-sizeMedium.MuiChip-colorDefault.MuiChip-deletable.MuiChip-deletableColorDefault.MuiChip-filledDefault.css-2vrs0n').should('exist')
  //remove filter 
  cy.get('input[data-test="part_type-input"]').clear()
  cy.get('.MuiButtonBase-root.MuiChip-root.MuiChip-filled.MuiChip-sizeMedium.MuiChip-colorDefault.MuiChip-deletable.MuiChip-deletableColorDefault.MuiChip-filledDefault.css-2vrs0n').should('not.exist')

}
interchangeFilter(){
  cy.get('input[data-test="interchange-input"]').click({force:true}).wait(1000)
  cy.contains('Engine').click({force:true})
  cy.get('.MuiButtonBase-root.MuiChip-root.MuiChip-filled.MuiChip-sizeMedium.MuiChip-colorDefault.MuiChip-deletable.MuiChip-deletableColorDefault.MuiChip-filledDefault.css-2vrs0n').should('exist')
  //remove filter 
  cy.get('input[data-test="interchange-input"]').clear()

  cy.get('.MuiButtonBase-root.MuiChip-root.MuiChip-filled.MuiChip-sizeMedium.MuiChip-colorDefault.MuiChip-deletable.MuiChip-deletableColorDefault.MuiChip-filledDefault.css-2vrs0n').should('not.exist')
  
}




}