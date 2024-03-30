"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { json } from 'stream/consumers';
import { Record } from 'airtable';

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
            console.log("this is data from airtable : ", JSON.stringify(response.data));
          } catch (error:any) {
            if (error.response) {
              // The request was made and the server responded with a status code
              console.error('Error response:', error.response.data);
              console.error('Status code:', error.response.status);
            } else if (error.request) {
              // The request was made but no response was received
              console.error('No response received:', error.request);
            } else {
              // Something else happened while setting up the request
              console.error('Error setting up request:', error.message);
            }
          }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Airtable Data</h1>
      <ul>
         {data.map((item, index)=> (
          <li key={index}>{item}</li>
        ))} 
        <li>hello this data</li>
      </ul>
    </div>
  );
};

export default AirtableData;
