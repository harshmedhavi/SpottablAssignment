
import React from "react";

//Whenever a Customer Success Manager is added, this code is used to create Cards that can be reused again and agaian

const ContactCard = (props) => {
  const { id, name, email, position } = props.contact;

  return (
    <div className="listBox">
    
      <div className="floatingIcon">
        <i class="fas fa-user-circle" />
      </div>

      <div className="content">
        <div className="cardHeader">{name}</div>
        <div className="cardFooter">
          <span className="space">
            <i
              class="fas fa-user-alt"
              style={{
                fontSize: "0.9rem",
                color: "#808080",
                marginRight: "3px"
              }}
            ></i>
            {position}
          </span>

          <span className="spaceR">
            <i
              class="fas fa-circle"
              style={{
                fontSize: "0.9rem",
                color: "#808080",
                marginRight: "3px"
              }}
            ></i>
            {email}
          </span>
        </div>
      </div>

      <i
        class="fas fa-trash delete"
        style={{ fontSize: "20px", color: "#1e31a1" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
