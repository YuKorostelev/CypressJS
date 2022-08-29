//Проверил наличие и отображение рекламного баннера во вкладках на главной странице Хабра
describe('Проверка рекламного баннера на Хабре', function () {

	it('Вкладка Все потоки', function() {
		cy.visit('https://habr.ru');
		cy.get('[href="/en/all/"]').click();
		cy.wait(3000);
		cy.get('.tm-layout-sidebar__ads');
	})

	it('Вкладка Разработка', function() {
		cy.get('[href="/en/flows/develop/"]').click();
		cy.wait(3000);
		cy.get('.tm-layout-sidebar__ads');
	})

        it('Вкладка Администрирование', function() {
		cy.get('[href="/en/flows/admin/"]');
		cy.wait(3000);
		cy.get('.tm-layout-sidebar__ads');
	})

	it('Вкладка Дизайн', function() {
		cy.get('[href="/en/flows/design/"]');
		cy.wait(3000);
		cy.get('.tm-layout-sidebar__ads');
	})

	it('Вкладка Менеджмент', function() {
		cy.get('[href="/en/flows/management/"]');
		cy.wait(3000);
		cy.get('.tm-layout-sidebar__ads');
	})

	it('Вкладка Маркетинг', function() {
	    cy.get('[href="/en/flows/marketing/"]');
	    cy.wait(3000);
	    cy.get('.tm-layout-sidebar__ads');
         })

        it('Вкладка НаучПоп', function() {
	    cy.get('[href="/en/flows/popsci/"]');
	    cy.wait(3000);
	    cy.get('.tm-layout-sidebar__ads');
	})
})
