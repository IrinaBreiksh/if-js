export const changeDate = (date) => {
  return (
    date.replaceAll('-', '.') && date.replace(/(\d+)-(\d+)-(\d+)/, '$3.$2.$1')
  );
};
changeDate('2020-11-26');
console.log(changeDate('2020-11-26'));


const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

console.log(data[2].country + ',' + data[2].city + ',' + data[2].hotel);
const getPlace = (word) => {
  const result=[];
  for (let i = 0; i < data.length; i++) {
    if (
      data[i].country.includes(word) ||
      data[i].city.includes(word) ||
      data[i].hotel.includes(word)
    )
      result.push(data[i].country + ',' + data[i].city + ',' + data[i].hotel);
  }
  return result;
};

getPlace('Germany');
console.log(getPlace('Germany'));


