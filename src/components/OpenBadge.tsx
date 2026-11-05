import React from 'react';
import { useOpenStatus } from '../hooks/useOpenStatus';

const dotColor = {
  open: 'bg-emerald-400',
  lunch: 'bg-amber-400',
  closed: 'bg-red-400'
};

export function OpenBadge() {
  const status = useOpenStatus();
  return (
    <span className="inline-flex items-center gap-2" aria-live="polite">
      <span className={`h-2 w-2 rounded-full ${dotColor[status.state]}`} aria-hidden="true" />
      <span className="font-medium">{status.label}</span>
      {status.detail && <span className="opacity-70">· {status.detail}</span>}
    </span>);

}