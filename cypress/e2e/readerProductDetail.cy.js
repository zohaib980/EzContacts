/// <reference types = "Cypress"/>

import { Homepage } from "../pageObjects/Homepage"
import { ReaderProductDetail } from "../pageObjects/ReaderProductDetail"


const homepage = new Homepage
const readerProductDetail = new ReaderProductDetail

describe('ReaderProductDetail TS_018',function(){
    beforeEach(()=>{
        cy.visit('/readers')
        homepage.closeDiscountPOpup()
    })

    it ('TC_RDPD_001 - Verify the content on the Readers Product detail page shown correctly',function(){
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.validateAllContentOnProductDetailPage()
    })

    it ('TC_RDPD_002 - Validate the "RATINGS & REVIEWS" functionality on product detail page',function(){
        readerProductDetail.addLoginDetails()
        homepage.closeDiscountPOpup()
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.goToAddReview()
    })

    it ('TC_RDPD_003 - Validate the "QUESTIONS & ANSWERS" section and functionality on the product detail page',function(){
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.goToQuestionAnswersSection()
    })

    it ('TC_RDPD_004 - Verify that the user can add any Readers product to the Wishlist',function(){
        readerProductDetail.addLoginDetails()
        homepage.closeDiscountPOpup()
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.addAProductToWishList()
    })

    it ('TC_RDPD_005 - Validate "Add to Cart" functionality on the Readers product page including "Accident Protection"',function(){
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.addAProductToCartWithProtectionAndValidate()
    })

    it ('TC_RDPD_006 - Validate "Add to Cart" functionality on the Readers product page Excluding "Accident Protection" ',function(){
        readerProductDetail.goToFirstProductDetailPage()
        readerProductDetail.addAProductToCartWithoutProtectionAndValidate()
    })

})