import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    return count;
  }
  catch (e) {
    console.log(e);
  }
};

console.log(await countContacts());