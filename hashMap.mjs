function hashMap() {
    let capacity = 16;
    let loadFactor = 0.75;
    const maxInputs = Math.floor(capacity * loadFactor);
    let nOfInp = 0;

    let map = Array(capacity);
    
    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i))%capacity;
        }

        return hashCode;
    }

    function set(key, value) {
        if (nOfInp > maxInputs) {
            return; //will need to expand array memory later
        }
        const hashCode = hash(key);
        if (map[hashCode] === undefined) {
            map[hashCode] = Node([key, value]);
            console.log("im running");
        } else {
            let bucket = map[hashCode];
            while (bucket.nextNode !== null) {
                console.log("im running 2");
                bucket = bucket.nextNode;
            }
            bucket.nextNode = Node([key, value]);
        }
        nOfInp ++;
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

    return {hash, set, get, has, remove, get map() { return map;}};
}

//p is the [key, value] pair
function Node(p) {
    const pair = p;
    const nextNode = null;
    return {pair, nextNode};
}

export {hashMap};

