/// <reference types = "Cypress"/>
import 'cypress-iframe'
import { AccountPage } from "../pageObjects/AccountPage"
import { Homepage } from "../pageObjects/Homepage"

const accountPage = new AccountPage
const homepage = new Homepage

describe('AccountPage TS_003 ',function(){
    
    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Returning false prevents Cypress from failing the test
          return false;
        });
      });

    it ('TC_EZ_031 - Validate the sign-in page contents', function(){
        cy.visit('/account/sign-in')
        accountPage.validateSigninPageContent() //Only validate the contents on signin page
        
    })

    it('TC_EZ_032 - Validate the Sign-in Functionality', function(){
        cy.visit('/account/sign-in')
        accountPage.signin('testqatester81@gmail.com','123456') //Signin to the app and validate
    })

   /* it('TC_EZ_033 - (Positive) Validate Order Locator functionality on Sign-in page', function(){
        cy.visit('/account/sign-in')
        accountPage.validateOrder()  //dummy data inserted to validate the error message
        //Need a correct order number, email and postal code
        
    })
    */
    it('TC_EZ_034 - (Negative) Validate Order Locator functionality on Sign-in page', function(){
        cy.visit('/account/sign-in')
        accountPage.validateOrder()  //dummy data inserted to validate the error message
        
    })
    it('TC_EZ_035 - Validate the "Account settings" section on "MY ACCOUNT" main page', function(){
        cy.visit('/account/sign-in')
        accountPage.signin('testqatester81@gmail.com','123456')
        accountPage.validateAccountSettingTab()  //validate Account setting tab
         //update account setting
        accountPage.updateAccountSettings('John','Doe','4558669557') //firstName, lastName, phone
    })

    it('TC_EZ_036 - Validate the "Address & Payment" section on "MY ACCOUNT" main page', function(){
        cy.visit('/account/sign-in')
        accountPage.signin('johndoe@yopmail.com','123456')
        //Validate Address & Payment tab
        accountPage.goToAddressAndShippingSection()
        accountPage.validateAddressAndPaymentTab()
    })
    it('TC_EZ_037 - Validate the "+Add Shipping Address" functionality in "Address & Payment" section on the "MY ACCOUNT" main page', function(){
        cy.visit('/account/sign-in')
        accountPage.signin('johndoe@yopmail.com','123456')
        accountPage.goToAddressAndShippingSection()
        //Add shipping Address
        accountPage.addShippingAddress()
    })

    it('TC_EZ_038 - Validate the "+Add Payment Method" functionality in "Address & Payment" section on the "MY ACCOUNT" main page', function(){
        cy.visit('/account/sign-in')
        accountPage.signin('johndoe@yopmail.com','123456')
        accountPage.goToAddressAndShippingSection()
        //Add Payment Method
        accountPage.addPaymentMethod()
        //Delete Payment Method
        accountPage.deletePaymentMethod()
    })

    it('TC_EZ_039 - Validate the "Order History" section on "MY ACCOUNT" main page', function(){
        cy.visit('/account/sign-in')
        accountPage.signin('johndoe@yopmail.com','123456')
        //Validate the order history section
        accountPage.validateOrderHistorySection()
    })
    
    it('TC_EZ_040 - Validate the "Rx Information" section on "MY ACCOUNT" main page', function(){
        cy.visit('/account/sign-in')
        accountPage.signin('johndoe@yopmail.com','123456')
        //Validate the Rx Information
        accountPage.validateRxInformationSection()
    })

    it('TC_EZ_041 - Validate the "Add a New Prescription" (Eyeglasses) functionality in "Rx Information" section on the "MY ACCOUNT" main page', function(){
        cy.visit('/account/sign-in')
        accountPage.signin('johndoe@yopmail.com','123456')
        //Validate RX information and 
        accountPage.validateRxInformationSection().click() // go to add prescription
        //Add an eyeglasses Prescription
        accountPage.validateEyeglassesPrescription()
        //validate added prescription
        accountPage.validateAddedPrescription()
        //Delete the Prescription
        accountPage.deleteAddedPrescription()

    })
    
    it('TC_EZ_042 - Validate the "EZ Points" section on the "MY ACCOUNT" main page', function(){
        cy.visit('/account/sign-in')
        accountPage.signin('johndoe@yopmail.com','123456')
        //validate EZ Points section
        accountPage.validateEZPointsSection()
    })

    it('TC_EZ_043 - Validate the "Recent" section on the "MY ACCOUNT" main page', function(){
        cy.visit('/account/sign-in')
        accountPage.signin('johndoe@yopmail.com','123456')
        //validate Recent section
        accountPage.validateRecentSection()
    })
    
    it('TC_EZ_044 - Validate the "Wishlist" section on the "MY ACCOUNT" main page', function(){
        cy.visit('/account/sign-in')
        accountPage.signin('johndoe@yopmail.com','123456')
        accountPage.goToWishilistSection() //validate Wishlist section
        accountPage.addRadomProductToWishList() //Add a Random product to wishlist
        accountPage.validateWishListSection() //validate Wishlist Section
        accountPage.removeFirstProductFromWishList() //Remove first product from wishlist
    })
    it('TC_EZ_045 - Validate the "Online Vision Test" section on the "MY ACCOUNT" main page', function(){
        cy.visit('/account/sign-in')
        accountPage.signin('johndoe@yopmail.com','123456')
        //Validate online vision test section
        accountPage.validateOnlineVisionTestSection()
    })
})
