import { memo } from 'react'
interface Props {
  children?: React.ReactNode
}
const Artlist: React.FC<Props> = () => {
  return <div>Artlist</div>
}

export default memo(Artlist)
