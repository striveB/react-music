import { memo } from 'react'
interface Props {
  children?: React.ReactNode
}
const Template: React.FC<Props> = () => {
  return <div>Template</div>
}

export default memo(Template)
