import Link from "next/link";
import Image from "next/image";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I&apos;m
        <span className='font-semibold mx-2 text-white'>Mohit</span>
        👋
        <br />
        A Software Engineer from India
        <br/>
        <span className="font-normal text-sm">(Please drag mouse or use arrows to navigate.)</span>
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked with different companies <br /> and picked up many skills along the way
        </p>

        <Link href='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <Image src={`assets/icons/arrow.svg`} width={16} height={16} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link href='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <Image src={`assets/icons/arrow.svg`} width={16} height={16} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I&apos;m just a few keystrokes away
      </p>

      <Link href='/contact' className='neo-brutalism-white neo-btn'>
        Let&apos;s talk
        <Image src={`assets/icons/arrow.svg`} width={16} height={16} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
