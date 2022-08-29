//Позитивный и негативный тест формы логина и пароля
describe('Тестирование формы логина и пароля Staya', function () {

	it('Ввод корректного эмейла и пароля', function() {
		cy.visit('https://Staya.dog');
		cy.get('.header-bottom__right--link').click();
		cy.get('.auth-form > form > [type="email"]').type('email');
		cy.get('.auth-form > form > [type="password"]').type('password');
		cy.get('.auth-form__submit > .s-button__content').click();
		cy.contains('Мои заказы');
	})
	it('Ввод корректного эмейла и некорректного пароля', function() {
		cy.visit('https://Staya.dog');
		cy.get('.header-bottom__right--link').click();
		cy.get('.auth-form > form > [type="email"]').type('email');
		cy.get('.auth-form > form > [type="password"]').type('incorrectpassword');
		cy.get('.auth-form__submit > .s-button__content').click();
	})
})
