import { memo } from 'react'
interface Props {
  children?: React.ReactNode
}
const Songs: React.FC<Props> = () => {
  return <div>Songs</div>
}

export default memo(Songs)
