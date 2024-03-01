import Form from './form'

export default function Insert() {
  const onSubmit = (data: { name: string; description: string }) => {
    console.log(data)
  }

  const onCancel = () => {
    console.log('OnCancel')
  }

  return <Form onSubmit={onSubmit} onCancel={onCancel} />
}
