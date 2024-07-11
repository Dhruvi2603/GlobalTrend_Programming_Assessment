class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        if (key in this.map) {
            return this.map[key];
        } else {
            return null;
        }
    }

    remove(key) {
        if (key in this.map) {
            delete this.map[key];
        }
    }
}

const map = new HashMap();
map.put('a', 1);
console.log(map.get('a')); 
map.put('b', 2);
console.log(map.get('b')); 
map.remove('a');
console.log(map.get('a')); 
