describe('Проверка авторизации', function () {

  it('Верный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // зашёл на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // нашёл поле и ввёл верный логин
    cy.get('#pass').type('qa_one_love1'); // нашёл поле и ввёл верный пароль 
    cy.get('#loginButton').click() // нажал войти

    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка что авторизац. прошла успешно
    cy.get('#messageHeader').should('be.visible'); // проверка что текст о успешной авт. виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик и он виден пользователю

  })

  it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/'); // зашёл на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // ввёл верный логин
    cy.get('#pass').type('shdafgasg'); //  и ввёл неверный пароль 
    cy.get('#loginButton').click() // нажал войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка что авторизац. прошла НЕуспешно
    cy.get('#messageHeader').should('be.visible'); // проверка что текст о НЕуспешной авт. виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик и он виден пользователю

  })

  it('Негативный кейс авторизации - нет @', function () {
    cy.visit('https://login.qa.studio/'); // зашёл на сайт
    cy.get('#mail').type('germandolnikov.ru'); // ввёл логин без @
    cy.get('#pass').type('qa_one_love1'); //  ввёл верный пароль 
    cy.get('#loginButton').click() // нажал войти

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка что авторизац. не прошла валидацию
    cy.get('#messageHeader').should('be.visible'); // проверка что текст о НЕуспешной авт. виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик и он виден пользователю

  })

  it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); // зашёл на сайт
    cy.get('#forgotEmailButton').click(); // нажимаю восстановить пароль
    cy.get('#mailForgot').type('german@dolnikov.ru')  // ввожу почту для восстановления пароля
    cy.get('#restoreEmailButton').click(); // нажал отправить код 

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка что код успешно отправился
    cy.get('#messageHeader').should('be.visible'); // проверка что текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик и он виден пользователю

  })

  it('Приведение к строчных буквам в логине', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); // ввели строчные буквы
        cy.get(main_page.password).type(data.password); // ввели верный пароль
        cy.get(main_page.login_button).click(); // нажал войти

        cy.get(result_page.title).contains('Авторизация прошла успешно'); // проверяю, что авт. прошла успешно
        cy.get(result_page.title).should('be.visible'); // текст виден пользователю
    })
})

  


     
        
