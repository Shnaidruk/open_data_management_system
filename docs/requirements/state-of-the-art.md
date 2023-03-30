# Аналіз предметної області

## Вступ

*Цей документ містить аналіз області управління відкритими даними, який включає в себе різні підходи, визначення та рішення, що використовуються для вирішення поставлених завдань. Крім того, описано існуючі засоби вирішення цих завдань та їх порівняння з планованою реалізацією проекту*
 
 

## Основні визначення

***Відкриті дані (англ. Open data)*** - концепція, яка відображає ідею про те, що певні дані повинні бути вільно доступні для машиночитаемого використання і подальшої передруку без обмежень авторського права, патентів та інших механізмів контролю. Звільнити дані від обмежень авторського права можна за допомогою вільних ліцензій, таких як ліцензій Creative Commons. Якщо який-небудь набір даних не є суспільним надбанням, або не пов'язаний ліцензією, що дає права на вільне повторне використання, то такий набір даних не вважається відкритим, навіть якщо він викладений в машиночитаемом вигляді в Інтернет.<a href="https://leadscanner.com.ua/articles/open-data" target="_blank">[1]</a> 



***Великі дані (Big Data)*** – це поєднання структурованих, напівструктурованих та неструктурованих даних, які можуть бути видобуті для отримання інформації та використані в проектах машинного навчання, прогнозного моделювання та інших передових програм аналітики.<a href=" https://futurenow.com.ua/shho-take-big-data-velyki-dani" target="_blank">[2]</a>    



***База даних(Database)*** – одне або кілька великих структурованих множин рідко змінюваних даних, в основному пов’язаних з програмним забезпеченням, що використовуються для оновлення та запитів даних.Проста база даних може зберігається в єдиному файлі, що містить велику кількість записів, кожна з яких складається з одного і того ж безлічі полів, де кожне поле має певну фіксовану довжину. <a href="https://platon.ua/faq/database" target="_blank">[3]</a> 

***Модель даних(Data model)*** — абстрактне представлення реального світу, що відображає тільки ті об'єкти, що безпосередньо стосуються програми. Це, як правило, визначає специфічну групу об'єктів, їх атрибутивне значення і відношення між ними. У випадку ГІС, використовується механізм представлення і організації просторової моделі даних, або растрової моделі даних. Вона не залежить від комп'ютерної системи і пов'язана тільки зі структурою даних.<a href="https://www.wikiwand.com/uk/%D0%9C%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85" target="_blank">[4]</a>   


***Банк даних (Data Bank)*** – функціонально-організаційна складова в автоматизованих системах керування та інформаційно-обчислювальних системах, яка здійснює централізоване інформаційне забезпечення колективу користувачів, або сукупності задач, які розв'язуються в системі.<a href="https://www.wiki-data.uk-ua.nina.az/%D0%91%D0%B0%D0%BD%D0%BA_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85.html" target="_blank">[5]</a> 
Банк даних розглядають як інформаційно-довідкову систему, основним призначенням якої є:
•   накопичення та підтримка в робочому стані сукупності відомостей, які складають інформаційну базу всієї автоматизованої системи або деякого набору задач, які в ній розв'язуються; видача потрібних задачі або користувачу даних;
•   забезпечення колективного доступу до інформації, яка в ній зберігається;
•   забезпечення необхідного керування використанням відомостей, які містяться в інформаційній базі.




***Системи керування базами даних(Database management system)*** - це програмне забезпечення для створення та керування базами даних. СУБД дозволяє кінцевим користувачам створювати, захищати, читати, оновлювати та видаляти дані в базі даних. Як найбільш поширена платформа управління даними, СУБД, в основному, служить інтерфейсом між базами даних та користувачами або програмами, забезпечуючи, що дані будуть однорідно організовані та залишатимуться легко доступними.<a href="https://www.techtarget.com/searchdatamanagement/definition/database-management-system" target="_blank">[6]</a> 






***SQL*** - це непроцедурна мова БД, орієнтована на великий обсяг оброблюваної інформації. Непроцедурна значить, що в ній, перш за все, приділяється увага які дані викликати, видаляти або вставляти, а не якимось чином це робити. Кількісно-орієнтована ж означає, що за допомогою цієї мови можна обробляти значні обсяги інформації в групах.<a href="https://www.ukraine.com.ua/uk/blog/programming/sql-baza-dannih-dlya-chego-prednaznachena-baza-dannih.html" target="_blank">[7]</a> 








***Модель баз даних*** використовується як шаблон для всіх баз даних, що створюються в екземплярі SQL Server. Оскільки база даних "tempdb" створюється при кожному запуску SQL Server, база даних "model" повинна існувати в системі SQL Server завжди. Зміст бази даних "model" (включаючи параметри бази даних) повністю копіюється в нову базу даних. Деякі параметри бази даних "model" також використовуються при створенні нової бази даних "tempdb" під час завантаження, тому наявність бази даних "model" в системі SQL Server є обов'язковою.<a href="https://learn.microsoft.com/ru-ru/sql/relational-databases/databases/model-database?view=sql-server-ver16" target="_blank">[8]</a> 




***Система управління базами даних (СУБД)*** є системним програмним забезпеченням для створення та управління базами даних. СУБД дозволяє кінцевим користувачам створювати, захищати, читати, оновлювати та видаляти дані в базі даних. Найбільш поширеним типом платформи управління даними є СУБД, яка в основному служить інтерфейсом між базами даних та користувачами або програмами застосування, забезпечуючи, що дані будуть послідовно організовані та залишатимуться легкодоступними.   
<a href="https://www.techtarget.com/searchdatamanagement/definition/database-management-system" target="_blank">[9]</a> 





***Інформаційна система (Information system)*** — це сукупність організаційних і технічних засобів для збереження та обробки інформації з метою забезпечення інформаційних потреб користувачів. Таке визначення може бути задовільним тільки при найбільш узагальненій і неформальній точці зору і підлягає подальшому уточненню. Інформаційні системи діють у нашій країні під назвою «автоматизовані системи (АС)». <a href="https://sites.google.com/site/in4matuka/informacijni-sistemi" target="_blank">[10]</a> 



***API*** - це набір визначених правил, що дозволяють різним додаткам спілкуватися між собою. Він діє як проміжний шар, який обробляє передачу даних між системами, дозволяючи компаніям відкривати свої дані та функціональні можливості додатків для зовнішніх розробників, бізнес-партнерів та внутрішніх відділів в межах їх компаній.<a href="https://www.ibm.com/topics/api*" target="_blank">[11]</a> 



 


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

[Open data](https://docs.google.com/document/d/1G3ZcQ5NyHAfaJWXE6uGPRIBLqdRLRk9LXtgQS9utYmQ/edit#heading=h.1u8zm7362v0t)

[Big Data](https://futurenow.com.ua/shho-take-big-data-velyki-dani/)

[DataBase](https://platon.ua/faq/database)

[DataModel](https://www.wikiwand.com/uk/%D0%9C%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85)

[Data Bank](https://www.wiki-data.uk-ua.nina.az/%D0%91%D0%B0%D0%BD%D0%BA_%D0%B4%D0%B0%D0%BD%D0%B8%D1%85.html)

[Database management system](https://www.techtarget.com/searchdatamanagement/definition/database-management-system)

[SQL](https://www.ukraine.com.ua/uk/blog/programming/sql-baza-dannih-dlya-chego-prednaznachena-baza-dannih.html)

[Модель без даних](https://learn.microsoft.com/ru-ru/sql/relational-databases/databases/model-database?view=sql-server-ver16)

[СУБД](https://www.techtarget.com/searchdatamanagement/definition/database-management-system)

[Information system](https://sites.google.com/site/in4matuka/informacijni-sistemi)

[API](https://www.ibm.com/topics/api)
