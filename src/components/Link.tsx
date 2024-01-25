type TLinkProps = {
  name: string
  href: string
}

export const Link = ({ name, href }: TLinkProps) => {
  return (
    <a
      className='block py-3 font-semibold text-base bg-grey text-center w-full text-white rounded-lg'
      href={href}
      target='_blank'
    >
      {name}
    </a>
  )
}
