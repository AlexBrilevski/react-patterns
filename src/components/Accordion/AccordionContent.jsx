import { useAccordionContex } from "./Accordion";

export default function AccordionContent({ id, className, children }) {
  const { openItemId } = useAccordionContex();

  const isOpen = openItemId === id;

  return (
    <div className={isOpen ? `${className ?? ''} open` : `${className ?? ''} close`}>
      {children}
    </div>
  );
}
