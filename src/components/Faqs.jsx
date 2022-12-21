import { Container } from '../components/Container'
import backgroundImage from '../images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Can I suggest new features to suit my band?',
      answer:
        'Yea! Our dev team is 100% open to new suggestions to better serve you.',
    },
    {
      question: 'Can I trust my band data on the platform?',
      answer: 'Certainly! We work with a rigorous encryption process on all data.',
    },
  ],
  [
    {
      question: "Will all of my band's demands be met?",
      answer:
        "We guarantee it! If we don't have native functionality on the platform, we build it!",
    },
    {
      question:
        'Can I expect even more improvements to management?',
      answer:
        "You can sleep and when you wake up, have even more flexibility in the way you manage your band, we've thought of everything!",
    },
  ],
  [
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Certainly! We are completely transparent.',
    },
   {
      question: 'I lost my password, how do I log into my account?',
      answer:
        'We work with the highest level of security, but you can recover your account with a simple step-by-step by verifying your identity via registered email',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <h2 id="faq-title" className="sr-only">
      Common questions
      </h2>
      <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]">
        <img
          src={backgroundImage}
          alt=""
          width={1558}
          height={946}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
          Common questions
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          If you can't find what you're looking for, email our support team!
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
