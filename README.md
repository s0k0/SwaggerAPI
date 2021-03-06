# SwaggerAPI: Todo Application Server
Tutorial app to learn how to use swagger API framework https://swagger.io/

### How to start


First, run the swagger application locally using mocks

```
swaggger project start -m
```

It will restart as soon as a file change is detected. Your application
is now reachable via http://localhost:10010/ or as defined in the swagger yaml file.


To adapt the swagger yaml file of this project, just use

```
swaggger project edit
```
to open the swagger editor at http://127.0.0.1:54218.

### How run the app


Make sure the elasticsearch client is running locally. You can test
the content with a query like this http://localhost:9200/todo/_search?q=*

Then, run the swagger application accessing actual data from elasticsearch
```
swaggger project start
```
