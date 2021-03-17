# sqs-demo

Contains a nodejs example for basic message exchange.

```
aws --endpoint="http://localhost:4566" sqs create-queue --queue-name=test_queue
```

to run: start poller component (second)
```
node second-component.js
``` 

send message from first component
```
node first-component.js "lorem ipsum blablabla"
``` 
