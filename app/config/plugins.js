module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION', 'us-east-1'),
        cdn: env('CLOUDFRONT_DOMAIN_NAME'),
        params: {
          Bucket: env('S3_BUCKET', 'new-project-aws-s3'),
        }
      }
    }
  }
})
