/// <reference types = "Cypress"/>

import { Homepage } from "../pageObjects/Homepage";
import { ReuseableCode } from "../support/ReuseableCode";
import { ReaderCatlog } from "../pageObjects/ReaderCatalog";

const homepage = new Homepage
const readercatlog = new ReaderCatlog
describe('TS_013  Reader Products Catalog',function(){
    beforeEach(()=>{
        cy.visit('/readers')
        homepage.closeDiscountPOpup()
    })
    
    it('TC_RD_001 - Verify that on READERS page, "OFFER LINK" option is available on top of header',()=>{
        readercatlog.validateDiscountLinkk()
    })
    it('TC_RD_002 - Verify that on READERS page, "Free shipping" and "Lowest price" info is shown in the header',()=>{
        readercatlog.validateFreeShippinglink()
    })
    it('TC_RD_003 - Verify that on READERS page, "READERS" heading along with the breadcrumbs is shown on the page.',()=>{
        readercatlog.validateReaderTital()
    })
    it('TC_RD_004 - Verify that on "Readers" catalog page, under the "Gender" filter, "Men Reading Glasses" and "Women Reading Glasses" options are working correctly',()=>{
        readercatlog.checkGenderfunctionality()
    })
    it('TC_RD_005 - Verify that on the "Readers" catalog page, the "Price" filter options are working correctly.',()=>{
        readercatlog.applayPariceFilter()
    })

})