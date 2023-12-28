# Spam Filter Storage

This is a microservice handling to save the entries made into the Spam Filter tool in documents of a MongoDB.

### How to install it
This ms needs a running instance of the spam_filtering_analysis and spam_filter_storage container

To build this container in particular, run this command:

```console
$ docker build -t your_docker_image_name:latest .
```

To execute this contianer, run this command:

```console
$ docker run -p port:port -t your_docker_image_name:latest
```

The other microservices can be built and executed the same way however some times environment variables are needed.

For this one needs to add this flag for building the container with ENV variables:

```console
$ docker build --build-arg ARG=VALUE ....
```

While running the environment variables dependent containers one needs this flag:

```console
$ docker run -e ARG=VALUE ...
```
