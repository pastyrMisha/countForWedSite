# countForWedSite
reverse countdown for my wedding website
```javascript
  const declensionSub = (num, words) => words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  
  hours.textContent = declensionSub(res.hours, ['ЧАС', 'ЧАСА', 'ЧАСОВ']);
  ```
