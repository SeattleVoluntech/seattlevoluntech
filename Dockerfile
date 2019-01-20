# Multi-stage build setup (https://docs.docker.com/develop/develop-images/multistage-build/)

# Stage 1 (to create a "build" image, ~140MB)
FROM gradle:5.1.1-jdk8-alpine AS builder
RUN java -version

COPY --chown=gradle:gradle . /usr/src/myapp/
WORKDIR /usr/src/myapp/
USER root
RUN apk --no-cache add nodejs nodejs-npm
USER gradle
RUN cd front-end && npm rebuild node-sass && npm install && npm run build && cd ..
RUN gradle build

# Stage 2 (to create a downsized "container executable", ~87MB)
FROM openjdk:8-jre-alpine3.7
WORKDIR /root/
COPY --from=builder /usr/src/myapp/build/libs/seattlevoluntech-0.0.1-SNAPSHOT.jar ./app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-XX:+UnlockExperimentalVMOptions", "-XX:+UseCGroupMemoryLimitForHeap", "-jar", "./app.jar"]