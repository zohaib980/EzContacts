
///<reference types='Cypress'/>
import { DiscountPopup } from "../pageObjects/Discount_popup"
import { ReuseableCode } from "../support/ReuseableCode"

const discount_popup = new DiscountPopup();
const reuseableCode = new ReuseableCode();

describe('discount_popup TS_001', () => {
  
  let data
  before(function(){
    //Get data from fixture file
    cy.fixture('example').then(function(fdata)   //must have to resolve the promise using then() which fixture returns
    {
        data= fdata //Creating a new global data variable using this.data and assigning the data to it
    })
})

  it('TC_EZ_001 - Verify that (Please Enter a Valid email address) appear on invalid email', () => {

    cy.visit('/')
    cy.wait(2000)
    discount_popup.enterEmail(data.incorrectEmail);
    discount_popup.clickActivateOffer();
    discount_popup.getInvalidEmailError()
  })
  
  it('TC_EZ_002 - Verify that "YOURE IN!" along with the Discount code is shown on valid email', () => {
    cy.visit('/')
    cy.wait(2000)
    const randomString = reuseableCode.generateRandomString(8);
    discount_popup.enterEmail(randomString+'@yopmail.com');
    discount_popup.clickActivateOffer();
    discount_popup.getCouponandSuccessMsg();
  })
  
  it('TC_EZ_003 - Verify that "Thanks Your are already on the list" is shown on used valid email', () => {
    cy.visit('/')
    cy.wait(2000)
    discount_popup.enterEmail(data.correctEmail);
    discount_popup.clickActivateOffer();
    discount_popup.getConfirmationLabel()
  })

  it('TC_EZ_004 - Verify that after getting a discount code user can SIGNUP for mobile alerts by entering a valid phone number', () => {

    cy.visit('/')
    cy.wait(2000)
    const randomString = reuseableCode.generateRandomString(8)
    discount_popup.enterEmail(randomString+'@yopmail.com');
    discount_popup.clickActivateOffer();
    discount_popup.getCouponandSuccessMsg();
    discount_popup.enterMobileNumber(data.correctMobileNo)
    discount_popup.clickSignupforMobileAlert()
    discount_popup.confirmSubcriptionMsg();
  })

  it('TC_EZ_005 - Verify that on the discount popup "No thanks" link is shown', () => {

    cy.visit('/')
    cy.wait(2000)
    discount_popup.getNoThankslink().should('contain.text','No, thanks')
    discount_popup.getNoThankslink().click().should('not.exist')
  })
  it('TC_EZ_006 - Verify that on the discount code "Cross" icon is shown', () => {

    cy.visit('/')
    cy.wait(2000)
    discount_popup.getCrossIcon().should('be.visible')
    discount_popup.getCrossIcon().click().should('not.exist')
  
  })

  it('TC_EZ_007 - Verify that on the discount code "Privacy Policy" and "Terms of Use" links are available', () => {

    cy.visit('/')
    cy.wait(2000)
    discount_popup.getPrivacyPolicy().should('have.attr','href','https://www.ezcontacts.com/company/privacy-policy')
    discount_popup.getTermOfUse().should('have.attr','href','https://www.ezcontacts.com/company/terms-and-conditions')
  })
})