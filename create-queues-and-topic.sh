#!/usr/bin/env bash

aws --endpoint="http://localhost:4566" sqs create-queue --queue-name=test_queue
aws --endpoint="http://localhost:4566" sqs create-queue --queue-name=another_test_queue
aws --endpoint="http://localhost:4566" sns create-topic --name=test_topic
aws --endpoint="http://localhost:4566" sns subscribe --topic-arn=arn:aws:sns:us-east-1:000000000000:test_topic --protocol=sqs --notification-endpoint=http://localhost:4566/000000000000/test_queue
aws --endpoint="http://localhost:4566" sns subscribe --topic-arn=arn:aws:sns:us-east-1:000000000000:test_topic --protocol=sqs --notification-endpoint=http://localhost:4566/000000000000/another_test_queue
