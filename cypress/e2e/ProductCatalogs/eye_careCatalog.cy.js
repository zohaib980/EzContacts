/// <reference types = "Cypress"/>
import { Homepage } from "../../pageObjects/Homepage";
import { Eye_careCatalog } from "../../pageObjects/Eye_careCatalog";
import { beforeEach } from "mocha";

const eyecare = new Eye_careCatalog
const HomePage =new Homepage

describe('TS_014 Eye-care Products Catalog',function(){

    beforeEach(()=>{
        cy.visit('/eye-care')
        HomePage.closeDiscountPOpup()
    })
    it('TC_EC_001 - Verify that on EYE-CARE page, "PRE-BLACK FRIDAY DEALS!" option is available on top of header',()=>{
        eyecare.validateDiscountLink()
    })
    it('TC_EC_002 - Verify that on EYE-CARE page, "Free shipping" and "Lowest price" info is shown in the header',()=>{
        eyecare.validateFreeShippinglink()
    })
    it('TC_EC_003- Verify that on EYE-CARE page, "EYE-CARE" heading along with the breadcrumbs is shown on the page. ',()=>{
        eyecare.validateEyecareTitle()  
    })
    it('TC_EC_004 - Verify that on "Eye-Care" catalog page, under the "Product Categories" filter, all options are working correctly',()=>{
        eyecare.applyProductCatagerisFilter()
    })
    it('TC_EC_005 - Verify that on the "Eye-Care" catalog page, the "Brands" filter options are working correctly.',()=>{
        eyecare.applyBrandsFilter()
    })
    it('TC_EC_006 - Verify that on the "Eye-Care" catalog page, the "Reviews" filter options are working correctly.',()=>{
        eyecare.applyReviewFilter()
    })
    it('TC_EC_007 - Verify that on the "Eye-Care" catalog page, the "Price" filter options are working correctly.',()=>{
        eyecare.applyPriceFilter()
    })
    it('TC_EC_008 - Verify that on the "Eye-Care" catalog page, "Sorting option" list is shown',()=>{
        eyecare.selectRandomSortingOption()
    })
    it('TC_EC_009 - Verify that on the "Eye-Care" catalog page, the Pagination component is shown along with total products (Results) info',()=>{
        eyecare.clickPagination()
    })
    it('TC_EC_010 - Verify that on the "Eye-Care" catalog page, "Per page Products " Filter is working properly ',()=>{
        eyecare.applyProductsperPage()
    })
})