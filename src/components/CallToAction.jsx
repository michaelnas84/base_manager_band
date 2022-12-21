import { ButtonLink } from '../components/Button'
import { Container } from '../components/Container'
import backgroundImage from '../images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <img
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Start today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It's time to take control of your band. Try it for 7 days for free and feel your life more productive!
          </p>
          <ButtonLink href="/dashboard/web/index_cad_band.php" color="white" className="mt-10">
            Test for 7 days free
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
