import avatarJessica from './assets/images/avatar-jessica.jpeg'
import { Avatar } from './components/Avatar'
import { Link } from './components/Link'
import { Title } from './components/Title'

type TLink = {
  id: number
  name: string
  href: string
}

function App() {
  const links: TLink[] = [
    { id: 1, name: 'GitHub', href: '#' },
    { id: 2, name: 'Frontend Mentor', href: '#' },
    { id: 3, name: 'LinkedIn', href: '#' },
    { id: 4, name: 'Twitter', href: '#' },
    { id: 5, name: 'Instagram', href: '#' },
  ]

  return (
    <main className='mx-6 pt-16 pb-10'>
      <article className='bg-dark-grey py-8 px-6 rounded-lg'>
        <Avatar src={avatarJessica} alt='Jessica Randall' />
        <Title title='Jessica Randall' />
        <p className='text-green-c mb-6 font-semibold text-sm text-center'>
          London, United Kingdom
        </p>
        <p className='text-center text-white mb-6'>
          "Front-end developer and avid reader."
        </p>
        <ul className='flex flex-col gap-y-4'>
          {links.map((link) => (
            <li key={link.id}>
              <Link name={link.name} href={link.href} />
            </li>
          ))}
        </ul>
      </article>
    </main>
  )
}

export default App
