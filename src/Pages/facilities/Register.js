import React, {useEffect} from 'react';
import { useHistory } from 'react-router';
import { authenticationService } from '../../services/authentication.service';
import Signup from '../../components/Signup/Signup';

const Register = () => {
    const history = useHistory();
    useEffect(() => {
      if (authenticationService.currentUserValue) {
        history.push('/');
      }
    }, [history]);
    return (
      <div>
        <Signup />
      </div>
    );
  };
  
  export default Register;