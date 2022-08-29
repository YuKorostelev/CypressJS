
//Позитивный и негативный тест формы логина и пароля
describe('Позитивный тест формы логина и пароля Staya', function () {

	it('Ввод корректного эмейла и пароля', function() {
		cy.visit('https://Staya.dog');
		cy.get('.header-bottom__right--link').click();
		cy.get('.auth-form > form > [type="email"]').type('vis-julian-korostelev@qa.studio');
		cy.get('.auth-form > form > [type="password"]').type('JulianTest96');
		cy.get('.auth-form__submit > .s-button__content').click();
		cy.contains('Мои заказы');
	})
})

describe('Негативный тест формы логина и пароля Staya', function () {
	it('Ввод корректного эмейла и некорректного пароля', function() {
		cy.visit('https://Staya.dog');
		cy.get('.header-bottom__right--link').click();
		cy.get('.auth-form > form > [type="email"]').type('vis-julian-korostelev@qa.studio');
		cy.get('.auth-form > form > [type="password"]').type('incorrectpassword');
		cy.get('.auth-form__submit > .s-button__content').click();
		cy.get('.error-label');
	})
})
