/// <reference types = "Cypress"/>

import { Homepage } from "../pageObjects/Homepage"
import { EyeCareProductDetail } from "../pageObjects/EyeCareProductDetail" 

const homepage = new Homepage
const eyeCareProductDetail = new EyeCareProductDetail

describe('EyeCareProductDetail TS_019',function(){
    it ('TC_ECPD_001 - Verify the content on the EyeCare Product detail page shown correctly',function(){
        cy.visit('https://www.ezcontacts.com/eye-care')
        homepage.closeDiscountPOpup()
        eyeCareProductDetail.goToFirstProductDetailPage()
        eyeCareProductDetail.validateAllContentOnProductDetailPage()
    })

    it ('TC_ECPD_002 - Validate the "RATINGS & REVIEWS" functionality on product detail page',function(){
        eyeCareProductDetail.addLoginDetails()
        homepage.closeDiscountPOpup()
        eyeCareProductDetail.goToFirstProductDetailPage()
        eyeCareProductDetail.goToAddReview()
    })

    it ('TC_ECPD_003 - Validate the "QUESTIONS & ANSWERS" section and functionality on the product detail page',function(){
        cy.visit('https://www.ezcontacts.com/eye-care')
        homepage.closeDiscountPOpup()
        eyeCareProductDetail.goToFirstProductDetailPage()
        eyeCareProductDetail.goToQuestionAnswersSection()
    })

    it ('TC_ECPD_004 - Verify that the user can add any EyeCare product to the Wishlist',function(){
        eyeCareProductDetail.addLoginDetails()
        homepage.closeDiscountPOpup()
        eyeCareProductDetail.goToFirstProductDetailPage()
        eyeCareProductDetail.addAProductToWishList()
    })

    it ('TC_ECPD_005 - Validate "Add to Cart" functionality on the EyeCare product page ',function(){
        cy.visit('https://www.ezcontacts.com/eye-care')
        homepage.closeDiscountPOpup()
        eyeCareProductDetail.goToFirstProductDetailPage()
        eyeCareProductDetail.addAProductToCartAndValidate()
    })   

})