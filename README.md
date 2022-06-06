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




- Open a Java IDE or any Editor(Supports java) the go to the file and run it

  ```Shell
      cd /Backend/src/main/java/com/example/spotify
      You will find the file name "SpotifyApplication.java" run it
      Server will start at port localhost:8083
      Note:Maven is Important make sure you have it.

  ```

- Open another instance of terminal and run these commands to start the front end

  ```Shell
    cd /Frontend/src
    npm i
    ng serve
  ```
  
## EER Diagram

  
  
  ![Screenshot (226)](https://user-images.githubusercontent.com/78839056/172249099-a74078d0-e914-46bd-9809-afd5ca1d51e4.png)

### Project Screenshots

  ![Screenshot (227)](https://user-images.githubusercontent.com/78839056/172249347-2670dc03-bad4-4ae2-ba1e-7202900c5846.png)

![Screenshot (228)](https://user-images.githubusercontent.com/78839056/172249432-01254c6d-2fa6-4109-8f3b-cb65c7754503.png)

![Screenshot (229)](https://user-images.githubusercontent.com/78839056/172249718-8b491399-2f14-4173-8c88-66f42123fd63.png)

![Screenshot (230)](https://user-images.githubusercontent.com/78839056/172255032-768c32d1-cf7c-4a32-8095-3fb8f8ea792e.png)

![Screenshot (231)](https://user-images.githubusercontent.com/78839056/172255059-fbf2fcfe-b884-4686-bc47-7013b7883d9d.png)
![Screenshot (232)](https://user-images.githubusercontent.com/78839056/172255084-262c2515-ee84-45ad-a95f-d01e6b05a610.png)

![Screenshot (233)](https://user-images.githubusercontent.com/78839056/172255114-a6648452-9d71-4fe3-9490-33b9492aa675.png)

![Screenshot (234)](https://user-images.githubusercontent.com/78839056/172255150-53cfd2f1-7beb-4f00-8ed5-e4fde021a666.png)

![Screenshot (235)](https://user-images.githubusercontent.com/78839056/172255176-bfecae36-33a8-4dae-9006-2f3897fd5da8.png)

  