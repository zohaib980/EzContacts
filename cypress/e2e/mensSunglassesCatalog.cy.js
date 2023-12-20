// <reference types = "Cypress"/>

import { MensSunglassesCatalog } from "../pageObjects/MensSunglassesCatalog"
import { Homepage } from "../pageObjects/Homepage"
import { ReuseableCode } from "../support/ReuseableCode"

const mensSunglassesCatalog = new MensSunglassesCatalog
const homepage = new Homepage
const reuseableCode = new ReuseableCode

describe('Men Sunglasses Products TS_006',function(){
    
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Returning false prevents Cypress from failing the test
          return false;
        });
      });
    it('TC_EZ_098 - Verify that on Mens sunglasses page, filter option "Virtual Try-On" is available and applying correctly on product list',function(){
        cy.visit('/mens-sunglasses')
        homepage.closeDiscountPOpup()
        mensSunglassesCatalog.applyVirtualTryOnFilter() //Virtual TryOn filter
    })
    it('TC_EZ_099 - Verify that on Mens sunglasses page, filter option "In Stock" is available and applying correctly on product list',function(){
      
        cy.visit('/mens-sunglasses')
        homepage.closeDiscountPOpup()
        mensSunglassesCatalog.applyInStockFilter()

    })
    it('TC_EZ_100 - Verify that on Mens sunglasses page, filter option "Clearance" is available and applying correctly on product list',function(){
      
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.applyClearanceFilter()

    })
    it('TC_EZ_101 - Verify that on Mens sunglasses page, under "Frame type" filter "Full rim" option is available and applying correctly on the product list',function(){
      
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.applyFullRimFilter()
    })
    it('TC_EZ_102 - Verify that on Mens sunglasses page, under "Frame type" filter "Semi Rim & Rim less" option is available and applying correctly on the product list',function(){
      
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.applySemiRimFilter()
      cy.visit('/mens-sunglasses')
      mensSunglassesCatalog.applyRimlessFilter()
    })
    it('TC_EZ_103 - Verify that on Mens sunglasses page, under "Brands" filter number of brands are shown in a list where user can search or select one or multiple brands',function(){
      
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.applyBrandFilters() //Two time random filters will be applied

    })
    it('TC_EZ_104 - Verify that on the Mens sunglasses page, under the "Multifocal" filter "Progressive" option is available and the filter is applying correctly on the product list',function(){
      
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.applyProgressiveFilter()

    })
    it('TC_EZ_105 - Verify that on the Mens sunglasses page, under the "Multifocal" filter "Bifocal" option is available and the filter is applying correctly on the product list',function(){
      
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.applyBifocalFilter()

    })
    it('TC_EZ_106 - Verify that on the Mens sunglasses page, under the "Size" filter is available and it is applying correctly on the product list',function(){
      
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.applySizeFilter() 
      
    })
    it('TC_EZ_107 - On the Mens sunglasses page, Validate the "Frame Shape" filter',function(){
 
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.applyFrameShapeFilter() //Apply one filter option randomly
      
    })
    it('TC_EZ_108 - On the Mens sunglasses page, Validate the "Frame Material" filter',function(){
 
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.applyFrameMaterialFilter() //Apply one filter option randomly
    })
    it('TC_EZ_109 - Validate the "Reviews" filter functionality On the Mens sunglasses page',function(){
 
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.applyReviewFilter() //Apply one filter option randomly
    })

    it('TC_EZ_110 - Validate the "Price" filter functionality On the Mens sunglasses page',function(){
 
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.applyPriceFilter() //Apply one filter option randomly
    })
    it('TC_EZ_111 - Validate the "Reset All Filter" option functionality On the Mens sunglasses page',function(){
 
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.applyPriceFilter() //Apply one filter option randomly
      mensSunglassesCatalog.clickResetAllFilters()
      
    })

    it('TC_EZ_112 - Verify that on the Mens sunglasses page, "Products per page" and "Sorting option" list is shown',function(){
 
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      //Select Product Per page
      mensSunglassesCatalog.selectProductPerPage('48') //30, 48, 72, 96
      cy.wait(5000)
      //Select Sorting option
      mensSunglassesCatalog.selectRandomSortingOption() //Select a random option
      
    })
    it('TC_EZ_113 - Verify that on the Mens sunglasses page, the Pagination component is shown along with total products (Results) info',function(){
 
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.showTotalProducts() //Show Total Products related to the catagory
      mensSunglassesCatalog.clickPagination() //Will Navigate through some of the product pages    
    })
    it('TC_EZ_114 - Verify that on the Mens sunglasses page, At the end of the product catalog, there is a section for RECOMMENDED OR DISCOUNTED PRODUCTS',function(){
 
      cy.visit('/mens-sunglasses')
      homepage.closeDiscountPOpup()
      mensSunglassesCatalog.validateRecommendedProductSection() //Validate Recommended product section 
    })

  })
    
