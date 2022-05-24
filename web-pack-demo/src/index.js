import { DateTime } from 'luxon';

const date = DateTime.now().plus({ days: 6 });
console.log(date.toLocaleString());