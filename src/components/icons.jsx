/**
 * Los tres iconos que usa la web, en línea.
 * @mui/icons-material traía el paquete entero para esto.
 */
export const IconMenu = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const IconClose = (p) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconArrowOut = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M7 17L17 7M17 7H8M17 7v9" />
  </svg>
);
