# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

@startuml
entity Category

entity Category.name #ffffff 
entity Category.hex_code  #ffffff
entity Category.id  #ffffff 

entity DataSet

entity DataSet.id  #ffffff 
entity DataSet.name  #ffffff 
entity DataSet.description  #ffffff 
entity DataSet.category_id  #ffffff

entity DataFile

entity DataFile.id  #ffffff 
entity DataFile.name  #ffffff 
entity DataFile.description  #ffffff 
entity DataFile.date_creation #ffffff 
entity DataFile.confirmed  #ffffff 
entity DataFile.created_by_id  #ffffff 
entity DataFile.data_set_id  #ffffff
entity DataFile.provider  #ffffff 
entity DataFile.file_csv #ffffff

entity User


entity User.id  #ffffff 
entity User.username  #ffffff
entity User.email  #ffffff 
entity User.password  #ffffff 
entity User.first_name  #ffffff 
entity User.last_name  #ffffff
entity User.avatar #ffffff 
entity User.is_editor  #ffffff 
entity User.is_administrator #ffffff 

entity UserGroup

entity UserGroup.id  #ffffff 
entity UserGroup.name  #ffffff 
entity UserGroup.user_id  #ffffff 
entity UserGroup.permission_id  #ffffff

entity Permission

entity Permission.id  #ffffff 
entity Permission.name  #ffffff 
entity Permission.codename  #ffffff

Category "1,1" --r- "0," DataSet 
DataSet "1,1" --d- "0," DataFile 
User "1,1" --r- "0," UserGroup 
DataFile "0," --u- "0," User 
UserGroup "1,1" --down- "0," Permission

Category.id -u-* Category 
Category.name -u-* Category 
Category.hex_code -u-* Category

DataSet.id -l-* DataSet 
DataSet.name -u-* DataSet

DataSet.description -r-* DataSet 
DataSet.category_id -u-* DataSet

DataFile.id -u-* DataFile 
DataFile.name -u-* DataFile 
DataFile.description -u-* DataFile 
DataFile.file_csv -u-* DataFile 
DataFile.provider -u-* DataFile 
DataFile.date_creation -u-* DataFile 
DataFile.confirmed -u-* DataFile 
DataFile.created_by_id -u-* DataFile 
DataFile.data_set_id -u-* DataFile

User.avatar -d-* User
User.id -d-* User 
User.password -d-* User 
User.is_editor -d-* User 
User.username -d-* User 
User.first_name -d-* User 
User.last_name -d-* User 
User.email -d-* User 
User.is_administrator -d-* User

UserGroup.id -u-* UserGroup 
UserGroup.name -u-* UserGroup 
UserGroup.user_id -u-* UserGroup 
UserGroup.permission_id -u-* UserGroup

Permission.id -u-* Permission 
Permission.name -u-* Permission 
Permission.codename -u-* Permission

@enduml


<img src="C:/open_data_management_system/open_data_management_system/rel.png"/>