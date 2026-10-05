export const WORK_CATEGORIES = ['DOCUMENTARY', 'COMMERCIALS', 'MUSIC'] as const;

export type Category = typeof WORK_CATEGORIES[number];

export function getWorkCategory(value: string | null): Category {
  return WORK_CATEGORIES.find((category) => category === value) ?? 'DOCUMENTARY';
}
