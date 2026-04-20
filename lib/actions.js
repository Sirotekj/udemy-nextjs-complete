'use server';
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

function isInvalidText(text) {
  return !title || meal.trim() === '';
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  //if (!meal.title || meal.title.trim() === '') {}
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    //throw new Error('Invalid input!');
    return {
      message: 'Invalid input.',
    };
  }
  await saveMeal(meal);
  revalidatePath('/meals'); //druhý argument  = layout + nested pages
  redirect('/meals');
}
