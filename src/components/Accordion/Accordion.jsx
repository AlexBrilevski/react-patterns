import { createContext, useContext, useState } from 'react';

const AccordionContex = createContext();

export function useAccordionContex() {
  const ctx = useContext(AccordionContex);

  if (!ctx) {
    throw new Error('Accordion-related components must be wrapped by <Accordion>');
  }

  return ctx;
}

export default function Accordion({ className, children }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId(prevId => prevId === id ? null : id);
  }

  const contexValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContex.Provider value={contexValue}>
      <ul className={className}>
        {children}
      </ul>
    </AccordionContex.Provider>
  );
}
