/// <reference types = "Cypress"/>

import { Homepage } from "../pageObjects/Homepage"
import { ContactLensesProductDetail } from "../pageObjects/ContactLensesProductDetail"


const homepage = new Homepage
const contactLensesProductDetail = new ContactLensesProductDetail

describe('ContactLensesProductDetail TS_004',function(){
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Returning false prevents Cypress from failing the test
          return false;
        });
    })

    it ('TC_EZ_328 - Verify the content on the Contact-lenses Product detail page shown correctly',function(){
      cy.visit('https://www.ezcontacts.com/contact-lenses')
      homepage.closeDiscountPOpup()
      contactLensesProductDetail.goToFirstProductDetailPage()
      contactLensesProductDetail.validateAllContentOnProductDetailPage()
    })

    it ('TC_EZ_329 - Validate the "RATINGS & REVIEWS" functionality on product detail page',function(){
      contactLensesProductDetail.addLoginDetails()
      homepage.closeDiscountPOpup()
      contactLensesProductDetail.goToFirstProductDetailPage()
      contactLensesProductDetail.goToAddReview()
    })

    it ('TC_EZ_330 - Validate the "QUESTIONS & ANSWERS" section and functionality on product detail page',function(){
      cy.visit('https://www.ezcontacts.com/contact-lenses')
      homepage.closeDiscountPOpup()
      contactLensesProductDetail.goToFirstProductDetailPage()
      contactLensesProductDetail.goToQuestionAnswersSection()
    })

    it ('TC_EZ_332 - Validate the "Add to Cart" functionality on the contact-lenses product page after setting eyes prescription separately',function(){
      cy.visit('https://www.ezcontacts.com/contact-lenses')
      homepage.closeDiscountPOpup()
      contactLensesProductDetail.goToFirstProductDetailPage()
      contactLensesProductDetail.addAProductToCartAndValidate()
      contactLensesProductDetail.removeAProductFromCart()
    })

    it ('TC_EZ_333 - Validate the "Add to Cart" functionality on the contact-lenses product page after setting only Right Eye (OD) prescription',function(){
      cy.visit('https://www.ezcontacts.com/contact-lenses')
      homepage.closeDiscountPOpup()
      contactLensesProductDetail.goToFirstProductDetailPage()
      contactLensesProductDetail.addProductToCartWithRightEyeOD()
      contactLensesProductDetail.removeAProductFromCart()
    })

    it ('TC_EZ_334 - Validate the "Add to Cart" functionality on the contact-lenses product page after setting only Left Eye (OD) prescription',function(){
      cy.visit('https://www.ezcontacts.com/contact-lenses')
      homepage.closeDiscountPOpup()
      contactLensesProductDetail.goToFirstProductDetailPage()
      contactLensesProductDetail.addProductToCartWithLeftEyeOD()
      contactLensesProductDetail.removeAProductFromCart()
    })

    it ('TC_EZ_335 - Validate the "Add to Cart" functionality on the contact-lenses product page after enabling Same prescription for both eyes',function(){
      cy.visit('https://www.ezcontacts.com/contact-lenses')
      homepage.closeDiscountPOpup()
      cy.selectRandomProduct()
      contactLensesProductDetail.addAProductToCartAndValidate()
      cy.go("back")
      cy.go("back")
      cy.selectRandomProduct()
      contactLensesProductDetail.addAProductToCartAndValidate()      //incomplete
    })

    it ('TC_EZ_336 - Validate on the contact-lenses product if user clicks on "Add to cart" without selecting any option app shows an error',function(){
      cy.visit('https://www.ezcontacts.com/contact-lenses')
      homepage.closeDiscountPOpup()
      contactLensesProductDetail.goToFirstProductDetailPage() 
      contactLensesProductDetail.addProductToCartWithoutSelect()
    })
})    