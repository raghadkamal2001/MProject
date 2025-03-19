import React, { useEffect, useState } from "react";

const JournalistList = () => {
  const [journalists, setJournalists] = useState([]);

useEffect(() => {
  const fetchJournalists = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/journalists");

      // تحقق من أن الاستجابة كانت ناجحة
      if (!response.ok) {
        throw new Error("Failed to fetch journalists");
      }

      const data = await response.json();
      setJournalists(data);
    } catch (error) {
      console.error("Error fetching journalists:", error);
    }
  };

  fetchJournalists();
}, []);


  return (
    <div>
      <h2>List of Journalists</h2>
      <ul>
        {journalists.map((journalist) => (
          <li key={journalist._id}>
            <h3>{journalist.name}</h3>
            <p>Email: {journalist.email}</p>
            <p>Description: {journalist.description}</p>
            <img src={journalist.profilePicture} alt={journalist.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JournalistList;
