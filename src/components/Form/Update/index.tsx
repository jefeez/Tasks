import { useDispatch } from 'react-redux'
import { ITask } from '../../Tasks/Task/task.type'
import Form from './form'
import { updateTask } from '../../../stores/features/tasksSlice'
import { useModal } from '../../Modal'

export default function Update({ task }: { task: ITask }) {
  const dispatch = useDispatch()
  const { setIsOpen } = useModal()

  const onSubmit = (data: ITask) => {
    dispatch(updateTask(data))
    setIsOpen(false)
  }

  const onCancel = () => {
    setIsOpen(false)
  }

  return <Form onSubmit={onSubmit} task={task} onCancel={onCancel} />
}
