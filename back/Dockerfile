FROM openjdk:17-alpine

#WORKDIR /usr/src/app
#
#COPY /build/libs/api-server-0.0.1-SNAPSHOT.jar /build/libs/api-server-0.0.1-SNAPSHOT.jar

WORKDIR .

COPY /build/libs/api-server-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java","-jar","app.jar"]



