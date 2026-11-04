import { NotFoundPageContent } from '@/pageComponents/notFoundPage'
import { getLanguageFromCookie } from '@/util/LanguageContext/LanguageCookie'
import { get404PageContent } from '@/util/sanity'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { title } from 'process'

export async function generateMetadata() {
  const language = await getLanguageFromCookie()

  if (language == "en") {
    return {
      title: "Page not found | Hulen Bergen",
    }
  } else {
    return {
      title: "Side ikke funnet | Hulen Bergen",
    }
  }

}

export default async function Not_Found() {
  const noPageContentData = await get404PageContent()

  return <NotFoundPageContent {...noPageContentData} />
}

/**
 * Next js use implicit configuration of pages. By exporting a variable named revalidate, we have now switched to incremental static regeneration (ISR)
 * This means that the page will be rebuilt if a request comes in, and the page is more than two minutes old
 */
export const revalidate = 120
