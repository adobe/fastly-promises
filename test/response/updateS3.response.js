'use strict';

module.exports.updateS3 = {
  access_key: 'AKIAIOSFODNN7EXAMPLE',
  bucket_name: 'my_bucket_name',
  created_at: '2016-05-23T19:48:33+00:00',
  deleted_at: null,
  domain: 's3.amazonaws.com',
  format: '%h %l %u %t "%r" %>s %b',
  format_version: '2',
  gzip_level: 0,
  message_type: 'classic',
  name: 'updated-test-s3',
  path: null,
  period: '3600',
  placement: null,
  redundancy: null,
  response_condition: '',
  secret_key: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
  service_id: 'SU1Z0isxPaozGVKXdv0eY',
  timestamp_format: '%Y-%m-%dT%H:%M:%S.000',
  updated_at: '2016-05-23T19:48:33+00:00',
  version: '1',
};

module.exports.updateS3422 = { msg: 'Version locked', detail: "Version '995' for service '3l2MjGcHgWw5NUJz7OKYH3' is locked" };

module.exports.updateS3409 = { msg: 'Duplicate record', detail: "Duplicate logging_syslog: 'test-s3'" };