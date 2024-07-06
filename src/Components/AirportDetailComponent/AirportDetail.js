import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import Modal from 'react-modal';
import { Button } from '@react-spectrum/button';
import { Checkbox } from '@react-spectrum/checkbox';
import { TextField } from '@react-spectrum/textfield';
import { Link } from '@react-spectrum/link';
import { Heading, Text } from '@react-spectrum/text';
import { Flex } from '@react-spectrum/layout';

Modal.setAppElement('#root');

const AirportDetail = () => {
  const { id } = useParams();
  const [airport, setAirport] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTerminal, setSelectedTerminal] = useState(null);
  const [terminalTitle, setTerminalTitle] = useState('');
  const [terminalDescription, setTerminalDescription] = useState('');

  useEffect(() => {
    const savedAirports = JSON.parse(localStorage.getItem('airports'));
    const foundAirport = savedAirports.find((airport) => airport.id === parseInt(id));
    setAirport(foundAirport);
  }, [id]);

  const openModal = (terminal) => {
    setSelectedTerminal(terminal);
    setTerminalTitle(terminal.title);
    setTerminalDescription(terminal.description);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSaveTerminal = () => {
    const updatedAirport = { ...airport };
    const terminalIndex = updatedAirport.terminals.findIndex(t => t.id === selectedTerminal.id);
    updatedAirport.terminals[terminalIndex] = {
      ...selectedTerminal,
      title: terminalTitle,
      description: terminalDescription
    };
    setAirport(updatedAirport);

    const savedAirports = JSON.parse(localStorage.getItem('airports'));
    const airportIndex = savedAirports.findIndex(a => a.id === updatedAirport.id);
    savedAirports[airportIndex] = updatedAirport;
    localStorage.setItem('airports', JSON.stringify(savedAirports));

    setModalIsOpen(false);
  };

  if (!airport) return <div>Loading...</div>;

  return (
    <div>
      <Link>
        <RouterLink to="/">Back to Airports</RouterLink>
      </Link>
      <Heading level={2}>{airport.name}</Heading>
      <Text>Country: {airport.country}</Text>
      <Text>Code: {airport.code}</Text>
      <Heading level={3}>Terminals</Heading>
      <Flex direction="column" gap="size-200">
        {airport.terminals.map(terminal => (
          <Button key={terminal.id} variant="primary" onPress={() => openModal(terminal)}>
            {terminal.title} - {terminal.description}
          </Button>
        ))}
        <Button variant="cta" onPress={() => openModal({ id: airport.terminals.length + 1, title: '', description: '' })}>
          +Add Terminal
        </Button>
      </Flex>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <Heading level={2}>Terminal title</Heading>
        <TextField label="Title" value={terminalTitle} onChange={setTerminalTitle} />
        <TextField label="Description" value={terminalDescription} onChange={setTerminalDescription} />
        <Flex gap="size-100" justifyContent="end">
          <Button variant="secondary" onPress={closeModal}>Cancel</Button>
          <Button variant="cta" onPress={handleSaveTerminal}>Continue</Button>
        </Flex>
      </Modal>
      <Heading level={3}>Services</Heading>
      <Flex direction="column" gap="size-200">
        <TextField label="Service Name" placeholder="Service Name" />
        <TextField label="Category" placeholder="Category" />
        <TextField label="Sub Category" placeholder="Sub Category" />
        <Button variant="primary">Upload Image</Button>
        <Checkbox>Show image</Checkbox>
        <Button variant="cta">Save</Button>
      </Flex>
    </div>
  );
};

export default AirportDetail;