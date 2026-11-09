import { addDays, format, startOfWeek, subDays } from "date-fns";

export const todayKey = () => format(new Date(), "yyyy-MM-dd");

export const weekKeysFor = (date = new Date()) => {
  const start = startOfWeek(date, { weekStartsOn: 1 });

  return Array.from({ length: 7 }, (_, index) => {
    const current = addDays(start, index);
    return {
      date: current,
      key: format(current, "yyyy-MM-dd"),
      label: format(current, "EEE"),
    };
  });
};

export const weekKeys = () => weekKeysFor(new Date());

export const streakFromKeys = (keys = []) => {
  const uniqueKeys = [...new Set(keys)].sort();
  if (!uniqueKeys.length) return { current: 0, longest: 0 };

  let longest = 1;
  let run = 1;

  for (let index = 1; index < uniqueKeys.length; index += 1) {
    const previous = new Date(`${uniqueKeys[index - 1]}T00:00:00`);
    const current = new Date(`${uniqueKeys[index]}T00:00:00`);
    const difference =
      (current.getTime() - previous.getTime()) / (1000 * 60 * 60 * 24);

    run = difference === 1 ? run + 1 : 1;
    longest = Math.max(longest, run);
  }

  const completed = new Set(uniqueKeys);
  let current = 0;
  let cursor = new Date();

  while (completed.has(format(cursor, "yyyy-MM-dd"))) {
    current += 1;
    cursor = subDays(cursor, 1);
  }

  if (current === 0) {
    cursor = subDays(new Date(), 1);
    while (completed.has(format(cursor, "yyyy-MM-dd"))) {
      current += 1;
      cursor = subDays(cursor, 1);
    }
  }

  return { current, longest };
};
