/// <reference types = "Cypress"/>

import { Homepage } from "../pageObjects/Homepage"
import { CheckoutPage } from "../pageObjects/CheckoutPage"


const homepage = new Homepage
const checkout = new CheckoutPage

describe('CheckoutPage TS_004',function(){
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Returning false prevents Cypress from failing the test
          return false;
        });
    })

    it ('TC_EZ_046 - Validate a blank shopping cart page',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.validateBlankCart() //Validate Blank Cart
    })

    it ('TC_EZ_047 - Validate a shopping cart page after adding some product(s)',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.clickonSunglasses()//add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection()// add a product to cart without protection
        checkout.validateAllContentOnCartPage() //validate the shipping cart
    })

    it ('TC_EZ_048 - Validate the "Shopping Cart" page containing products without "Accident Protection"',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.validateAddAccidentProtectionFunctionalty() //AddAccidentProtectionFunctionalty

    })

    it ('TC_EZ_049 - Validate the "Edit" button from the Cart page',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.validateEditButtonFunctionaltyOnCartPage() //validate edit button functionalty
    })

    it ('TC_EZ_050 - Validate the "Remove Item" button',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.clickOnRemoveItemButton() //click on remove item button
    })

    it ('TC_EZ_051 - Validate the Quanity with a dropdown and the price',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.validateQuantityField('5')

    })

    it ('TC_EZ_052 - Validate the Empty or Invalid code in "Redeem Promo Code" ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.validateRedeemPromoCodeFunctionalty() // validate Invalid Redeem Promo Code Functionalty
    })

    it ('TC_EZ_053 - Validate the valid code in Redeem Promo Code ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.validateValidRedeemPromoCodeFunctionalty() // validate valid Redeem Promo Code Functionalty
    })

    it ('TC_EZ_054 - Validate a Shipping address page after checkout cart ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() 
        checkout.validateAllContentOnShippingAddress()
    })

    it ('TC_EZ_055 - Validate the "Shipping Address" options. ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() 
        checkout.validateAllContentOnShippingAddress()
    })

    it ('TC_EZ_056 - Validate the "Back" button on shipping address page ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.validateBackButtonOnShippingAddressPage() //validate Back Button On Shipping Address Page 
    })

    it ('TC_EZ_057 - Validate the Payment page after the shipping address ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content 
        checkout.validateAllContentOnShippingAndPaymentPage() //validate All Content On Shipping And Payment Page
    })

    it ('TC_EZ_058 - Validate the "Shipping Options" section in the "Payment" page ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content
        checkout.validateShippingOptionsSection() // validate Shipping Options Section
    })

    it ('TC_EZ_059 - Validate the "Charges" section in the Payment page ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content
        checkout.validateRedeemCodeFunctionality() //apply coupon and validate
       
    })

    it ('TC_EZ_060 - Validate the "Payment Information" section ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content
        checkout.validatePaymentInformationSection() //Validate Payment Information
    })

    it ('TC_EZ_061 - Validate the "Select Billing Address" box ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content
        checkout.validateSelectBillingAddressSection() //validate Select Billing Address Section
    })

    it ('TC_EZ_062 - Validate the "Add New Billing Address" button. ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content
        checkout.validateReviewsSection() //validate Reviews Section
    })

    it ('TC_EZ_063 - Validate the "Add New Billing Address" button. ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection() // add a product to cart without protection
        checkout.gotoCheckoutNowButton() //validate checkout now button
        checkout.addShippingAddress() //add all content
        checkout.goToBackButtonOnPaymentPage() // go To Back Button On Payment Page
        checkout.addPaymentInfo() 
    })

    it ('TC_EZ_064 - Verify that when the user deletes the product from the cart the protection should also get deleted. ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithProtection() //add A Product To Cart With Protection
        checkout.clickOnRemoveItemButton() 
    })

    it ('TC_EZ_065 - Verify that the user checkout without login ',function(){
        cy.visit('/')
        homepage.closeDiscountPOpup()
        checkout.goToSunglassesCatalog() //add a Sunglasses product from catalog
        checkout.addAProductToCartWithoutProtection()
        checkout.goToCheckoutAsAGuest()
        checkout.addShippingAddress()
        checkout.addPaymentInfo()
    })
})