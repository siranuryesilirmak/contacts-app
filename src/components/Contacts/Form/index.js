import {useState, useEffect} from 'react'

function Form({addContact, contacts}) {
    const initialFormValues = { fullname: "", phone_number: ""}
    const [form, setForm] = useState(initialFormValues)

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])
    
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault() //formda onsubmit yapıyoruz. ama sayfa hemen tekrar yenilendiği için console da göremiyoruz. sayfa yenilenmesini durdurmak için bu kodu kullanmak zorundayız.
        if (form.fullname ==="" || form.phone_number === "" ) {
            return false
        }
        addContact([...contacts, form])
        console.log(form)
        
    }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input 
        name='fullname' 
        onChange={onChangeInput} 
        placeholder='Full Name'
        value={form.fullname}>
        </input>
      </div>
      <br></br>
      <div>
        <input 
        name='phone_number' 
        onChange={onChangeInput}
        placeholder='Phone Number'
        value={form.phone_number}>
        </input>
      </div>
      <br></br>
      <div>
        <button >Add</button>
      </div>
    </form>
  )
}

export default Form
