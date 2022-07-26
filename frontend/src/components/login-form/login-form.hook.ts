import { useMutation } from "@apollo/client";
import { LOGIN } from "../../api/mutations";
import { IloginFormValues } from "../../types/interfaces";

const useLoginForm = () => {
  const formInitialValues = {
    email: '',
    password: ''
  }

  const [login] = useMutation(LOGIN)

  const handleSubmit = (values:IloginFormValues) => {
    login({
      variables: {
        email: values.email,
        password: values.password
      }
    }).then(res => {
      console.log(res)
    })
  }

  return {
    formInitialValues,
    handleSubmit
  }
}

export default useLoginForm;