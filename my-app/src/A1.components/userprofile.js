import React, { useState } from "react";

function UserProfile({ name, email, age }) {
  const [showEmail, setShowEmail] = useState(true);
  console.log(showEmail);
  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      {showEmail && <p><strong>Email:</strong> {email}</p>}
      <p><strong>Age:</strong> {age}</p>
      <button onClick={() => setShowEmail(!showEmail)}>
        {showEmail ? "Hide Email" : "Show Email"}
      </button>
    </div>
  );
}

export default UserProfile;
