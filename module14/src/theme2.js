const data = {
  "name": "Name",
  "phone": "+38 095 666 66 66",
  "objectField": {
    key1: 'value1',
  },
  "arrayField": [ "arrayValue", 2 ],
  "boolField": false,
  "undefined": null,
};

const stringified = JSON.stringify(data);
const parsed = JSON.parse(stringified);

console.log('stringified', stringified);
console.log('parsed', parsed);