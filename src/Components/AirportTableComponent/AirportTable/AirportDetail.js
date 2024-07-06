import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TableView, TableHeader, Column, TableBody, Row, Cell } from '@react-spectrum/table';

const initialAirports = [
  { id: 1, name: "Indira Gandhi International Airport", country: "India", code: "DEL", terminals: [{ id: 1, title: "Terminal 1", description: "Optional metadata should be two lines." }, { id: 2, title: "Terminal 2", description: "Optional metadata should be two lines." }] },
  { id: 2, name: "Dubai International Airport", country: "UAE", code: "DXB", terminals: [] },
  { id: 3, name: "Heathrow Airport", country: "England", code: "LHR", terminals: [] },
  { id: 4, name: "Istanbul Airport", country: "Turkey", code: "IST", terminals: [] },
  { id: 5, name: "Rajiv Gandhi International Airport", country: "Texas", code: "DFW", terminals: [] }
];

const AirportTable = () => {
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    const savedAirports = JSON.parse(localStorage.getItem('airports'));
    if (savedAirports) {
      setAirports(savedAirports);
    } else {
      setAirports(initialAirports);
      localStorage.setItem('airports', JSON.stringify(initialAirports));
    }
  }, []);

  return (
    <div>
      <h2>Airports</h2>
      <TableView aria-label="Airports Table" selectionMode="none">
        <TableHeader>
          <Column>Name</Column>
          <Column>Country</Column>
          <Column>Code</Column>
        </TableHeader>
        <TableBody>
          {airports.map((airport) => (
            <Row key={airport.id}>
              <Cell>
                <Link to={`/airport/${airport.id}`}>{airport.name}</Link>
              </Cell>
              <Cell>{airport.country}</Cell>
              <Cell>{airport.code}</Cell>
            </Row>
          ))}
        </TableBody>
      </TableView>
    </div>
  );
};

export default AirportTable