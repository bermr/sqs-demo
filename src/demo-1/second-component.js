const AWS = require('aws-sdk');
const queueUrl = 'http://localhost:4566/000000000000/test_queue';

const run = async () => {
    const sqs = new AWS.SQS({region: 'us-east-1'});

    while(true) {
        try {
            const a = await sqs.receiveMessage({
                QueueUrl: queueUrl,
                WaitTimeSeconds: 20
            }).promise();

            console.log('Message received: ', a.Messages[0].Body);

            await sqs.deleteMessage({
                QueueUrl: queueUrl,
                ReceiptHandle: a.Messages[0].ReceiptHandle
            }).promise();
        } catch (err) {
            console.log(err);
            break;
        }
    }
};

run();