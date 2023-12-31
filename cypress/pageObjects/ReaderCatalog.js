import { ReuseableCode } from "../support/ReuseableCode";
const Reuse = new ReuseableCode

export class ReaderCatlog{

validateDiscountLinkk(){
    cy.get('div[class="col-sm-12 text-center specialMsgLink cls-header-special-msg-fix"]').click()
}
validateFreeShippinglink(){
    cy.get('.cls-free-shipping-icon-fix').click()
    cy.get('body > header:nth-child(30) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h4:nth-child(2)')
    .should('contain','Free Shipping Offer Details')//validate the popup text
    cy.get("div[id='free-shipping-modal'] span[aria-hidden='true']").click({force:true})//close popup 
    cy.wait(2000)
    cy.get("a[data-target='#lowest-price-guarantee-modal']").click()
    cy.wait(2000)
    cy.get("body > header:nth-child(30) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h4:nth-child(2)")
    .should('contain','Price Match Guarantee')

}
validateReaderTital(){
    cy.get('.section-title').should('contain','Readers')
    cy.get("ol[class='breadcrumb'] li a").should('contain','Home')
    cy.get("ol[class='breadcrumb'] li[class='active']").should('contain','Reader')
}
checkGenderfunctionality(){
    cy.xpath("//h4[normalize-space()='Gender']").should('contain','Gender')
    cy.get('input[id="FilterGenderMens"]').click({force:true})
    cy.wait(3000)
    cy.get('.section-title').should('have.text',"Men's Readers").wait(2000)
    cy.get('label[for="FilterGenderWomens"]').click().wait(3000)
    cy.xpath("//h2[@class='section-title']").should('have.text',"Women's Readers")
    
}
applayPariceFilter(){
    const Random = Reuse.getRandomNumber(1,5)
    cy.xpath("//h4[normalize-space()='Price']").should('contain','Price')
    cy.get('input[name="data[Filter][price][]"]').eq(Random).click({force:true})
    cy.wait(3000)
    
}

}