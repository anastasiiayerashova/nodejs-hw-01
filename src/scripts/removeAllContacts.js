import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    try {
        const emptyArray = []
        await writeContacts(emptyArray)
    }
    catch (e) {
        console.log(e)
    }
 };

removeAllContacts()