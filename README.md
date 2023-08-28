# Marseadata

This project is the frontend build for the marseadata.org project. Its intention is to be used as a User Interface for the project to search for specific authors that has contributed to certain specific fields in marine plastic research.

## Technology used

This project was built using `Solid.js` for a minimalistic and snappy front end. Since Solid.js came with most of the state managment needed for this project out of the box, it is a great choice for a minimal and small set of features project such as this one. 

The fuzzy search capability is implemented using `lyrasearch`. This is because the back end does not provide the free query search capability, so we outsourced it to the frontend instead.

The package management used is `pnpm` and this project is configure with Vite and written using `Typescript`.

There is also a `docker` file that has been optimized to less than 50mb in size for fast deployment to your own server if you wish to do so.

## Instruction

To build this project, just simply run:

build command

```shell
docker build -t docker-name .
```

run command 

```shell
docker run -it --rm -d -p 80:80 docker-name 
```
