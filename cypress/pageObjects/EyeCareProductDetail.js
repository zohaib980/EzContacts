export class EyeCareProductDetail
{
    addLoginDetails()
    {
        cy.visit('https://www.ezcontacts.com/account/sign-in')
        cy.get('#UserEmail').type('testqatester81@gmail.com')
        cy.get('#new-password').type('123456')
        cy.get('#sign-in-submit-btn').should('have.value','Sign in').click()
        cy.get(':nth-child(18) > .dropdown-toggle').click()
    }
    goToAddReview()
    {
        cy.get('#reviews').should('contain.text','RATINGS & REVIEWS')
        cy.get('.tt-c-reviews-summary__write-review-wrap > .tt-o-button').click()
        cy.wait(3000)
        cy.get('.tt-c-review-form-header__heading').should('contain.text','Please share your experience')
        cy.get('#tt-review-form-rating').should('exist')
        cy.get('.tt-c-review-form__overall-rating > .tt-c-rating > :nth-child(4)').click()
        cy.get('#tt-review-form-text').type('Very Good Experience')
        cy.get('#tt-review-form-title').type('Sunglasses')  
        cy.get('.tt-c-review-form__actions > .tt-o-button').click()
        cy.wait(3000)
        cy.get('.tt-o-text-field').eq(0).type('john')
        cy.get('.tt-o-text-field').eq(1).type('doe')
        cy.get('.tt-o-text-field').eq(2).type('testqatester81@gmail.com')
        cy.get('.tt-c-auth__email-form > .tt-o-button').click()
        cy.get('.tt-o-header__heading').should('contain.text','Thanks! One last step')
    }
    goToQuestionAnswersSection()
    {
        cy.get('#questions').should('contain.text','QUESTIONS & ANSWERS')
        cy.get('.tt-o-search-field__input').type('details about lenses?')
        cy.get('.tt-c-instant-answers__submit-wrap > .tt-o-button').click()
        cy.get('.tt-c-instant-answers__action-buttons > .tt-o-button--primary').click()
        cy.get('.tt-c-auth__body > .tt-o-button--link').click()
        cy.get('.tt-o-popover.tt-o-popover--success').should('contain.text','Thanks! Your question has been submitted. Please check back here for answers.')
    }
    goToFirstProductDetailPage()
    {
        cy.get(':nth-child(1) > .mask-wrap > :nth-child(2) > .glass-mask').eq(0).click()
    }
    addAProductToWishList()
    {
        cy.get('.add-to-wishlist-btn').click()
        cy.get('.top-login > [href="/account/main"]').click()
        cy.get('.section.m-off > .account-box > .account-left-col > .nav > :nth-child(7) > a').should('have.attr','href','/account/wishlist').click()
        cy.get('.mini-order').should('exist')
        cy.go('back')
        cy.go('back')
        cy.get('.add-to-wishlist-btn').click()
    }
    validateAllContentOnProductDetailPage()
    {
        cy.get('.product-right > :nth-child(1) > .bf-discount').should('exist')
        cy.get('.add-to-wishlist-btn').should('exist')
        cy.get('.tt-c-teaser').should('exist')
        cy.get('.select-size > :nth-child(1) > .col-md-3').should('contain.text','Quantity ')
        cy.get('.col-md-12 > .btn-cart > .btn').should('contain.text','Add to Cart')
        cy.get('.col-md-12 > div > :nth-child(2) > span').should('contain.text','EZPoints: ')
        cy.get('.ez-points-reward-icon').click()
        cy.get('.ez-points-footer').should('exist')
        cy.get('.close-css').click()
        cy.get('#shipAvailability > strong').should('contain.text',' AVAILABILITY ')
        cy.get('.product-description > .nav > .active').should('contain.text','Details')
        cy.get('#details-desc').should('exist')
        cy.get('.readmore-js-toggle').should('contain.text','Read More')
        cy.get('.caps > a').should('contain.text','Need Help?')
        cy.get('.mar-top-0 > a').should('contain.text','Contact Us Here')
        cy.get(':nth-child(3) > .no-margin-top').should('exist')
    }
    addAProductToCartAndValidate()
    {
    cy.get('.price-block > .curr-price').then((element)=>{
        const ele = element.text()
        var elem = ele.split("$") 
        const price = elem[1].trim() //get the price
        cy.log(price)
        //apply coupon code
        cy.get('.col-md-12 > .btn-cart > .btn').should('contain.text','Add to Cart').click()
        cy.get('.cart-product').should('exist')
        cy.get('tbody > :nth-child(2) > :nth-child(2)').then((element1)=>{
            const ele1 = element1.text()
            var elem1 = ele1.split("$") 
            const price1 = elem1[1].trim() //get the price
            cy.log(price1)  
            expect(Number(price1)).be.equal(Number(price)) //Validate that total is updated after applying promo
            cy.get('.jsRemoveCartProduct').click()  
        })    
    })
    }
}