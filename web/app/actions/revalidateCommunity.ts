'use server'

import { revalidatePath } from 'next/cache'

export async function revalidateCommunityPage() {
  revalidatePath('/community', 'page')
}