import { memo } from 'react'
interface Props {
  children?: React.ReactNode
}
const Focus: React.FC<Props> = () => {
  return <div>Focus</div>
}

export default memo(Focus)
