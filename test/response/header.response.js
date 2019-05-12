module.exports.list = [
  {
    action: 'set',
    cache_condition: null,
    dst: 'http.foo',
    ignore_if_set: 0,
    name: 'testheader',
    priority: '10',
    regex: '',
    request_condition: null,
    response_condition: null,
    service_id: 'SU1Z0isxPaozGVKXdv0eY',
    src: 'client.ip',
    substitution: '',
    type: 'request',
    version: '1',
  },
  {
    action: 'set',
    cache_condition: null,
    dst: 'http.X-Location',
    ignore_if_set: 0,
    name: 'test-315af7ba8cdf6efab18991b72c31dfc281aa131c',
    priority: '10',
    regex: '',
    request_condition: 'test-ffcd887b60882f00d446f7165cbd0ea9117dfec9',
    response_condition: null,
    service_id: 'SU1Z0isxPaozGVKXdv0eY',
    src: '"https://www.example.com"',
    substitution: '',
    type: 'request',
    version: '1',
  },
  {
    action: 'set',
    cache_condition: null,
    dst: 'http.X-Location',
    ignore_if_set: 0,
    name: 'test-d03ce3f850b4d5b2c4cfabb4d069e34b1e679b60',
    priority: '10',
    regex: '',
    request_condition: 'test-0c5c409c9e6420c233fc157a312660d7070c8e1c',
    response_condition: null,
    service_id: 'SU1Z0isxPaozGVKXdv0eY',
    src: '"https://old.example.com"',
    substitution: '',
    type: 'request',
    version: '1',
  },
];

module.exports.get = {
  action: 'set',
  cache_condition: null,
  dst: 'http.foo',
  ignore_if_set: 0,
  name: 'testheader',
  priority: '10',
  regex: '',
  request_condition: null,
  response_condition: null,
  service_id: 'SU1Z0isxPaozGVKXdv0eY',
  src: 'client.ip',
  substitution: '',
  type: 'request',
  version: '1',
};

module.exports.post = {
  action: 'set',
  cache_condition: null,
  dst: 'http.foo',
  ignore_if_set: 0,
  name: 'testheader',
  priority: '10',
  regex: '',
  request_condition: null,
  response_condition: null,
  service_id: 'SU1Z0isxPaozGVKXdv0eY',
  src: 'client.ip',
  substitution: '',
  type: 'request',
  version: '1',
};

module.exports.post2 = {
  action: 'set',
  cache_condition: null,
  dst: 'http.X-Location',
  ignore_if_set: 0,
  name: 'test-a1a43f0d8ab97e83565a313d5e9db6c5b539a00a',
  priority: '10',
  regex: '',
  request_condition: 'test-5d02ca762cb6470172b3fd92c21d15e5b0e44925',
  response_condition: null,
  service_id: 'SU1Z0isxPaozGVKXdv0eY',
  src: '"https://new.example.com"',
  substitution: '',
  type: 'request',
  version: '1',
};


module.exports.put = {
  action: 'append',
  cache_condition: null,
  dst: 'http.foo',
  ignore_if_set: 0,
  name: 'updatedtestheader',
  priority: '10',
  regex: '',
  request_condition: null,
  response_condition: null,
  service_id: 'SU1Z0isxPaozGVKXdv0eY',
  src: 'client.ip',
  substitution: '',
  type: 'fetch',
  version: '1',
};

module.exports.delete = {
  status: 'ok',
};