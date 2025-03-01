//##################################################################################################################################################

// //Авторизация с правильными данными (+)
// describe('авторизация', () => {
//   it('None-existent login test', () => {
//       cy.fixture('cypressTest').then(data => {
//           cy.log('Переход на страницу авторизации')
//           cy.visit(data.login_url)

//           cy.log('Ввод логина');
//          cy.get('.form-input--text')
//          .type(data.login);

//          cy.log('Ввод пароля');
//         cy.get('.form-input--password')
//         .type(data.password);

//           cy.log('Клик по кнопке "Войти"')
//           cy.get(':nth-child(3) > .button')
//           .click();
//       })
//   })
// })

// //Вход с неправильными данными (-)
// describe('Негативный сценарий авторизации', () => {
//   it('Попытка входа с некорректными учетными данными', () => {
//       cy.fixture('cypressTest').then(data => {
//           cy.log('Переход на страницу авторизации');
//           cy.visit(data.login_url);

//           cy.log('Ввод некорректного логина');
//           cy.get('.form-input--text').type('404');

//           cy.log('Ввод некорректного пароля');
//           cy.get('.form-input--password').type('404');

//           cy.log('Клик по кнопке "Войти"');
//           cy.get(':nth-child(3) > .button').click();

//       })
//   })
// })

//##################################################################################################################################################

// //Сетевой город с некоректными данными (-)
// describe('Сетевой город', () => {
//   it('Проверка сетевого города с некоректными данными', () => {
//       cy.fixture('cypressTest').then(data => {
//           cy.log('Переход на страницу авторизации');
//           cy.visit(data.login_url);

//           cy.log('Проверка отображения кнопки "Сетевой город"');
//           cy.get('.button-login__network-city-desktop')
//               .click();

//           cy.log('Ввод некорректного логина');
//           cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(1) > .form-control--medium > .form-input--text')
//               .type('404');

//           cy.log('Ввод некорректного пароля');
//           cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > :nth-child(2) > .form-control--medium > .form-input--password')
//               .type('404');


//           cy.log('Проверка отображения сетевого города');
//           cy.get('.desktop-modal__content > .form > .form__buttons > .login-form__button > .button')
//               .click();
//       });
//   });
// });

//##################################################################################################################################################

//Вакансии и создании вакансии (+)
// describe('Вакансии', () => {
//   it('Вход', () => {
//       cy.fixture('cypressTest').then(data => {
//           cy.log('Переход на страницу авторизации')
//           cy.visit(data.login_url)

//             cy.log('Ввод логина');
//             cy.get('.form-input--text')
//               .type(data.login1)

//             cy.log('Ввод пароля');
//             cy.get('.form-input--password')
//               .type(data.password)

//             cy.log('Клик по кнопке "Войти"');
//             cy.get('.form__buttons > :nth-child(3)')
//               .click();

//             cy.log('Переход по кнопке вакансии');
//             cy.get(':nth-child(7) > .menu-item__item-name')
//               .click();

//             cy.log('Переход к созданию вакансии')
//             cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
//             .click();

//             cy.log('Вписываем название вакансии');
//             cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
//             .type('Программист', {force: true});

//             cy.log('Выбор зп')
//             cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(2) > .radio-component__input')
//             .click();

//             cy.log('Тип занятости')
//             cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected')
//             .click();
//             cy.get('.form-select__items > :nth-child(2)')
//             .click();

//             cy.log('Граффик работы');
//             cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-090bd50f=""] > :nth-child(1) > .radio-list > :nth-child(3) > .radio-component__input')
//             .click();

//             cy.log('Описание граффика');
//             cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-090bd50f=""] > :nth-child(1) > .radio-list > :nth-child(1) > .radio-component__input')
//             .click();

//             cy.log('Требования');
//             cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
//             .type('Знания новых языков программировния', {force: true});

//             cy.log('Обязанности');
//             cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
//             .type('Делать сайты', {force: true});

//             cy.log('Подтвердить');
//             cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button')
//             .click({force: true }); 
//       })
//   })
// })

//Негатив (-)
// describe('Вакансии', () => {
//     it('Вход', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод логина');
//             cy.get('.form-input--text')
//                 .type(data.login1)

//             cy.log('Ввод пароля');
//             cy.get('.form-input--password')
//                 .type(data.password)

//             cy.log('Клик по кнопке "Войти"');
//             cy.get(':nth-child(3) > .button')
//                 .click();

//             cy.log('Переход по кнопке вакансии');
//             cy.get(':nth-child(7) > .menu-item__item-name')
//                 .click();

//             cy.log('Клик по кнопке создать');
//             cy.get('[data-v-21f0eb9c=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
//                 .click();

//             cy.log('Вписываем вокансию');
//             cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
//                 .type('(404)', { force: true });

//             cy.log('Тип занятости');
//             cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected')
//                 .click()

//             cy.log('выбор типа занятости');
//             cy.get('.form-select__items > :nth-child(2)')
//                 .click()

//             cy.log('Графиг работы');
//             cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-090bd50f=""] > :nth-child(1) > .radio-list > :nth-child(2) > .radio-component__input')
//                 .click()

//             cy.log('Требования');
//             cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-control > .form-area')
//                 .type('Знания новых языков программировния', { force: true });

//             cy.log('Обязанности');
//             cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > .form-control > .form-area')
//                 .type('Делать сайты', { force: true });

//             cy.log('Опубликовать');
//             cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button')
//                 .wait(3000)
//                 .click({ force: true })

//         })
//     })
// })

//##################################################################################################################################################

// //Заявка на верификацию аккаунта студента (+)
// describe('авторизация', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)
  
//             cy.log('Ввод логина');
//             cy.get('.form-input--text')
//             .type(data.login4);
  
//             cy.log('Ввод пароля');
//             cy.get('.form-input--password')
//             .type(data.password4);
  
//             cy.log('Клик по кнопке "Войти"')
//             cy.get(':nth-child(3) > .button')
//             .click();

//             cy.log('Пройти верификацию')
//             cy.get('.message-student > .button')
//             .click();

//             cy.log('Выбор учреждения');
//             cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text')
//                     .type('ттит') 
//                     .wait(2000) 

//                 cy.get('.search-input__item')
//                     .first() 
//                     .click(); 

//             cy.log('Выбрать специальность')
//             cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text')
//             .type('11.02.08 Средства связи с подвижными объектами')
//             .wait(2000)

//             cy.get('.search-input__item')
//             .first() 
//             .click(); 

//             cy.log('квалификация')
//             cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text')
//             .type('Бакалавриат')

//             cy.log('курс обучения')
//             cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(3)')
//             .click();

//             cy.log('Выбор года обучения от')
//             cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
//             .click();

//             cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
//             .type('2022');

//             cy.log('Выбор года обучения до')

//             cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
//             .click();

//             cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
//             .type('2025');

//             cy.log('Создать заявку')
//             cy.get('.desktop-modal__content > .student-form > .button')
//                     .click();

//         })
//     })
//   })

// Негатив верификации (-)
// describe('Негатив верификации', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод некорректного логина');
//             cy.get('.form-input--text')
//                 .type(data.login4)

//             cy.log('Ввод некорректного пароля');
//             cy.get('.form-input--password')
//                 .type(data.password4)

//             cy.log('Клик по кнопке "Войти"')
//             cy.get(':nth-child(3) > .button')
//                 .click()

//             cy.log('Верификация');
//             cy.get('.message-student > .button')
//                 .click()

//             cy.log('Выбор учреждения');
//             cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text')
//                 .type('ттит')
//                 .wait(2000)

//             cy.get('.search-input__item')
//                 .first()
//                 .click();

//             cy.log('Выбрать специальность');
//             cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text')
//                 .type('11.02.08 Средства связи с подвижными объектам')
//                 .wait(2000)

//             cy.get('.search-input__item')
//                 .first()
//                 .click();

//             cy.log('Квалификация');
//             cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text')
//                 .type('Бакалавриат')

//             cy.log('Курс');
//             cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(3)')
//                 .click();

//             cy.log('Год начала обучения')
//             cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
//                 .type('2022')

//             cy.log('Год начала обучения')
//             cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
//                 .type('2034')


//         })
//     })
// })





//##################################################################################################################################################

//Отчет по профориентационной деятельности (+)
// describe('авторизация', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)
  
//             cy.log('Ввод логина');
//             cy.get('.form-input--text')
//            .type(data.login3);
  
//            cy.log('Ввод пароля');
//            cy.get('.form-input--password')
//           .type(data.password);
  
//             cy.log('Клик по кнопке "Войти"')
//             cy.get('.form__buttons > :nth-child(3)')
//             .click();

//             cy.log('Переход на список студентов')
//             cy.get(':nth-child(5) > .menu-item__item-name')
//             .click();

//             cy.log('переход на студента')
//             cy.get(':nth-child(1) > .responses-list-item__content-company > .responses-list-item__about > .responses-list-item__text > .responses-list-item__title')
//             .click();

//             //Сайт не дает отчет


//           })
//         })
//       })

//##################################################################################################################################################

// //Потребности (+)
// describe('Потребности', () => {
//   it('Вход', () => {
//       cy.fixture('cypressTest').then(data => {
//           cy.log('Переход на страницу авторизации')
//           cy.visit(data.login_url)

//           cy.log('Ввод некорректного логина');
//           cy.get('.form-input--text')
//               .type(data.login1)

//           cy.log('Ввод некорректного пароля');
//           cy.get('.form-input--password')
//               .type(data.password)

//           cy.log('Клик по кнопке "Войти"');
//           cy.get('.form__buttons > :nth-child(3)')
//               .click();

//           cy.log('Переход по кнопке вакансии');
//           cy.get(':nth-child(6) > .menu-item__item-name')
//               .click();

//           cy.log('Переход к создании потребности');
//           cy.get('.needs-block__filters-wrapper > .button')
//               .click();
          
//           cy.log('Вписываем название потребности');
//           cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
//               .type('Кладовщик', {force: true});
    
//           cy.log('Заработная плата')
//           cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(2) > .radio-component__label')
//               .click();
      
//           cy.log('Обязанности')
//           cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area')
//               .type('кладовщик');

//           cy.log('Требования')
//           cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
//               .type('Уметь все делать');

//           cy.log('Тип занятости')
//           cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > .form-select > :nth-child(2) > .form-select__selected')
//               .click();
//           cy.get('.form-select__items > :nth-child(3)')
//               .click({force: true });
             
//           cy.log('Опубликовать')
//           cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button')
//               .click({force: true });

//             })
//           })
//        })

//##################################################################################################################################################

// “Личный кабинет студента” (+)
// describe('Личный кабинет студента', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод некорректного логина');
//             cy.get('.form-input--text')
//                 .type(data.login4)

//             cy.log('Ввод некорректного пароля');
//             cy.get('.form-input--password')
//                 .type(data.password4)

//             cy.log('Клик по кнопке "Войти"');
//             cy.get(':nth-child(3) > .button')
//                 .click()

//             cy.log('Отклики')
//             cy.get(':nth-child(4) > .menu-item__item-name')
//                 .click()

//             cy.log('На рассмотрении')
//             cy.get(':nth-child(4) > .menu-item__item-name')
//                 .click()

//             cy.log('Одобренны')
//             cy.get(':nth-child(3) > .navigation-item__title')
//                 .click()

//             cy.log('Отклонены')
//             cy.get(':nth-child(4) > .navigation-item__title')
//                 .click()

//             cy.log('Открытие выбора')
//             cy.get(':nth-child(2) > :nth-child(2) > .form-select__selected')
//                 .click({ force: true })

//             cy.log('вакансии')
//             cy.get('.form-select__items > :nth-child(2)')
//                 .click()
//                 .wait(2000)

//             cy.log('Открытие выбора')
//             cy.get(':nth-child(2) > :nth-child(2) > .form-select__selected')
//                 .click({ force: true })


//             cy.log('Потребности')
//             cy.get('.form-select__items > :nth-child(3)')
//                 .click()
//                 .wait(2000)

//             cy.log('Открытие выбора')
//             cy.get(':nth-child(2) > :nth-child(2) > .form-select__selected')
//                 .click({ force: true })

//             cy.log('Стажировка')
//             cy.get('.form-select__items > :nth-child(4)')
//                 .click()
//                 .wait(2000)

//         })
//     })
// })


//##################################################################################################################################################


//Карточка работодателя (+)
// describe('Просмотр карточки работодателя', () => {
//     it('проверка просмотр карточки работодателя', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации');
//             cy.visit(data.login_url);

//             cy.log('Ввод логина');
//             cy.get('.form-input--text')
//                 .type(data.login1);
//             cy.log('Ввод пароля');
//             cy.get('.form-input--password')
//                 .type(data.password);

//             cy.log('вход');
//             cy.get(':nth-child(3) > .button')
//                 .click();

//             cy.log('переход на вакансии')
//             cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]')
//             .wait(2000)
//                 .click()
                

//             cy.log('переход на карточку')
//             cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-header > .vacancy-header__title-wrapper > .card-info > .breadcrumb > :nth-child(1) > .card-info__company')
//                 .click()

//             cy.log('переход на карту')
//             cy.get(':nth-child(1) > .depiction__text > a')
//                 .click()

//             cy.log('проверка почты')
//             cy.get(':nth-child(2) > .depiction__text > a')
//                 .click()

//             cy.log('номер тел')
//             cy.get(':nth-child(3) > .depiction__text > a')
//                 .click()

//             cy.log('сайт')
//             cy.get(':nth-child(4) > .depiction__text')
//                 .click()

//             cy.log('полное описание')
//             cy.get('.profile-card__description > .button')
//                 .click()
//         });
//     });
// });



//##################################################################################################################################################

// Стажировки (+)
// describe('Стажировки', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод некорректного логина');
//             cy.get('.form-input--text')
//                 .type(data.login4)

//             cy.log('Ввод некорректного пароля');
//             cy.get('.form-input--password')
//                 .type(data.password4)

//             cy.log('Клик по кнопке "Войти"')
//             cy.get(':nth-child(3) > .button')
//                 .click()

//             cy.log('Стажировки')
//             cy.get(':nth-child(1) > .header__nav > [href="/internships"]')
//                 .wait(1000)
//                 .click()

//             cy.get(':nth-child(1) > .internship-item__info-wrapper > .internship-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-blue')
//                 .click()

//             cy.get(':nth-child(3) > .vacancy-footer__button-wrapper > .button__background-color-green')
//                 .click()
//         })
//     })
// })

//Пересоздание стажировки (+)
// describe('Пересоздание стажировки', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод некорректного логина');
//             cy.get('.form-input--text')
//                 .type(data.login1)

//             cy.log('Ввод некорректного пароля');
//             cy.get('.form-input--password')
//                 .type(data.password)

//             cy.log('Клик по кнопке "Войти"');
//             cy.get('.form__buttons > :nth-child(3)')
//                 .click()

//             cy.log('Архив');
//             cy.get('[href="/archive/requests"] > .header__label')
//                 .click()

//             cy.log('Стажировки');
//             cy.get(':nth-child(4) > .menu-item__item-name')
//                 .click()


//             cy.log('Пересоздать');
//             cy.get(':nth-child(1) > .internship-item__info-wrapper > .internship-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-light-blue')
//                 .click()

//             cy.log('Опубликовать');
//             cy.get(':nth-child(1) > .internship-item__info-wrapper > .internship-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green')
//                 .click()
//         })
//     })
// })



//##################################################################################################################################################

//Смена имени пользователя негатив (-)
// describe('Смена имени пользователя негативная', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод некорректного логина');
//             cy.get('.form-input--text')
//                 .type(data.login4)

//             cy.log('Ввод некорректного пароля');
//             cy.get('.form-input--password')
//                 .type(data.password4)

//             cy.log('Клик по кнопке "Войти"')
//             cy.get(':nth-child(3) > .button')
//                 .click()

//             cy.log('Профиль');
//             cy.get(':nth-child(2) > .menu-item__item-name')
//                 .click()

//             cy.log('Имя')
//             cy.get(':nth-child(1) > :nth-child(1) > .form-control--max > .form-input--text')
//                 .type('Иван')

//             cy.log('Фамилия')
//             cy.get(':nth-child(2) > .form-control--max > .form-input--text')
//                 .clear('Смирнов')

//             cy.log('Отчество')
//             cy.get(':nth-child(2) > :nth-child(1) > .form-control--max > .form-input--text')
//                 .type('404')

//             cy.log('Email')
//             cy.get('.form-input--email')
//                 .type('gmail.ijwsnjwhw')

//             cy.get('.profile-forms > .form.edit-form > .form__buttons > .button')
//                 .click()
//         })
//     })
// })

//##################################################################################################################################################

// Негатив для регистрации (-)
// describe('Регистрация', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)


//             cy.log('Регистрация');
//             cy.get('[href="/registration"] > .button')
//                 .click();

//             cy.log('Имя');
//             cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
//                 .type('Иван')

//             cy.log('Email');
//             cy.get('.form-input--email')
//                 .type('ivan228.com')

//             cy.log('Пароль');
//             cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
//                 .type('404')

//             cy.log('Пароль');
//             cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
//                 .type('404')
//         })
//     })
// })

//##################################################################################################################################################

//Смена имени (+)
// describe('Смена имени пользователя', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод некорректного логина');
//             cy.get('.form-input--text')
//                 .type(data.login4)

//             cy.log('Ввод некорректного пароля');
//             cy.get('.form-input--password')
//                 .type(data.password4)

//             cy.log('Клик по кнопке "Войти"')
//             cy.get(':nth-child(3) > .button')
//                 .click()

//             cy.log('Профиль');
//             cy.get(':nth-child(2) > .menu-item__item-name')
//                 .click()

//             cy.log('Имя')
//             cy.get(':nth-child(2) > .form-control--max > .form-input--text')
//                 .clear()
//                 .type('Иван')

//             cy.log('Фамилия')
//             cy.get(':nth-child(1) > :nth-child(1) > .form-control--max > .form-input--text')
//                 .clear()
//                 .type('Иванов')

//             cy.log('Отчество')
//             cy.get(':nth-child(2) > :nth-child(1) > .form-control--max > .form-input--text')
//                 .clear()
//                 .type('Иванович')

//             cy.get('.profile-forms > .form.edit-form > .form__buttons > .button')
//                 .click()
//         })
//     })
// })

//##################################################################################################################################################

//Негативная ссылка (-)
// describe('Ссылка', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод некорректного логина');
//             cy.get('.form-input--text')
//                 .type(data.login4)

//             cy.log('Ввод некорректного пароля');
//             cy.get('.form-input--password')
//                 .type(data.password4)

//             cy.log('Клик по кнопке "Войти"')
//             cy.get(':nth-child(3) > .button')
//                 .click()

//             cy.get(':nth-child(2) > .menu-item__item-name')
//                 .click()

//             cy.get('.base-card > .form > .form__buttons > .button')
//                 .click()

//             cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > .labels > .labels__wrapper > .label > .form-control--responsive > .form-input--text')
//                 .type('404')
//         })
//     })
// })

//##################################################################################################################################################

//Негативная попытка смена аватара (-)
// describe('Смена аватара', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод некорректного логина');
//             cy.get('.form-input--text')
//                 .type(data.login4)

//             cy.log('Ввод некорректного пароля');
//             cy.get('.form-input--password')
//                 .type(data.password4)

//             cy.log('Клик по кнопке "Войти"')
//             cy.get(':nth-child(3) > .button')
//                 .click()

//             cy.get(':nth-child(2) > .menu-item__item-name')
//                 .click()

//             cy.get('.base-card.profile-forms__form > .button')
//                 .click()
//         })
//     })
// })

//##################################################################################################################################################

//Негативное заполнение управления над косвенными полями (-)
// describe('Негативное заполнение управления над косвенными полями', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.log('Ввод некорректного логина');
//             cy.get('.form-input--text')
//                 .type(data.login3)

//             cy.log('Ввод некорректного пароля');
//             cy.get('.form-input--password')
//                 .type(data.password)

//             cy.log('Клик по кнопке "Войти"')
//             cy.get(':nth-child(3) > .button')
//                 .click()

//             cy.get(':nth-child(4) > .menu-item__item-name')
//                 .click()

//             cy.get('.group-forms__custom-fields > .base-card > .form > .form__buttons > .button')
//                 .click()

//             cy.get('.desktop-modal__content > .form > :nth-child(1) > .form__labels > .labels > .labels__wrapper > :nth-child(1) > .form-control--responsive > .form-input--text')
//                 .type('404')
//         })
//     })
// })


//##################################################################################################################################################

//Негативное Поиск и фильтрация (-)
// describe('Поиск и фильтрация', () => {
//     it('None-existent login test', () => {
//         cy.fixture('cypressTest').then(data => {
//             cy.log('Переход на страницу авторизации')
//             cy.visit(data.login_url)

//             cy.get(':nth-child(1) > .header__nav > [href="/vacancies"] > .header__label')
//                 .click()

//             cy.get('.form-input--text')
//                 .type('404', { force: true })

//             cy.get(':nth-child(2) > .radio-component__input')
//                 .click()

//             cy.get(':nth-child(3) > .radio-component__input')
//                 .click()

//             cy.wait(4000)
//             cy.get('div.search-input__field > .button')
//                 .click()


//         })
//     })
// })

//##################################################################################################################################################