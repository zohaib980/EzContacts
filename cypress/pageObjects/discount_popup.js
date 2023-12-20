export class DiscountPopup
{
    enterEmail(email)
    {
        cy.get('#ltkpopup-email').type(email)
    }
    clickActivateOffer()
    {
        cy.get('#ltkpopup-submit').click()
    }
    getConfirmationLabel()
    {
        cy.get('#ltkpopup-confirm-label > h3 > .ltkpopup-line-2').should('contain.text',"Thanks! You're already on the list")
    }
    getInvalidEmailError()
    {
        cy.get('.ltkpopup-error-message').should('contain.text','Please enter a valid email');
    }
    getCouponandSuccessMsg()
    {
        cy.get('#ltkpopup-confirm-label > h3 > .ltkpopup-line-2').should('have.text',"You're In!")
        cy.get('.ltkpopup-lg > .ltkpopup-icon-ctc').should('be.visible')
    }
    enterMobileNumber(mobile)
    {
        cy.get('#ltkpopup-mobile').type(mobile)
    }    
    clickSignupforMobileAlert()
    {
        cy.get('#ltkpopup-mobile-submit').click()
    }
    confirmSubcriptionMsg()
    {
        cy.get('.ltkpopup-confirm-step-3 > #ltkpopup-confirm-sms-label > h3 > .ltkpopup-line-2').should('contain.text', 'Thanks')
    }
    getNoThankslink()
    {
       return cy.get('.ltkpopup-no-thanks > .ltkpopup-close')
    }
    getCrossIcon()
    {
        return cy.get('#ltkpopup-close-button > .ltkpopup-close')
    }
    getPrivacyPolicy()
    {
        return cy.get('[href="https://www.ezcontacts.com/company/privacy-policy"]')
    }
    getTermOfUse()
    {
        return cy.get('[href="https://www.ezcontacts.com/company/terms-and-conditions"]')
    }
}