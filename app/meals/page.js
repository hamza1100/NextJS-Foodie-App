import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import MealsGridPage from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import MealsLoadingPage from './loading-out';

async function Meals() {
  const meals = await getMeals();

  return <MealsGridPage meals={meals} />
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Declicious meals, created{' '} <span className={classes.highlight}>by you</span></h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
