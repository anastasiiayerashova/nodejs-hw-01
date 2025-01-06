import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContact = [];
    for (let i = 0; i < number; i++) {
      newContact.push(createFakeContact());
    }

    const updateContacts = [...contacts, ...newContact];
    await writeContacts(updateContacts);
  }
  catch (e) {
    console.log(e);
  }
};

generateContacts(5);