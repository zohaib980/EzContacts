/// <reference types = "Cypress"/>

import { Homepage } from "../pageObjects/Homepage"
import { ReaderProductDetail } from "../pageObjects/ReaderProductDetail"


const homepage = new Homepage
const readerProductDetail = new ReaderProductDetail

describe('ReaderProductDetail TS_004',function(){
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Returning false prevents Cypress from failing the test
          return false;
        });
    })

    it ('TC_EZ_337 - Verify the content on the Readers Product detail page shown correctly',function(){
        cy.visit('https://www.ezcontacts.com/readers')
        homepage.closeDiscountPOpup()
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.validateAllContentOnProductDetailPage()
    })

    it ('TC_EZ_338 - Validate the "RATINGS & REVIEWS" functionality on product detail page',function(){
        readerProductDetail.addLoginDetails()
        homepage.closeDiscountPOpup()
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.goToAddReview()
    })

    it ('TC_EZ_339 - Validate the "QUESTIONS & ANSWERS" section and functionality on the product detail page',function(){
        cy.visit('https://www.ezcontacts.com/readers')
        homepage.closeDiscountPOpup()
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.goToQuestionAnswersSection()
    })

    it ('TC_EZ_340 - Verify that the user can add any Readers product to the Wishlist',function(){
        readerProductDetail.addLoginDetails()
        homepage.closeDiscountPOpup()
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.addAProductToWishList()
    })

    it ('TC_EZ_341 - Validate "Add to Cart" functionality on the Readers product page including "Accident Protection"',function(){
        cy.visit('https://www.ezcontacts.com/readers')
        homepage.closeDiscountPOpup()
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.addAProductToCartWithProtectionAndValidate()
    })

    it ('TC_EZ_342 - Validate "Add to Cart" functionality on the Readers product page Excluding "Accident Protection" ',function(){
        cy.visit('https://www.ezcontacts.com/readers')
        homepage.closeDiscountPOpup()
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.addAProductToCartWithoutProtectionAndValidate()
    })

})