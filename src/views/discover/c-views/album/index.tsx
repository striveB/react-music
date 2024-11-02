import { memo } from 'react'
interface Props {
  children?: React.ReactNode
}
const Album: React.FC<Props> = () => {
  return <div>Album</div>
}

export default memo(Album)
