import React, { useState, useEffect } from "react";
import {uuid} from "uuidv4";
import Header from "./Header";
import ContactList from "./ContactList";
import Box from "./Box";

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };


  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id != id;
    });

    setContacts(newContactList);
  }


  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact) => {        
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);      
    }
    else{
      setSearchResults(contacts);
    }
  }

 //Storing in localStorage and also preserving it after refresh
 useEffect(() => {
   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
   if(retrieveContacts) setContacts(retrieveContacts);
 },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <Box addContactHandler={addContactHandler} />
      <ContactList 
      contacts={searchTerm.length < 1 ? contacts : searchResults} 
      getContactId={removeContactHandler} 
      term={searchTerm} 
      searchKeyword={searchHandler}
      /> 

    </div>
  );
}

export default App;
