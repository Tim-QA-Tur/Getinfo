describe('Проверка авторизации', function () {

 it('НЕ правильный логин и верный пароль', function () {
      cy.visit('https://dev2.getinfo.radugi.net/login'); // Зайти на сайт
        
      cy.get('.logo-auth').should('be.visible'); // есть логотип и он виден пользователю
      cy.get('p').should('be.visible'); // надпись СДО виден пользователю
      cy.get('.el-button--primary').should('have.css', 'color', 'rgb(255, 255, 255)'); // проверка цвета кнопки "Войти" (красного цвета)
        
      cy.get('#sdo-login').type('edumbledore@sct.team'); // ввел НЕверный логин
      cy.get('#sdo-password').type('12345678qQ1'); // ввел верный пароль
      cy.get('.el-button--primary').click(); // нажал войти
      cy.get('.el-notification__content > p').contains('Bad credentials'); // Проверяю, что после автор. текст виден
      cy.get('#notification_1').click(); // нажал на крестик
  })
 // npx cypress open  -- открыть  Cypress --browser chrome
 // План №1
 // + Найти поле логин и ввести НЕ правильный логин
 // + Найти поле пароль и ввести правильный пароль
 // + Найти кнопку Войти и нажать на нее
 // + Проверяю, что после автор. текст виден
 // + Нажал на крестик
  
 it('Правильный  логин и неверный пароль', function () {
  cy.visit('https://dev2.getinfo.radugi.net/login'); // Зайти на сайт
    
  cy.get('.logo-auth').should('be.visible'); // есть логотип и он виден пользователю
  cy.get('p').should('be.visible'); // надпись СДО виден пользователю
  cy.get('.el-button--primary').should('have.css', 'color', 'rgb(255, 255, 255)'); // проверка цвета кнопки "Войти" (красного цвета)
    
  cy.get('#sdo-login').type('dumbledore@sct.team'); // ввел верный логин
  cy.get('#sdo-password').type('12345678qQ11'); // ввел Неверный пароль
  cy.get('.el-button--primary').click(); // нажал войти
  cy.get('.el-notification__content > p').contains('Введенный пароль недействителен'); // Проверяю, что после автор. текст виден
  cy.get('#notification_1').click(); // нажал на крестик
  })
    
    
    
   it('Верный логин и верный пароль', function () {
        cy.visit('https://dev2.getinfo.radugi.net/login'); // Зайти на сайт
        cy.get('.el-button--primary').should('have.css', 'color', 'rgb(255, 255, 255)'); // проверка цвета кнопки "Войти" (красного цвета)
        cy.get('.logo-auth').should('be.visible'); // есть логотип и он виден пользователю
        cy.get('p').should('be.visible'); // надпись СДО виден пользователю
        
        cy.get('#sdo-login').type('dumbledore@sct.team'); // ввел верный логин
        cy.get('#sdo-password').type('12345678qQ1'); // ввел верный пароль
        cy.get('.el-button--primary').click(); // нажал войти
        cy.intercept('get', 'https://dev2.getinfo.radugi.net');
        cy.get(':nth-child(4) > .el-avatar').click(); 
     }) 
         
})
 
 // npx cypress open  -- открыть  Cypress --browser chrome
 // План №1
 // + Найти поле логин и ввести НЕ правильный логин
 // + Найти поле пароль и ввести правильный пароль
 // + Найти кнопку Войти и нажать на нее
 // Проверить, что авторизация прошла успешно