import { memo } from 'react'
import { queryList } from '../../../../service/modules'
interface Props {
  children?: React.ReactNode
}
const Recommend: React.FC<Props> = () => {
  queryList({
    type: 'recommend',
  }).then(res => {
    console.log(res.data)
  }).catch(err => {
    console.log(err)
  })
  return <div>Recommend</div>
}

export default memo(Recommend)
