// import { useState } from "react";
import { Form, Link, useSearchParams, useActionData, useNavigation} from "react-router-dom";

const AuthForm = () => {

  const data = useActionData();
  const navigation = useNavigation();
  
  const isSubmitting = navigation.state === 'submitting';

  const [SearchParams] = useSearchParams();
  const isLogin = SearchParams.get('mode') === 'login';

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{isLogin ? 'login' : 'Register yourself'}</h5>
        <hr />
        <ul>
          {data && data.error && Object.values(data.error).map( (err) => <li key={err} style={{color:'red'}}>{err}</li>)}
        </ul>
        {/* below we are using FORM component from react-router, this form component triggers "action" when we click on submit button of from to submit the data, 
        so therefore we will create an action function that will be triggered when submit clicked. (you can find action function in auth.js)*/}
        <Form method="POST">   
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email address</label>
            <input type='email' className='form-control' id='email' aria-describedby='emailHelp' name='email' autoComplete='off'/>
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' className='form-control' id='password' name='password' />
          </div>
          <button disabled={isSubmitting} type='submit' className='btn btn-primary'>{isSubmitting ? 'Submitting' : 'Submit'}</button>
          <div className='mt-4'>
            <Link to={`?mode=${isLogin ? 'singup' : 'login'}`} type='button' role='button' className='btn-link'>
              {isLogin ? 'Need Account?' : 'Already a user?'}
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default AuthForm;
