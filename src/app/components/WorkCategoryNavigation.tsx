'use client';

import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '../styles/layoutnested.module.scss';
import { WORK_CATEGORIES, getWorkCategory, type Category } from '../utils/workCategories';

export default function WorkCategoryNavigation({ mobile = false }: { mobile?: boolean }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = getWorkCategory(searchParams.get('category'));

  const handleSelect = (category: Category) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('category', category);
    router.push(`/info/work?${params.toString()}`, { scroll: false });
  };

  return (
    <motion.div
      initial={mobile ? { opacity: 0, translateY: 30 } : { opacity: 0, translateX: 30 }}
      animate={mobile ? { opacity: 1, translateY: 0 } : { opacity: 1, translateX: 0 }}
      exit={mobile ? { opacity: 0, translateY: -10 } : { opacity: 0 }}
      className={mobile ? styles.navlistMobile : `${styles.navList} h-[30px] overflow-hidden font-semibold text-lg flex items-start gap-2`}
    >
      {WORK_CATEGORIES.map((category) => (
        <motion.button
          type="button"
          key={category}
          onClick={() => handleSelect(category)}
          aria-pressed={selectedCategory === category}
          className={mobile ? undefined : 'h-[30px] overflow-hidden self-start shrink-0'}
          animate={{ opacity: selectedCategory === category ? 1 : 0.5 }}
        >
          {mobile ? category : (
            <motion.span className="block" whileHover={{ y: -30 }}>
              <span className="flex items-center h-[30px]">{category}</span>
              <span className="flex items-center h-[30px]" aria-hidden="true">{category}</span>
            </motion.span>
          )}
        </motion.button>
      ))}
    </motion.div>
  );
}
