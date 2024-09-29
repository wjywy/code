class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
    }
  
    get(key) {
      if (this.cache.has(key)) {
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
      }
      return -1;
    }
  
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      } else if (this.cache.size >= this.capacity) {
        const oldestKey = this.cache.keys().next().value;
        this.cache.delete(oldestKey);
      }
      this.cache.set(key, value);
    }
  }
  
  // 示例用法
  const cache = new LRUCache(2); // 创建容量为2的LRU缓存器
  
  cache.put(1, 'Apple');
  cache.put(2, 'Banana');
  console.log(cache.get(1)); // 输出: 'Apple'
  
  cache.put(3, 'Orange'); // 'Banana'将被淘汰
  console.log(cache.get(2)); // 输出: -1，因为该键已被淘汰
  
  cache.put(4, 'Grapes'); // 'Apple'将被淘汰
  console.log(cache.get(1)); // 输出: -1，因为该键已被淘汰
  console.log(cache.get(3)); // 输出: 'Orange'
  console.log(cache.get(4)); // 输出: 'Grapes'
  