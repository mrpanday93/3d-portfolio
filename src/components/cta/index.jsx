import Link from "next/link";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link href='/contact' className='btn transition ease-in-out delay-150 hover:ring-2 hover:-translate-y-1 hover:scale-103 duration-300'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
