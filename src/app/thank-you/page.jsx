import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Thank You!',
  description: 'Thank You for Getting in Touch!',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thank You for Getting in Touch!"
      intro="Thank you so much for reaching out, I really appreciate your interest and I'm really excited to learn more about your project.
      You can expect an email response from me within the next one to two business days regarding the next steps."
    >
      <p className='text-base text-zinc-600 dark:text-zinc-400'>
        If you have any additional questions please feel free to reach out directly to me at <a href="mailto:sary.mony@gmail.com" className='text-zinc-100 underline hover:text-cyan-500'>sary.mony@gmail.com</a>. Looking forward to connecting soon!
      </p>
    </SimpleLayout>
  )
}
