/// <reference types = "Cypress"/>

import{ Homepage } from "../pageObjects/Homepage"
import { ReuseableCode } from "../support/ReuseableCode"

const homepage = new Homepage
const reuseableCode = new ReuseableCode

describe('HomePage TS_002', function(){
    it ('TC_EZ_008 - Validate the "Sunglasses" drop-down category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.hoverOnSunglassesMenu() //Hover on Sunglasses Menu
        homepage.validateMensSunglassesMenuOptions() //Validate Men's menu options
        homepage.validateWomensSunglassesMenuOptions() //Validate Women's menu options
        homepage.validateChildrenSunglassesMenuOptions() //Validate Children's menu options
        homepage.validateFrameShapeOnSunglasses() //Validate Frame shapes on sunglasses
    })

    it ('TC_EZ_009 - Validate the "Eyeglasses" drop-down category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.hoverOnEyeglassesMenu() //Hover on Eyeglasses Menu
        homepage.verifyFrameShapesOnEyeglasses() //Verify Frameshapes on eyeglasses
        homepage.validateMensEyeglassesMenuOptions() //Validate Men's eyeglasses menu options
        homepage.validateWomensEyeglassesMenuOptions() //Validate Women eyeglasses menu options
        homepage.validateChildrenEyeglassesMenuOptions() //Validate Children eyeglasses menu options
    })

    it ('TC_EZ_010 - Validate the "Contact Lenses" drop-down category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.hoverOnContactLenseMenu() //Hover on Contact Lenses Menu
        homepage.verifyPopularBrandsOnContectLense() //Verify Popular Brands on Contact Lense
    })

    it ('TC_EZ_011 - Validate that the "Reader" tab from the navbar is functional', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.gotoReaderPage() //Validate and go to reader page

    })

    it ('TC_EZ_012 - Validate the "Eye Care" drop-down category', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.hoverOnEyeCareMenu() //Hover on Eyecare Menu
        homepage.validateEyecareMenu() //validate Eyecare Categories

    })

    it ('TC_EZ_013 - Validate that the "Clearance" Menu from the navbar is functional', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.gotoClearancePage() //Validate and goto clearance page
    })
    
    it ('TC_EZ_014 - Validate that the "SALES" tab from the navbar is functional', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validatePromotionBanner() //validate Promotion banner
        homepage.validateFreeShippingInfo() //validate Free shipping info
        homepage.validateLowestPriceGuaranteeInfo() //validate lowest Price Guarantee info
        homepage.validateWelcomeMessage() //Validate Welcome Message
        homepage.validateTollFreeNumberInfo() //Validate tollfree number
        homepage.validateLoginLink() //Validate Login link
        homepage.validateRorderLink() //validate Reorder link
        homepage.validateCreateAccountLink() //validate Create Account link 
        homepage.validateCartIcon() //validate the cart icon
        homepage.validateCompanyLogo() //validate company logo
    })

    it ('TC_EZ_015 - Verify search bar functionality', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.verifyTheSearchSuggestionDropdown('Rayban ') //Enter keyword and validate suggestion dropdown
    })

    it ('TC_EZ_016 - Verify the hero section is shown correctly and its functionality', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.verifyTheHeroSection() //Verify the main slider
    })

    it ('TC_EZ_017 - Verify the "Deal section" products are functioning', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.verifyDealSectionProducts() //Verify the deal section products
    })

    it ('TC_EZ_018 - Validate the "Hows Your Vision?" option', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.goToVisionSectionPage() //
    })

    it ('TC_EZ_019 - Validate the Product category sections shown under "Hows Your Vision" option', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validateSunglassesSection() //Validate Sunglasses section
        homepage.validateWomensFrameSection() //Validate Womens Frame section
        homepage.validateMenFrameSection() //Validate Mens Frame section
        homepage.validateOnlineVisionSection() //Validate OnlineVisionTest section
        homepage.validateContactLenseSection() //Validate contact lense section
    })

    it ('TC_EZ_020 - Verify that brand logo icons are shown and redirect the user to specific product page', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validateBrandLogoIcons() //Validate brand logo icons
    })

    it ('TC_EZ_021 - Validate the Email subscription option at the top of footer', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        const email = reuseableCode.generateRandomString(6)+ '@yopmail.com'
        homepage.activeEmailSubscription(email)
    })

    it ('TC_EZ_022 - Validate the ACCOUNT links in the footer section', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validateAccountSectionLinksInFooter() //Validate Account section links
    })

    it ('TC_EZ_023 - Validate the CATEGORIES links in the footer section', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validateCategoriesSectionLinksInFooter() //Validate Categories
    })

    it ('TC_EZ_024 - Validate the "CUSTOMER CARE" links in footer section', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validateCustomerCareSectionLinksInFooter() //Validate Customer Care section
    })

    it('TC_EZ_025 - Validate the "HOW TOS" links in footer section', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validateHowsToSectionLinksInFooter() //How To's section 
    })

    it ('TC_EZ_026 - Validate the "RESOURCES" links in the footer section', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validateResourcesLinksInFooterSection() //Resources links 
    })  
  
    it ('TC_EZ_027 - Validate the "CONTACT US" icon in the footer section', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validateContactUsSectonInFooter() //Contact US Section
    })

    it ('TC_EZ_028 - Validate the "Privacy Policy" & "Terms of Service" links in the footer section', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validatePrivacyPolicy_TermsOfServiceLinks() //Validate PrivacyPolicy & TermsOfServiceLinks
    })

    it ('TC_EZ_029 - Validate the "Social icons" links in footer section', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validateSocialIconsInFooter() //Validate Social Icons
    })

    it ('TC_EZ_030 - Validate the copyright claim info in footer section', function(){
        cy.visit('/')
        homepage.closeDiscountPOpup() //close discount popup
        homepage.validateCopyRight() //Validate copyright info
    })
})