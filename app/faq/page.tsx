import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-amber-800">Find answers to common questions about Angelic Royalty.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-amber-200 rounded-md px-4">
            <AccordionTrigger className="text-amber-900 font-medium py-4">
              What makes Angelic Royalty different from other luxury fashion houses?
            </AccordionTrigger>
            <AccordionContent className="text-amber-800 pb-4">
              Angelic Royalty is a private luxury fashion house that merges divine essence with material elegance. Our
              approach is rooted in sacred intention, with each piece designed to honor the divine feminine and
              masculine. We maintain exclusivity through our application process for couture pieces and limited
              production of ready-to-wear items, ensuring that each client receives personalized attention and truly
              unique garments.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-amber-200 rounded-md px-4">
            <AccordionTrigger className="text-amber-900 font-medium py-4">
              How does the couture application process work?
            </AccordionTrigger>
            <AccordionContent className="text-amber-800 pb-4">
              Our couture application process begins with the submission of an application form, where you provide
              details about your desired piece, budget, and timeline. Our team reviews each application carefully, and
              if approved, we will contact you to schedule a consultation. During this consultation, we discuss your
              vision in detail and take measurements. A 50% deposit is required to begin the creation process, with the
              remaining balance due before delivery.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-amber-200 rounded-md px-4">
            <AccordionTrigger className="text-amber-900 font-medium py-4">
              Can I purchase ready-to-wear items without an application?
            </AccordionTrigger>
            <AccordionContent className="text-amber-800 pb-4">
              Yes, our ready-to-wear collections for both women and men are available for direct purchase through our
              website. These pieces embody the same sacred intention and divine elegance as our couture line but are
              produced in limited quantities for immediate purchase.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-amber-200 rounded-md px-4">
            <AccordionTrigger className="text-amber-900 font-medium py-4">
              What is the 50% deposit option?
            </AccordionTrigger>
            <AccordionContent className="text-amber-800 pb-4">
              For higher-priced items, we offer a 50% deposit option where you can pay half of the total amount upfront
              and the remaining balance before shipping. This option is available for both couture and select
              ready-to-wear pieces. For couture items, the deposit is required to begin the creation process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-amber-200 rounded-md px-4">
            <AccordionTrigger className="text-amber-900 font-medium py-4">
              How do I access the VIP area?
            </AccordionTrigger>
            <AccordionContent className="text-amber-800 pb-4">
              The VIP area is accessible by invitation only. Existing clients who have purchased couture pieces or
              multiple ready-to-wear items may receive an invitation with a password. If you would like to request VIP
              access, you can submit a request through our VIP Access page, and our team will review your application.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-amber-200 rounded-md px-4">
            <AccordionTrigger className="text-amber-900 font-medium py-4">
              What materials do you use in your creations?
            </AccordionTrigger>
            <AccordionContent className="text-amber-800 pb-4">
              We use only the finest materials sourced from ethical suppliers. Our fabrics include silk, cashmere,
              organic cotton, and other natural fibers. For our couture pieces, we often incorporate gold thread and
              other precious elements. All materials are selected with intention and respect for both the environment
              and the divine essence we aim to embody in our designs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-amber-200 rounded-md px-4">
            <AccordionTrigger className="text-amber-900 font-medium py-4">
              Do you ship internationally?
            </AccordionTrigger>
            <AccordionContent className="text-amber-800 pb-4">
              Yes, we ship to most countries worldwide. Shipping times and costs vary depending on your location. For
              couture pieces, we offer a white-glove delivery service where a member of our team hand-delivers your
              garment and assists with fitting. Please refer to our Shipping & Returns page for detailed information.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border border-amber-200 rounded-md px-4">
            <AccordionTrigger className="text-amber-900 font-medium py-4">What is your return policy?</AccordionTrigger>
            <AccordionContent className="text-amber-800 pb-4">
              Ready-to-wear items may be returned within 14 days of receipt if they are unworn, unwashed, and with all
              original tags attached. Makeup products may be returned within 14 days if unopened and in their original
              packaging. Couture pieces are non-returnable as they are created specifically for you, but we offer
              complimentary alterations within 30 days of delivery. Please see our Shipping & Returns page for complete
              details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="border border-amber-200 rounded-md px-4">
            <AccordionTrigger className="text-amber-900 font-medium py-4">
              How do I care for my Angelic Royalty pieces?
            </AccordionTrigger>
            <AccordionContent className="text-amber-800 pb-4">
              Each item comes with specific care instructions. Generally, we recommend dry cleaning for most garments.
              Store your pieces in a cool, dry place away from direct sunlight. For couture items, we provide a custom
              garment bag designed to protect and preserve the divine essence of your piece.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="border border-amber-200 rounded-md px-4">
            <AccordionTrigger className="text-amber-900 font-medium py-4">Do you offer alterations?</AccordionTrigger>
            <AccordionContent className="text-amber-800 pb-4">
              Yes, we offer alterations for all our pieces. For couture items, we provide complimentary alterations
              within 30 days of delivery. For ready-to-wear items, alterations are available for a fee. Please contact
              our client services team to arrange alterations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-amber-800 mb-6">
            Don't see your question answered here? Please reach out to our client services team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 rounded-md font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
