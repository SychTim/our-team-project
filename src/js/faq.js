import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import '../css/faq.css';

export function faq() {
  new Accordion('.faq-list', {
    elementClass: 'faq-item',
    triggerClass: 'faq-list-btn',
    panelClass: 'faq-list-panel',
    showMultiple: true,
  });
}