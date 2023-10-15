// pages/clients.js

import React from 'react';
import Client from '../models/Client'; // Import the Client model

const ClientsPage = ({ clients }) => {
  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {clients.map((client) => (
          <li key={client._id}>
            <h2>{client.name}</h2>
            <p>Email: {client.email}</p>
            <p>Phone: {client.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
    try {
        const clients = await Client.find();
        const clientsData = clients.map((client) => client.toObject());
    
        return {
          props: { clients: clientsData },
        };
      } catch (error) {
        console.error('Error fetching clients:', error);
        return {
          props: { clients: [] },
        };
      }
    }

export default ClientsPage;
