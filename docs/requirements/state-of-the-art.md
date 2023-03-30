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

*[Розділ містить опис підходів, моделей та способів вирішення завдання.]*

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
