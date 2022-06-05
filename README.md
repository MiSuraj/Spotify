# Spotify Like App

This is a spotify like website created as part of a job interview assignment ([Here](https://docs.google.com/document/d/1JYi4kgnlUHGxuY-f4aLsyJdh2ruuskFwKHMcD3knPjU/edit?usp=sharing "Here"))

Front end : Angular8
<br/>
Back end : Java with SpringBoot 
<br/>
Database : MySQL ver 8.0

---

## Instructions to install

- Clone the repo to your system and cd to the root of the repo

- DataBase config : SpringBoot Uses hibernate.
  You need to create your Schema
- We use application.properties

  ```
  
server.port=8083

#database config:mysql
spring.datasource.url=jdbc:mysql://localhost:3306/Your_Schema
spring.datasource.username=your_database_username
spring.datasource.password=your_database_user_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

#hibernate config

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
        
  ```




- Open a Java IDE or any Editor(Supports java) the go to the file

  ```Shell
      cd /Backend/src/main/java/com/example/spotify
      You will find the file name "SpotifyApplication.java"
      Server will start at port localhost:8083
      Note:Maven is Important make sure you have it.

  ```

- Open another instance of terminal and run these commands to start the front end

  ```Shell
    cd /Frontend/src
    npm i
    ng serve
  ```