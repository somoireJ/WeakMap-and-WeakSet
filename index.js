/*WeakMap and WeakSet are two data structures in JavaScript that are used to store weakly held references to objects. 
Unlike other data structures, WeakMap and WeakSet do not prevent their keys from being garbage collected if there are no other references to them. 
This makes them well-suited for use as a cache. 
They are also useful for keeping track of objects in an asynchronous environment, since they do not need to be explicitly removed.*/

// WeakMap
const weakMap = new WeakMap();

const object1 = { name: 'John' };
const object2 = { name: 'Solo' };

weakMap.set(object1, 'Solo');
weakMap.set(object2, 'Bar');

console.log(weakMap.get(object1));
/*A WeakMap is a data structure similar to a Map, but the keys are weakly referenced. This means that if the key is no longer being used by the program, it can be garbage collected. In this example, we have two objects, object1 and object2. We are setting the value of each object to a string. When we call weakMap.get(object1), it will return the value 'Solo'.*/

// WeakSet
const weakSet = new WeakSet();

const object3 = { name: 'John' };
const object4 = { name: 'solo' };

weakSet.add(object3);
weakSet.add(object4);

console.log(weakSet.has(object3));


/*example using cache*/

const cache = new WeakMap();

function addToCache(key, value) {
  cache.set(key, value);
}

function getFromCache(key) {
  return cache.get(key);
}

const item1 = { name: 'John' };
const item2 = { name: 'Solo' };

addToCache(item1, 'Somo');
addToCache(item2, 'Bar');

console.log(getFromCache(item1));



/* A WeakSet is a data structure similar to a Set, but the values are weakly referenced. This means that if the value is no longer being used by the program, it can be garbage collected. In this example, we are adding two objects, item1 and item2, to the WeakSet. When we call getFromCache(item1), it will return the value 'Somo'.*/