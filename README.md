# Introduction

This project was created following the [Rocketseat](https://www.rocketseat.com.br/) NLW (Number 13). The mainly purpose of the project is to create a video helper tool where an user can select a video and, using some pre-loaded prompt templates, to generate titles suggestions, descriptions suggestions or anything you want based on the selected video.

NOTE: The project uses the OpenAI API to generate the video transcription and prompt completion (paid services), so it will be necessary to have an OpenAI Account with some credit.

## Tools

- [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [MinIO](https://min.io/)

## Pre-Execution

Execute the following command on **root** folder to execute the required tools:

```sh
docker compose up -d
```

NOTE: By default the minio server volume configuration will use **"C:\minio\data"** as volume folder. Change it to a path based on your environment. 

## Execution

### Front-end

Go to **client** folder and execute the command:

```sh
yarn dev
```

### Back-end

Go to **server** folder and execute the following commands:

```sh
yarn prisma migrate dev
yarn start:dev
```
