export type OpenState = 'open' | 'lunch' | 'closed';

export interface OpenStatus {
  state: OpenState;
  label: string;
  detail: string;
}

type Range = [number, number]; // minutes from midnight

const schedule: Record<number, Range[]> = {
  0: [],
  1: [[480, 780], [810, 1020]],
  2: [[480, 780], [810, 1020]],
  3: [[480, 780], [810, 1020]],
  4: [[480, 780], [810, 1020]],
  5: [[480, 780], [810, 1080]],
  6: [[540, 720]]
};

const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

export function getOpenStatus(now: Date = new Date()): OpenStatus {
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();
  const today = schedule[day];

  const current = today.find(([start, end]) => minutes >= start && minutes < end);
  if (current) {
    return { state: 'open', label: 'Jetzt geöffnet', detail: `bis ${formatTime(current[1])} Uhr` };
  }

  const isLunch = today.length > 1 && minutes >= today[0][1] && minutes < today[1][0];
  if (isLunch) {
    return { state: 'lunch', label: 'Mittagspause', detail: `ab ${formatTime(today[1][0])} Uhr wieder da` };
  }

  const laterToday = today.find(([start]) => start > minutes);
  if (laterToday) {
    return { state: 'closed', label: 'Geschlossen', detail: `öffnet heute ${formatTime(laterToday[0])} Uhr` };
  }

  for (let offset = 1; offset <= 7; offset++) {
    const nextDay = (day + offset) % 7;
    const ranges = schedule[nextDay];
    if (ranges.length) {
      const when = offset === 1 ? 'morgen' : dayNames[nextDay];
      return { state: 'closed', label: 'Geschlossen', detail: `öffnet ${when} ${formatTime(ranges[0][0])} Uhr` };
    }
  }

  return { state: 'closed', label: 'Geschlossen', detail: '' };
}

function formatTime(minutes: number): string {
  const h = Math.floor(minutes / 60).toString().padStart(2, '0');
  const m = (minutes % 60).toString().padStart(2, '0');
  return `${h}:${m}`;
}