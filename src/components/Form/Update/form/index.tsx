import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useEffect } from 'react'
import { ITask } from '../../../Tasks/Task/task.type'

const schema = z.object({
  id: z.string(),
  name: z.string().min(4).max(25),
  description: z.string().min(4).max(164),
  completed: z.optional(z.boolean()),
})

type ISchema = z.infer<typeof schema>

function Form({
  onSubmit,
  onCancel,
  task,
}: {
  onSubmit: (data: ISchema) => void
  onCancel: () => void
  task: ITask
}) {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISchema>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    setValue('id', task.id)
    setValue('name', task.name)
    setValue('description', task.description)
  }, [setValue, task])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-[30rem] flex p-5 flex-col gap-3 dark:bg-dark-900 bg-light-900 rounded-b-sm border dark:border-dark-500 border-light-500'
    >
      <input type='hidden' {...register('id')} />
      <div className='w-full flex flex-col'>
        <label className='text-xs font-semibold py-2' htmlFor='name'>
          NAME:
        </label>
        <p className='text-xs text-red-500 font-semibold pb-2'>{errors.name?.message}</p>
        <input
          id='name'
          {...register('name')}
          className='dark:bg-dark-1000 border focus:border-indigo-500 border-light-400 rounded-sm dark:border-dark-500 focus:ring-0'
        />
      </div>
      <div className='w-full flex flex-col'>
        <label className='text-xs font-semibold py-2' htmlFor='description'>
          DESCRIPTION:
        </label>
        <p className='text-xs text-red-500 font-semibold pb-2'>{errors.description?.message}</p>
        <textarea
          rows={6}
          {...register('description')}
          className='dark:bg-dark-1000 border focus:border-indigo-500 rounded-sm border-light-400 dark:border-dark-500 focus:ring-0'
        />
      </div>
      <div className='w-full flex gap-2'>
        <button
          onClick={onCancel}
          className='text-xs bg-light-600 hover:bg-light-700  dark:bg-dark-700 dark:hover:bg-dark-800  w-24 rounded-sm dark:text-white px-5 py-3'
          type='button'
        >
          CANCEL
        </button>
        <button
          className='text-xs bg-indigo-500 hover:bg-indigo-600 w-24 rounded-sm text-white px-5 py-3'
          type='submit'
        >
          UPDATE
        </button>
      </div>
    </form>
  )
}

export default Form
