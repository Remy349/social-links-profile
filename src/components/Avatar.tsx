type TAvatarProps = {
  src: string
  alt: string
}

export const Avatar = ({ src, alt }: TAvatarProps) => {
  return (
    <div className='flex place-content-center'>
      <img className='rounded-full w-[6rem] h-[6rem]' src={src} alt={alt} />
    </div>
  )
}
