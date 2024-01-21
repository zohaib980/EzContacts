/// <reference types = "Cypress"/>

import { Homepage } from "../../pageObjects/Homepage"
import { EyeglassesProductDetail } from "../../pageObjects/EyeglassesProductDetail"
import {AccountPage} from "../../pageObjects/AccountPage"
import {MenuOptions} from "../../pageObjects/MenuOptions"
 

const homepage = new Homepage
const eyeglassesProductDetail = new EyeglassesProductDetail
const accountPage = new AccountPage
const menuOptions = new MenuOptions

describe('TS_016 - EyeglassesProductDetail',function(){
  beforeEach(()=>{
    cy.visit('/eyeglasses')
    homepage.closeDiscountPOpup()
    })

    it ('TC_EPD_001 - Verify the content on the Eyeglasses Product detail page shown correctly',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.validateAllContentOnProductDetailPage()
    })

    it('TC_EPD_002 - Validate the "RATINGS & REVIEWS" functionality on product detail page',function(){
      cy.get('.top-login > [href="/account/sign-in"]').click()
      accountPage.signin('testqatester81@gmail.com','123456')
      menuOptions.goToEyeglassesCatalog() 
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.goToAddReview()
    })

    it ('TC_EPD_003 - Validate the "QUESTIONS & ANSWERS" section and functionality on product detail page',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.goToQuestionAnswersSection()
    })

    it ('TC_EPD_004 - Verify that the user can add any eyeglasses product to Wishlist',function(){
      cy.get('.top-login > [href="/account/sign-in"]').click()
      accountPage.signin('testqatester81@gmail.com','123456')
      menuOptions.goToEyeglassesCatalog()
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.addAProductToWishList()
      eyeglassesProductDetail.removeProductFromWishlist()
    })

    it ('TC_EPD_005 - Validate "Add to Cart" functionality on the eyeglasses product page without adding Accident Protection and adding a custom Lense',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
      eyeglassesProductDetail.selectLensTypeDetail()
      eyeglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
      eyeglassesProductDetail.addLensColor("Clear")
      eyeglassesProductDetail.addProductToCartwithoutProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    })  

    it ('TC_EPD_006 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
      eyeglassesProductDetail.selectLensTypeDetail()
      eyeglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
      eyeglassesProductDetail.addLensColor("Color Tinted")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 

    it ('TC_EPD_007 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Impact Resistant Polycarbonate)',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
      eyeglassesProductDetail.selectLensTypeDetail()
      eyeglassesProductDetail.selectLensDetails("Impact Resistant Polycarbonate", "Super Hydrophobic AR")
      eyeglassesProductDetail.addLensColorWithGradient()
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    })
    
    it ('TC_EPD_008 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Super Thin 1.67 Hi Index)',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
      eyeglassesProductDetail.selectLensTypeDetail()
      eyeglassesProductDetail.selectLensDetails("Super Thin 1.67 Hi Index", "Superior Anti Reflective")
      eyeglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 

    it ('TC_EPD_009 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Ultra Thin 1.74 Hi Index)',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
      eyeglassesProductDetail.selectLensTypeDetail()
      eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Enhanced Anti Reflective")
      eyeglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 
    it ('TC_EPD_010 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Blue Light Blocking AR (BlueShield))',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
      eyeglassesProductDetail.selectLensTypeDetail()
      eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
      eyeglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 

    it ('TC_EPD_011 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Blue-Violet Light AR (Crizal Prevencia))',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Distance (Single Vision)")
      eyeglassesProductDetail.selectLensTypeDetail()
      eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue-Violet Light AR (Crizal Prevencia)")
      eyeglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Brown")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 

    it ('TC_EPD_012 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Reading (Single Vision))',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Reading (Single Vision)")
      eyeglassesProductDetail.selectLensTypeDetail()
      eyeglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
      eyeglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Graphite Green")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 

    it ('TC_EPD_013 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Impact Resistant Polycarbonate)',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Reading (Single Vision)")
      eyeglassesProductDetail.selectLensTypeDetail()
      eyeglassesProductDetail.selectLensDetails("Impact Resistant Polycarbonate", "Super Hydrophobic AR")
      eyeglassesProductDetail.addLensColor1("Photochromic Light-Adaptive", "Photochromic Brown")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 

    it ('TC_EPD_014 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Super Thin 1.67 Hi Index)',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Reading (Single Vision)")
      eyeglassesProductDetail.selectLensTypeDetail()
      eyeglassesProductDetail.selectLensDetails("Super Thin 1.67 Hi Index", "Superior Anti Reflective (Crizal Easy Pro)")
      eyeglassesProductDetail.addLensColor1("Photochromic Light-Adaptive", "Photochromic Brown")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 

    it ('TC_EPD_015 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense (Ultra Thin 1.74 Hi Index)',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Reading (Single Vision)")
      eyeglassesProductDetail.selectLensTypeDetail()
      eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Enhanced Anti Reflective (Crizal Sapphire HR)")
      eyeglassesProductDetail.addLensColor("Clear")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 

    it ('TC_EPD_016 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Blue Light Blocking AR (BlueShield)',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Reading (Single Vision)")
      eyeglassesProductDetail.selectLensTypeDetail()
      eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
      eyeglassesProductDetail.addLensColor("Color Tinted")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 

    it ('TC_EPD_017 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Blue-Violet Light AR (Crizal Prevencia)',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Reading (Single Vision)")
      eyeglassesProductDetail.selectLensTypeDetail()
      eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue-Violet Light AR (Crizal Prevencia)")
      eyeglassesProductDetail.addLensColorWithGradient()
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 

    it ('TC_EPD_018 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensTypeBifocal("Standard Progressive")
      eyeglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
      eyeglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 

    it ('TC_EPD_019 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensTypeBifocal("Premium Progressive")
      eyeglassesProductDetail.selectLensDetails("Impact Resistant Polycarbonate", "Super Hydrophobic AR")
      eyeglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 

    it ('TC_EPD_020 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensTypeBifocal("Bifocal - Flat Top 28")
      eyeglassesProductDetail.selectLensDetails("Super Thin 1.67 Hi Index", "Superior Anti Reflective (Crizal Easy Pro)")
      eyeglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Grey")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    }) 

    it ('TC_EPD_021 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensTypeBifocal("Bifocal - Flat Top 35")
      eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Enhanced Anti Reflective (Crizal Sapphire HR)")
      eyeglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Brown")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    })
    
    it ('TC_EPD_022 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensTypeBifocal("Standard Progressive")
      eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
      eyeglassesProductDetail.addLensColor1("Transitions", "Transitions® Gen 8™ Graphite Green")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    })

    it ('TC_EPD_023 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense Progressive / Bifocal',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensTypeBifocal("Standard Progressive")
      eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue-Violet Light AR (Crizal Prevencia)")
      eyeglassesProductDetail.addLensColor1("Photochromic Light-Adaptive", "Photochromic Brown")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    })

    it ('TC_EPD_024 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom LenseNon-Corrective (Plano) Lenses',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
      eyeglassesProductDetail.selectLensDetails("Premium Standard Plastic", "Standard Anti Reflective")
      eyeglassesProductDetail.addLensColor1("Photochromic Light-Adaptive", "Photochromic Brown")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    })

    it ('TC_EPD_025 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom LenseNon-Corrective (Plano) Lenses',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
      eyeglassesProductDetail.selectLensDetails("Impact Resistant Polycarbonate", "Super Hydrophobic AR")
      eyeglassesProductDetail.addLensColor("Clear")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    })

    it ('TC_EPD_026 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom LenseNon-Corrective (Plano) Lenses',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
      eyeglassesProductDetail.selectLensDetails("Super Thin 1.67 Hi Index", "Superior Anti Reflective (Crizal Easy Pro)")
      eyeglassesProductDetail.addLensColor("Color Tinted")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    })

    it ('TC_EPD_027 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom LenseNon-Corrective (Plano) Lenses',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
      eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Enhanced Anti Reflective (Crizal Sapphire HR)")
      eyeglassesProductDetail.addLensColorWithGradient()
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    })

    it ('TC_EPD_028 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom LenseNon-Corrective (Plano) Lenses',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
      eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue Light Blocking AR (BlueShield)")
      eyeglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    })

    it ('TC_EPD_029 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom LenseNon-Corrective (Plano) Lenses',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Non-Corrective (Plano) Lenses")
      eyeglassesProductDetail.selectLensDetails("Ultra Thin 1.74 Hi Index", "Blue-Violet Light AR (Crizal Prevencia)")
      eyeglassesProductDetail.addLensColor1("Polarized", "Polarized Brown")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    })

    it ('TC_EPD_030 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense(Blue Light lenses)',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Blue Light lenses")
      eyeglassesProductDetail.selectBlueLightLensDetail("Blue Light Blocking AR")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    })

    it ('TC_EPD_031 - Validate "Add to Cart" functionality on the eyeglasses product page after adding Accident Protection and a custom Lense(Blue Light lenses)',function(){
      eyeglassesProductDetail.goToFirstProductDetailPage()
      eyeglassesProductDetail.selectLensType("Blue Light lenses")
      eyeglassesProductDetail.selectBlueLightLensDetail("Blue-Violet Light AR")
      eyeglassesProductDetail.addProductToCartwithProtection()
      eyeglassesProductDetail.removeAProductFromCart()
    })
  })