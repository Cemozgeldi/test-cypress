/// <reference types="Cypress" />
import '../../support/commands'; //commands.js dosyasını import ettik

describe('Saucedemo Login Sayfasi Testi',() =>{ //arrow function ile bir fonksiyon tanımladık 


    it('saucedemoya git ve failed login', () => {
        // cy.viewport(1920, 1080); //ekran boyutunu belirledik
        cy.visit('https://www.saucedemo.com/');
        cy.title().should('eq','Swag Labs'); //title kontrolü
        cy.get('#user-name').type('user');
        cy.get('#password').type('123456');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible').should('contain','Epic sadface: Username and password do not match any user in this service');

    });

    it('products git ve verify et', () => {
        // cy.viewport(1920, 1080); //ekran boyutunu belirledik
        cy.visit('https://www.saucedemo.com/');
        cy.title().should('eq','Swag Labs'); //title kontrolü
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.title').should('be.visible').should('contain','Products');
    });
    it('ürün ekle ve sepete git', () => {
        // cy.viewport(1920, 1080); //ekran boyutunu belirledik
        cy.visit('https://www.saucedemo.com/');
        cy.title().should('eq','Swag Labs'); //title kontrolü
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.title').should('be.visible').should('contain','Products');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.scrollTo('top');
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').click().type('Zeynep');
        cy.get('[data-test="lastName"]').click().type('vırtzırt');
        cy.get('[data-test="postalCode"]').click().type('12345');
        cy.get('[data-test="continue"]').click();
        cy.scrollTo('bottom');
        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('be.visible').should('contain','Thank you for your order!');
        cy.get('[data-test="back-to-products"]').click();
    });
})
