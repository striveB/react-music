import { memo } from 'react'
interface Props {
  children?: React.ReactNode
}
const Ranking: React.FC<Props> = () => {
  return <div>Ranking</div>
}

export default memo(Ranking)
