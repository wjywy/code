const arr = [
  [55.0, 24.0, 42.0, 25.0, 55440.0],
  [37.0, 43.0, 45.0, 22.0, 71595.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [43.0, 47.0, 45.0, 30.0, 90945.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [78.0, 18.0, 38.0, 21.0, 53352.0],
  [96.0, 56.0, 24.0, 11.0, 129024.0],
  [28.0, 59.0, 43.0, 29.0, 71036.0],
  [59.0, 67.0, 38.0, 21.0, 150214.0],
  [98.0, 60.0, 4.0, 15.0, 23520.0],
  [63.0, 28.0, 44.0, 24.0, 77616.0],
  [94.0, 59.0, 45.0, 18.0, 249570.0],
  [28.0, 59.0, 43.0, 29.0, 71036.0],
  [37.0, 59.0, 29.0, 29.0, 63307.0],
  [14.0, 53.0, 38.0, 17.0, 28196.0],
  [47.0, 59.0, 11.0, 11.0, 30503.0],
  [43.0, 30.0, 21.0, 19.0, 27090.0],
  [55.0, 49.0, 12.0, 17.0, 32340.0],
  [84.0, 48.0, 14.0, 15.0, 56448.0],
  [72.0, 67.0, 23.0, 4.0, 110952.0],
  [89.0, 16.0, 21.0, 30.0, 29904.0],
  [49.0, 57.0, 45.0, 14.0, 125685.0],
  [36.0, 45.0, 13.0, 18.0, 21060.0],
  [92.0, 13.0, 36.0, 18.0, 43056.0],
  [61.0, 58.0, 16.0, 13.0, 56608.0],
  [39.0, 55.0, 23.0, 14.0, 49335.0],
  [83.0, 58.0, 16.0, 11.0, 77024.0],
  [79.0, 27.0, 38.0, 27.0, 81054.0],
  [98.0, 60.0, 4.0, 15.0, 23520.0],
  [58.0, 20.0, 35.0, 9.0, 40600.0],
  [64.0, 56.0, 38.0, 6.0, 136192.0],
  [59.0, 50.0, 38.0, 23.0, 112100.0],
  [41.0, 52.0, 48.0, 17.0, 102336.0],
  [41.0, 52.0, 48.0, 17.0, 102336.0],
  [94.0, 51.0, 25.0, 20.0, 119850.0],
  [89.0, 39.0, 20.0, 8.0, 69420.0],
  [84.0, 13.0, 24.0, 19.0, 26208.0],
  [92.0, 13.0, 36.0, 18.0, 43056.0],
  [59.0, 50.0, 38.0, 23.0, 112100.0],
  [77.0, 43.0, 40.0, 5.0, 132440.0],
  [97.0, 8.0, 26.0, 17.0, 20176.0],
  [86.0, 21.0, 32.0, 18.0, 57792.0],
  [37.0, 59.0, 29.0, 29.0, 63307.0],
  [86.0, 21.0, 32.0, 18.0, 57792.0],
  [59.0, 50.0, 38.0, 23.0, 112100.0],
  [83.0, 59.0, 19.0, 14.0, 93043.0],
  [94.0, 54.0, 42.0, 18.0, 213192.0],
  [94.0, 59.0, 45.0, 18.0, 249570.0],
  [98.0, 60.0, 4.0, 15.0, 23520.0],
  [100.0, 69.0, 8.0, 9.0, 55200.0],
  [64.0, 52.0, 41.0, 4.0, 136448.0],
  [55.0, 24.0, 42.0, 25.0, 55440.0],
  [63.0, 28.0, 44.0, 24.0, 77616.0],
  [63.0, 28.0, 44.0, 24.0, 77616.0],
  [86.0, 21.0, 32.0, 18.0, 57792.0],
  [94.0, 59.0, 45.0, 18.0, 249570.0],
  [94.0, 59.0, 45.0, 18.0, 249570.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [94.0, 51.0, 25.0, 20.0, 119850.0],
  [39.0, 55.0, 23.0, 14.0, 49335.0],
  [37.0, 59.0, 29.0, 29.0, 63307.0],
  [64.0, 52.0, 41.0, 4.0, 136448.0],
  [94.0, 54.0, 42.0, 18.0, 213192.0],
  [86.0, 21.0, 32.0, 18.0, 57792.0],
  [87.0, 44.0, 50.0, 8.0, 191400.0],
  [94.0, 59.0, 45.0, 18.0, 249570.0],
  [86.0, 21.0, 32.0, 18.0, 57792.0],
  [100.0, 69.0, 8.0, 9.0, 55200.0],
  [49.0, 57.0, 45.0, 14.0, 125685.0],
  [59.0, 67.0, 38.0, 21.0, 150214.0],
  [98.0, 60.0, 4.0, 15.0, 23520.0],
  [59.0, 50.0, 38.0, 23.0, 112100.0],
  [59.0, 67.0, 38.0, 21.0, 150214.0],
  [37.0, 59.0, 29.0, 29.0, 63307.0],
  [89.0, 39.0, 20.0, 8.0, 69420.0],
  [100.0, 69.0, 8.0, 9.0, 55200.0],
  [90.0, 26.0, 28.0, 12.0, 65520.0],
  [77.0, 43.0, 40.0, 5.0, 132440.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [59.0, 50.0, 38.0, 23.0, 112100.0],
  [96.0, 56.0, 24.0, 11.0, 129024.0],
  [70.0, 67.0, 23.0, 28.0, 107870.0],
  [72.0, 67.0, 23.0, 4.0, 110952.0],
  [86.0, 21.0, 32.0, 18.0, 57792.0],
  [98.0, 60.0, 4.0, 15.0, 23520.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [70.0, 67.0, 23.0, 28.0, 107870.0],
  [87.0, 44.0, 50.0, 8.0, 191400.0],
  [87.0, 44.0, 50.0, 8.0, 191400.0],
  [94.0, 54.0, 42.0, 18.0, 213192.0],
  [95.0, 36.0, 38.0, 23.0, 129960.0],
  [64.0, 56.0, 38.0, 6.0, 136192.0],
  [70.0, 67.0, 23.0, 28.0, 107870.0],
  [94.0, 51.0, 25.0, 20.0, 119850.0],
  [92.0, 13.0, 36.0, 18.0, 43056.0],
  [46.0, 62.0, 21.0, 7.0, 59892.0],
  [46.0, 62.0, 21.0, 7.0, 59892.0],
  [92.0, 13.0, 36.0, 18.0, 43056.0],

  [37.0, 59.0, 29.0, 29.0, 63307.0],
  [59.0, 67.0, 38.0, 21.0, 150214.0],
  [94.0, 51.0, 25.0, 20.0, 119850.0],
  [94.0, 54.0, 42.0, 18.0, 213192.0],
  [95.0, 36.0, 38.0, 23.0, 129960.0],
  [94.0, 54.0, 42.0, 18.0, 213192.0],
  [94.0, 54.0, 42.0, 18.0, 213192.0],
  [98.0, 60.0, 4.0, 15.0, 23520.0],
  [94.0, 59.0, 45.0, 18.0, 249570.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [86.0, 21.0, 32.0, 18.0, 57792.0],
  [94.0, 51.0, 25.0, 20.0, 119850.0],
  [94.0, 59.0, 45.0, 18.0, 249570.0],
  [92.0, 13.0, 36.0, 18.0, 43056.0],
  [95.0, 36.0, 38.0, 23.0, 129960.0],
  [92.0, 13.0, 36.0, 18.0, 43056.0],
  [92.0, 13.0, 36.0, 18.0, 43056.0],
  [98.0, 60.0, 4.0, 15.0, 23520.0],
  [89.0, 39.0, 20.0, 8.0, 69420.0],
  [94.0, 51.0, 25.0, 20.0, 119850.0],
  [94.0, 54.0, 42.0, 18.0, 213192.0],
  [94.0, 59.0, 45.0, 18.0, 249570.0],
  [94.0, 59.0, 45.0, 18.0, 249570.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
  [98.0, 68.0, 33.0, 26.0, 219912.0],
];
console.log(arr.length);
