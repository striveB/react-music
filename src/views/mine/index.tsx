import { memo } from 'react'
interface Props {
  children?: React.ReactNode
}
const Mine: React.FC<Props> = () => {
  return <div>Mine</div>
}

export default memo(Mine)
