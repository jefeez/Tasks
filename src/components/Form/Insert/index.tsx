import { useDispatch } from 'react-redux'
import Form from './form'
import { useModal } from '../../Modal'
import { ITask } from '../../Tasks/Task/task.type'
import { addTask } from '../../../stores/features/tasksSlice'

export default function Insert() {
  const dispatch = useDispatch()
  const { setIsOpen } = useModal()

  const onSubmit = (data: Omit<ITask, 'id'>) => {
    dispatch(addTask({ ...data, id: '' }))
    setIsOpen(false)
  }

  const onCancel = () => {
    setIsOpen(false)
  }

  return <Form onSubmit={onSubmit} onCancel={onCancel} />
}
