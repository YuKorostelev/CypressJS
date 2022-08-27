describe('Тестирование формы логина и пароля Staya', function () {

	it('Тестирование формы логина и пароля Staya', function() {
		cy.visit('https://Staya.dog');
		cy.get('.header-bottom__right--link').click();
		cy.get('.auth-form > form > [type="email"]').type('vis-julian-korostelev@qa.studio');
		cy.get('.auth-form > form > [type="password"]').type('JulianTest96');
		cy.get('.auth-form__submit > .s-button__content').click();
		cy.contains('Мои заказы');
	})
})