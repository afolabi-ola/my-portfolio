export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-background'>
      <h1 className='text-4xl font-bold text-primary'>Contact Me</h1>
      <p className='mt-4 text-lg text-secondary'>
        I would love to hear from you! Feel free to reach out to me via email or
        connect with me on social media.
      </p>

      <div className='mt-4'>
        <a
          href='mailto:afolabiquadri28@gmail.com'
          className='text-blue-500 hover:underline'
        >
          Email Me
        </a>
        <span className='mx-2'>|</span>
        <a
          href='https://www.linkedin.com/in/quadri-afolabi/'
          className='text-blue-500 hover:underline'
        >
          LinkedIn
        </a>
        <span className='mx-2'>|</span>
        <a
          href='https://www.github.com/quadri-afolabi'
          className='text-blue-500 hover:underline'
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
