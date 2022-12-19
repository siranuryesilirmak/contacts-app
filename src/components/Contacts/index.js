import { useEffect, useState } from 'react'
import List from './List'
import Form from './Form'

function Contacts() {
    const [contacts, setContacts] = useState([
      {
        fullname: "merve",
        phone_number: 34467
      },{
        fullname: "hande",
        phone_number: 5754
      },{
        fullname: "özge",
        phone_number: 688978
      }
    ])
    useEffect(() => {
        console.log(contacts)
    },[contacts])
  return (
    <div>
        Contacts
        <br></br>
        <List contacts = {contacts}></List>
        <br></br>
        <Form addContact = {setContacts} contacts = {contacts}></Form>
    </div>
  )
}

export default Contacts
