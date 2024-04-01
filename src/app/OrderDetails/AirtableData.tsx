import { useState, useEffect } from 'react';
import axios from 'axios';

const AirtableData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/${process.env.NEXT_PUBLIC_SHIPPLING_TABLE}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
            },
          }
        );
        setData(response.data.records);
        console.log("this is data from airtable : ", JSON.stringify(response.data.records));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Airtable Data</h1>
      <ul>
        {data.map((record, index) => (
          <li key={index}>
            <h6>Record ID: {record.id}</h6>
            <p>Full Name: {record.fields.fullName}</p>
            <p>Email: {record.fields.email}</p>
            {/* Add other fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AirtableData;
