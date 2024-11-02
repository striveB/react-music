import { memo } from 'react'
interface Props {
  children?: React.ReactNode
}
const Download: React.FC<Props> = () => {
  return <div>Download</div>
}

export default memo(Download)
