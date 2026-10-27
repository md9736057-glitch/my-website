import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { PlatesGallery } from '@/components/plates-gallery'
import { RetouchingStudio } from '@/components/retouching-studio'
import { Workflow } from '@/components/workflow'
import { CommissionSection } from '@/components/commission-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PlatesGallery />
        <RetouchingStudio />
        <Workflow />
        <CommissionSection />
      </main>
      <SiteFooter />
    </>
  )
}
