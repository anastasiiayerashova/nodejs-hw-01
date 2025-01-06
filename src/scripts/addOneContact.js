import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const getAllContacts = await readContacts();
    const newContact = createFakeContact();
    const updateContacts = [...getAllContacts, newContact];
    await writeContacts(updateContacts);
  }
  catch (e) {
    console.log(e);
  }
};

addOneContact();