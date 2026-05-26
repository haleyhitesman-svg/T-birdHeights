import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | T-Bird Heights Student Housing Cedar City"
        description="Contact Stratum Real Estate to schedule a tour or inquire about availability at T-Bird Heights student housing near Southern Utah University."
      />

      <PageHeader
        tag="Get in Touch"
        title="Let's Find Your Room."
        subtitle="Fill out the form below and Stratum Real Estate will get back to you within one business day."
      />

      <section>
        <Contact />
      </section>
    </>
  )
}
