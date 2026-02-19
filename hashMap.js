function hashMap() {
    let capacity = 16;
    let loadFactor = 0.75;
    const maxInputs = capacity * loadFactor;
    let nOfInp = 0;

    let map = Array(capacity)
    
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
            return;
        }
        const hashCode = hash(key);
        map[hashCode] = value;
    }

    return {hash, set};
}



