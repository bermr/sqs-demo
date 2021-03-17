const AWS = require('aws-sdk');
const queueUrl = 'http://localhost:4566/000000000000/test_queue';

const sendMessage = async (messageBody = 'empty') => {
    const sqs = new AWS.SQS({region: 'us-east-1'});
    const a = await sqs.sendMessage({
        QueueUrl: queueUrl,
        MessageBody: messageBody
    }).promise();
};

sendMessage(process.argv[2]);