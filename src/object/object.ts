export default function objectSample() {
  // const a: object = {
  //   name: 'JR',
  //   age: 30
  // }

  // object literal
  let country: {
    language: string;
    name: string;
  } = {
    language: 'Japanese',
    name: 'Japan',
  };

  console.log('objectSample 01', country);

  country = {
    language: 'English',
    name: 'USA',
  };

  console.log('objectSample 02', country);

  // optional and readonly
  const coffmanjrp: {
    age: number;
    lastName: string;
    readonly firstName: string;
    gender?: string;
  } = {
    age: 30,
    lastName: 'Coffman',
    firstName: 'Paul',
  };

  coffmanjrp.gender = 'male';
  coffmanjrp.lastName = 'Oshiro';
  // coffmanjrp.firstName = 'Masami'

  console.log('objectSample 03', coffmanjrp);

  // index signature
  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: 'Tokyo',
    Korea: 'Soul',
  };

  capitals.China = 'Beijing';
  capitals.Canada = 'Ottawa';

  console.log('objectSample 04', capitals);
}
