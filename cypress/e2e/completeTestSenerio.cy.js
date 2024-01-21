///<reference types = "Cypress"/>
import { Homepage } from "../pageObjects/Homepage";
import { SunglassesProductDetail } from "../pageObjects/SunglassesProductDetail";
import { CheckoutPage } from "../pageObjects/CheckoutPage";
import { ContactLensesProductDetail } from "../pageObjects/ContactLensesProductDetail";
import{EyeglassesProductDetail } from "../pageObjects/EyeglassesProductDetail"
import { CompleteTestCase } from "../pageObjects/CompleteTestCase";

const homepage = new Homepage
//const CompleteTask = new SunglassesProductDetail
const CompleteTask = new CheckoutPage
const EyeCare = new EyeglassesProductDetail
const ContactLens = new ContactLensesProductDetail
const CompleteTest1 = new CompleteTestCase

describe('Complete Test senerios ', function(){
    beforeEach(()=>{
        
    })
    it('TC_CTS_001 - Validate the complete process of Buying a Sunglasses product',()=>{
        cy.visit('/sunglasses')
        homepage.closeDiscountPOpup()
        cy.selectRandomProduct()
        CompleteTask.addAProductToCartWithProtection()
        //checkout.addAProductToCartWithProtection()
        CompleteTask.gotoCheckoutNowButton()
        CompleteTask.addShippingAddress()
        CompleteTask.addPaymentInfo()
    })
    it('TC_CTS_002 - Validate the complete process of Buying an Eyeglasses product',function(){
        cy.visit('/eyeglasses')
        homepage.closeDiscountPOpup()
        //cy.selectRandomProduct()
        EyeCare.goToFirstProductDetailPage()
        EyeCare.selectLensType("Distance (Single Vision)")
        EyeCare.selectLensTypeDetail()
        EyeCare.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
        EyeCare.addLensColor1("Transitions", "Transitions® Gen 8™")
        EyeCare.addProductToCartwithProtection()
        CompleteTask.gotoCheckoutNowButton()
        CompleteTask.addShippingAddress()
        CompleteTask.addPaymentInfo()


    })
    it('TC_CTS_003 - Validate the complete process of Buying a Contact Lens product',function(){
        cy.visit('/contact-lenses')
        homepage.closeDiscountPOpup()
        cy.get(':nth-child(1) > .mask-wrap > :nth-child(2) > .glass-mask').eq(0).click()
        ContactLens.addAProductToCartAndValidate()
        CompleteTask.gotoCheckoutNowButton()
        CompleteTask.addShippingAddress()
        CompleteTask.addPaymentInfo()
    })
    it('TC_CTS_004 - Validate the complete process of Buying a Reader product',function(){
        cy.visit('/readers')
        homepage.closeDiscountPOpup()
        CompleteTest1.ReaderCompleteCheckoutProcces()
        CompleteTask.gotoCheckoutNowButton()
        CompleteTask.addShippingAddress()
        CompleteTask.addPaymentInfo()

    })
    it('TC_CTS_005 - Validate the complete process of Buying an Eye-Care product',function(){
        cy.visit('/eye-care')
        homepage.closeDiscountPOpup()
        CompleteTest1.EyeCareCompleteCheckoutProcess()
        CompleteTask.gotoCheckoutNowButton()
        CompleteTask.addShippingAddress()
        CompleteTask.addPaymentInfo()


    })
})
