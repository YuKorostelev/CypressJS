describe('Проверка рекламного баннера на Хабре', function () {

	it('Проверка баннера вкладка Все потоки', function() {
		cy.visit('https://habr.ru');
		cy.get('[href="/en/all/"]').click();
		cy.wait(3000);
		cy.get('.tm-layout-sidebar__ads');
	})

	it('Проверка баннера вкладка Разработка', function() {
		cy.get('[href="/en/flows/develop/"]').click();
		cy.wait(3000);
		cy.get('.tm-layout-sidebar__ads');
	})

    it('Проверка баннера вкладка Администрирование', function() {
		cy.get('[href="/en/flows/admin/"]');
		cy.wait(3000);
		cy.get('.tm-layout-sidebar__ads');
	})

	it('Проверка баннера вкладка Дизайн', function() {
		cy.get('[href="/en/flows/design/"]');
		cy.wait(3000);
		cy.get('.tm-layout-sidebar__ads');
	})

	it('Проверка баннера вкладка Менеджмент', function() {
		cy.get('[href="/en/flows/management/"]');
		cy.wait(3000);
		cy.get('.tm-layout-sidebar__ads');
	})

	it('Проверка баннера вкладка Маркетинг', function() {
	    cy.get('[href="/en/flows/marketing/"]');
	    cy.wait(3000);
	    cy.get('.tm-layout-sidebar__ads');
    })

    it('Проверка баннера вкладка НаучПоп', function() {
	    cy.get('[href="/en/flows/popsci/"]');
	    cy.wait(3000);
	    cy.get('.tm-layout-sidebar__ads');
	})
})