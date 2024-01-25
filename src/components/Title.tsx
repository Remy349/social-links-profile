type TTitleProps = {
  title: string
}

export const Title = ({ title }: TTitleProps) => {
  return (
    <h1 className='text-white mt-6 mb-2 text-center text-2xl font-bold'>
      {title}
    </h1>
  )
}
