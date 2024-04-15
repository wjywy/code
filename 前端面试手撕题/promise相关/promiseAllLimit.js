function promiseAllLimit(limit) {
    return function (promiseFactories) {
      let results = [];
      let running = 0;
      let completed = 0;
      let index = 0;
  
      return new Promise((resolve, reject) => {
        while (running < limit && index < promiseFactories.length) {
          nextPromise();
        }
  
        function nextPromise() {
          if (completed >= promiseFactories.length) {
            resolve(results);
            return;
          }
  
          if (index >= promiseFactories.length) {
            return;
          }
  
          let currentIndex = index;
          let promiseFactory = promiseFactories[currentIndex];
          index++;
  
          promiseFactory().then(result => {
            results[currentIndex] = result;
            completed++;
            running--;
            if (completed >= promiseFactories.length) {
              resolve(results);
            } else {
              nextPromise();
            }
          }).catch(error => {
            reject(error);
          });
  
          running++;
        }
      });
    };
  }