import { memo } from 'react'
interface Props {
  children?: React.ReactNode
}
const Recommend: React.FC<Props> = () => {
  return <div>Recommend</div>
}

export default memo(Recommend)
