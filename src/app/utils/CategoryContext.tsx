// components/CategorySelector.tsx
"use client";

import { useRouter } from 'next/router';

const CategorySelector = () => {
  const router = useRouter();

  const handleCategoryChange = (category: string) => {
    router.push(`/work/${category}`);
  };

  return (
    <div>
      <button onClick={() => handleCategoryChange('DOCUMENTARY')}>Documentary</button>
      <button onClick={() => handleCategoryChange('COMMERCIALS')}>Commercials</button>
      <button onClick={() => handleCategoryChange('MUSIC')}>Music</button>
    </div>
  );
};

export default CategorySelector;
