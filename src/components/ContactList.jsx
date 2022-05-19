import React, {useRef} from "react";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
  
  const inputE1 = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  }


  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />;
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputE1.current.value);
  }

  //Searching Customer Success Manager by name or email

  return <div className="csmList">
  <h1 className="listHeading">Customer Success Managers </h1>
  <div className="">
    <div className="icon-input">
      <input ref={inputE1} type="text" placeholder="Search Customer Manager by name or email" className="prompt" value={props.term} onChange={getSearchTerm} />
      <i className="fas fa-search" style={{fontSize: "20px", marginLeft:"10px"}}></i>
    </div>
  </div>
  {renderContactList.length > 0 ? renderContactList : "No Contacts Available"}

 

  </div>;
};

export default ContactList;
