import React, { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [members, setMembers] = useState([]);
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    loadMembers();
  }, []);

  // GET
  async function loadMembers() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMembers(data.slice(0, 8));
    } catch (error) {
      console.log(error);
    }
  }

  // CREATE
  async function saveMember() {
    if (fullName.trim() === "" || emailAddress.trim() === "") {
      alert("Please fill all fields.");
      return;
    }

    if (selectedId) {
      updateMember();
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: emailAddress,
        }),
      });

      const data = await response.json();

      setMembers([
        { ...data, id: Date.now() },
        ...members,
      ]);

      clearForm();
    } catch (error) {
      console.log(error);
    }
  }

  // UPDATE
  async function updateMember() {
    try {
      const response = await fetch(`${API_URL}/${selectedId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: selectedId,
          name: fullName,
          email: emailAddress,
        }),
      });

      const updated = await response.json();

      setMembers(
        members.map((member) =>
          member.id === selectedId
            ? {
                ...member,
                name: updated.name,
                email: updated.email,
              }
            : member
        )
      );

      clearForm();
    } catch (error) {
      console.log(error);
    }
  }

  // DELETE
  async function removeMember(id) {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      setMembers(
        members.filter((member) => member.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  }

  function editMember(member) {
    setSelectedId(member.id);
    setFullName(member.name);
    setEmailAddress(member.email);
  }

  function clearForm() {
    setFullName("");
    setEmailAddress("");
    setSelectedId(null);
  }

  return (
    <div className="container">
      <h2>React CRUD Application</h2>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />

        <button onClick={saveMember}>
          {selectedId ? "Update User" : "Add User"}
        </button>

        {selectedId && (
          <button onClick={clearForm}>
            Cancel
          </button>
        )}
      </div>

      {members.map((member) => (
        <div key={member.id} className="card">
          <h3>{member.name}</h3>

          <p>{member.email}</p>

          <button
            onClick={() => editMember(member)}
          >
            Edit
          </button>

          <button
            onClick={() => removeMember(member.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;