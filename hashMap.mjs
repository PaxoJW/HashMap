function hashMap() {
    let capacity = 16;
    let loadFactor = 0.75;
    const maxInputs = Math.floor(capacity * loadFactor);

    let map = Array(capacity);
    
    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i))%capacity;
        }

        return hashCode;
    }

    const entriesF = entries();
    function set(key, value) {
        if (length() + 1 > maxInputs) {
            capacity *= 2; //we double capacity
            // const entries = entries();
            map = Array(capacity);
            for (let entry of entriesF) {
                set(entry[0], entry[1]);
                console.log(length());
            }
        }

        const hashCode = hash(key);
        if (map[hashCode] === undefined) {
            map[hashCode] = Node([key, value]);
        } else {
            let bucket = map[hashCode];
            while (bucket.pair[0] !== key) {
                if (bucket.nextNode !== null) {
                    bucket = bucket.nextNode;
                } else {
                    bucket.nextNode = Node([key, value]);
                    return;
                }
            }
            bucket.pair[1] = value;
        }
    }

    function get(key) {
        const hashCode = hash(key);
        let bucket = map[hashCode];
        if (bucket !== undefined) {
            while (bucket !== null) {
                if (bucket.pair[0] === key) {
                    return bucket.pair[1];
                }
                bucket = bucket.nextNode;
            }
        }
        return null;
    }

    function has(key) {
        const hashCode = hash(key);
        let bucket = map[hashCode];
        if (bucket !== undefined) {
            while (bucket !== null) {
                if (bucket.pair[0] === key) {
                    return true;
                }
                bucket = bucket.nextNode;
            }
        }
        return false;
    }

    function remove(key) {
        const hashCode = hash(key);
        let bucket = map[hashCode];
        if (bucket !== undefined) {
            while (bucket !== null) {
                if (bucket.pair[0] === key) {
                    bucket = bucket.nextNode;
                }
                bucket = bucket.nextNode;
            }
        }
        return false;
    }

    function length() {
        let length = 0;
        for (let bucket of map) {
            if (bucket !== undefined) {
                while (bucket !== null) {
                    bucket = bucket.nextNode;
                    length ++;
                }
            }
        }
        return length;
    }

    
    function clear() {
        //when clearing resie to the smallest possible
        //we can't use this function to clear the array
        //when capacity is exceeded
        capacity = 16;
        map = Array(capacity);
    }

    function keys() {
        let keysArr = [];
        for (let bucket of map) {
            if (bucket !== undefined) {
                while (bucket !== null) {
                    keysArr.push(bucket.pair[0]);
                    bucket = bucket.nextNode;
                }
            }
        }
        return keysArr;
    }

    function values() {
        let valuesArr = [];
        for (let bucket of map) {
            if (bucket !== undefined) {
                while (bucket !== null) {
                    valuesArr.push(bucket.pair[1]);
                    bucket = bucket.nextNode;
                }
            }
        }
        return valuesArr;
    }

    function entries() {
        let entriesArr = [];
        for (let bucket of map) {
            if (bucket !== undefined) {
                while (bucket !== null) {
                    entriesArr.push(bucket.pair);
                    bucket = bucket.nextNode;
                }
            }
        }
        return entriesArr;
    }


    return {hash, set, get, has, remove, clear, length, keys, values, entries, get map() { return map;}};
}

//p is the [key, value] pair
function Node(p) {
    const pair = p;
    const nextNode = null;
    return {pair, nextNode};
}

export {hashMap};

