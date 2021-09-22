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