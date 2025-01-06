import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const getAllContacts = await readContacts();
    return getAllContacts;
  }
  catch (e) {
    console.log(e);
  }
};

console.log(await getAllContacts());