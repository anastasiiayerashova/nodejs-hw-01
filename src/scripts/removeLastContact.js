import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    const updateContacts = contacts.slice(0, -1)
    await writeContacts(updateContacts)
  }
  catch (e) {
    console.log(e);
  }
};

removeLastContact();