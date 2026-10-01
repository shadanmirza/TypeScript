import { useState, type ChangeEvent, type FormEvent } from "react"

type UseFormProps = {
  onSubmit: (values: { name: string 
                       cups: number }) => void
}

export const UseForm = ({ onSubmit }: UseFormProps) => {
  const [name, setName] = useState<string>("second")
  const [cups, setCups] = useState<number>(1)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit({ name, cups });
    setName("")
    setCups(0)
  }

//   function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
//     setName(e.target.value)
//    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">kk do you love me</label>
        <input
          id="name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}} 
        />
        <input
          id="cup"
          value={cups}
        //   90% of input data is always string
          onChange={(e: ChangeEvent<HTMLInputElement>) => {setCups(Number(e.target.value) || 0)}} 
        />
        <button type="submit">Submit Here</button>
    </form>
  )
}

