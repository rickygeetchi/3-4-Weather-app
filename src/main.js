import * as weatherlib from '@cicciosgamino/openweather-apis';
import input from 'input';

const key = '3aad45db1823692854e69062c76be1ad';

async function getClient(zipCode) {
  const client = await (new weatherlib.AsyncWeather());
  client.setLang('en');
  client.setApiKey(key);
  client.setZipCodeAndCountryCode(zipCode, 'US');
  return client;
}

const userZip = await input.text('What is your zip code?');

const client = await getClient(userZip);
const desc = await client.getDescription();
console.log(desc);

