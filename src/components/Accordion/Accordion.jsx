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

  function openItem(id) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }

  const contexValue = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionContex.Provider value={contexValue}>
      <ul className={className}>
        {children}
      </ul>
    </AccordionContex.Provider>
  );
}
