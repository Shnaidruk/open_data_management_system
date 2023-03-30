# Аналіз предметної області

## Вступ

*[Вступ повинен містити короткий огляд всього документу.]*
 
 ***vhgdvdc dhcbjhbcds cdsbcdshgc b cbhd cgds cg d***

 gdgdgf:
 - jdsjsd
 - ncjdsnc
 - mncjdcnsdknc

<span style="color:red"> sbhcjhsdcdshc </span>

## Основні визначення

*[Розділ містить визначення термінів та скорочень, які використовуються при аналізі предметної області.]*

## Підходи та способи вирішення завдання

### Підход до реалізації поставленного завдання
1. Налаштувати збір інформації відповідно до обраної теми
2. Розробити спеціалізовану базу даних для зібраної інформації
3. Створити веб-додаток, на якому користувач буде мати доступ доступ до бази даних з відповідною інформацієї

### Етапи створення Бази даних
1. Постановка завдання
2. Створення інформаційної моделі бази даних
3. Визначення моделі даних
4. Створення структури бази даних з використанням однієї з мов програмування.
5. Уведення даних
6. Тестування бази даних, її корекція

### Види моделей даних
1. **Ієрархічна модель** -  будується у вигляді ієрархічної деревоподібної структури, у якій для кожного головного об'єкта існує кілька підлеглих, а для кожного підлеглого об'єкта може бути тільки один головний. На найвищому рівні ієрархії перебуває кореневий об'єкт. Прикладом ієрархічної структури даних може бути організація каталогів на диску, різного роду класифікації, структура державної влади тощо. 

2. **Мережна модель** - передбачає, що у кожного об’єкта може бути як кілька батьківських об’єктів, так і кілька об’єктів-нащадків. 

3. **Реляційна модель** - Основою структури даних цієї моделі є таблиця. У таблицях кожний рядок містить набір значень властивостей одного з об’єктів предметної області. Кожний стовпець таблиці містить набір значень певної властивості об’єктів предметної області.
Така таблиця з набором стовпців, кожний з яких містить значення з певної скінченної множини, з точки зору математики задає відношення між множинами.   

4. **Об'єктно-реляційна модель** - варіація вдосконаленої реляційної моделі, яка більш вдало працює з мультимедійними даними та даними про складені об’єкти. 


### Модель даних DDF

DDF використовується для визначення наборів даних. 

Набір даних — це сукупність узгоджених пов’язаних даних, які складаються з окремих елементів, але комп’ютер може ними керувати як єдиним цілим. 

Кожен набір даних DDF визначає п’ять колекцій даних: Concepts, Metadata, Entities, Datapoints і Synonyms.

1. Точки даних(Datapoints) містять багатовимірні дані.

2. Сутності(Entities) містять одновимірні дані.

3. Метадані(Metadata) містять додаткову інформацію про дані.

4. Концепції(Concepts) містять інформацію про змінні в наборі даних (тобто заголовки стовпців у табличному форматі).

5. Синоніми(Synonyms) містять синоніми, які використовуються для ідентифікації сутностей і понять в інших наборах даних. Вони використовуються для узгодження наборів даних з різних джерел в один узгоджений набір даних.

Набор данных должен иметь концепции и может иметь DataPoints, Entities, Metadata или Synonyms.


Набір даних повинен мати концепції та може містити точки даних, сутності, метадані або синоніми.

## Порівняльна характеристика існуючих засобів вирішення завдання

*[Розділ містить опис існуючих програм, інформаційних систем, сервісів, тощо, призначених для вирішення 
завдання. Дається порівняльна характеристика властивостей FURPS:*
- *Functionality (функциональні вимоги)*
- *Usability (вимоги до зручності роботи)*
- *Reliability (вимоги до надійності)*
- *Performance (вимоги до продуктивності)*
- *Supportability (вимоги до підтримки)*

 *(у вигляді таблиці).]*
 ### Порівняльна таблиця

- ✅ - реалізовано вдало
- 🔶 - реалізовано погано
- ❌ - не реалізовано

<table>
    <thead>
        <tr>
            <th style="text-align: center;">Вимоги</th>
            <th style="text-align: center;">Критерії</th>
            <th style="text-align: center;">Open Data Management System(Наш проєкт)</th>
            <th style="text-align: center;">Garpminder</th>
            <th style="text-align: center;">The World Bank DataBank</th>
            <th style="text-align: center;">Google Public Data Explorer</th>
            <th style="text-align: center;">Statistics Poland</th>
            <th style="text-align: center;">Eurostat</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center;" rowspan="5">Functionality (функциональні вимоги)</td>
            <td style="text-align: center;">Керування наборами данних</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">🔶</td>
            <td style="text-align: center;">❌</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">❌</td>
            <td style="text-align: center;">❌</td>
        </tr>
        <td style="text-align: center;">Інструменти візуалізації данних</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
        </tr>
        <tr>
            <td style="text-align: center;">Пошук</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">🔶</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">🔶</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
        </tr>
        <tr>
            <td style="text-align: center;">Тематичне розбиття данних</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">🔶</td>
            <td style="text-align: center;">✅</td>
        </tr>
        <tr>
            <td style="text-align: center;">Ролі та дозволи</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">❌</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">❌</td>
            <td style="text-align: center;">🔶</td>
        </tr>
        <tr>
            <td style="text-align: center;" rowspan="3">Usability (вимоги до зручності роботи)</td>
            <td style="text-align: center;">Підтримка мов</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">❌</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">❌</td>
            <td style="text-align: center;">✅</td>
        </tr>
        <tr>
            <td style="text-align: center;">Дружній інтерфейс</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">🔶</td>
            <td style="text-align: center;">🔶</td>
            <td style="text-align: center;">🔶</td>
            <td style="text-align: center;">❌</td>
        </tr>
        <tr>
            <td style="text-align: center;">Документація</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">🔶</td>
            <td style="text-align: center;">❌</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">🔶</td>
            <td style="text-align: center;">✅</td>
        </tr>
        <tr>
            <td style="text-align: center;" rowspan="3">Reliability (вимоги до надійності)</td>
            <td style="text-align: center;">Резервне копіювання(backup)</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
        </tr>
        <tr>
            <td style="text-align: center;">Ліцензія</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
        </tr>
        <tr>
            <td style="text-align: center;">Актуальність даних</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">🔶</td>
            <td style="text-align: center;">🔶</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
        </tr>
        <tr>
            <td style="text-align: center;" rowspan="2">Performance (вимоги до продуктивності)</td>
            <td style="text-align: center;">Продуктивність за PageSpeed Insights</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">🔶85</td>
            <td style="text-align: center;">✅89</td>
            <td style="text-align: center;">✅98</td>
            <td style="text-align: center;">❌56</td>
            <td style="text-align: center;">❌49</td>
        </tr>
        <tr>
            <td style="text-align: center;">Стійкість до збоїв</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
        </tr>
        <tr>
            <td style="text-align: center;" rowspan="3">Supportability (вимоги до підтримки)</td>
            <td style="text-align: center;">FAQ</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">❌</td>
            <td style="text-align: center;">✅</td>
        </tr>
        <tr>
            <td style="text-align: center;">Підтримка в режимі online</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
        </tr>
        <tr>
            <td style="text-align: center;">Фінансова підтримка сервісу</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">✅</td>
            <td style="text-align: center;">❌</td>
            <td style="text-align: center;">❌</td>
            <td style="text-align: center;">❌</td>
            <td style="text-align: center;">❌</td>
        </tr>
    </tbody>
</table>

## Висновки

*[Робляться висновки щодо доцільності розробки нової або модифікації існуючої інформаційної системи, необхідності та способів інтеграції з системами(сервісами) третіх сторін, тощо.]*

## Посилання

*[Розділ містить повний список всіх документів, про які згадується.]*
