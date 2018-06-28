import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { login } from '../authActions';
//import { closeModal } from '../../modals/modalActions';

const actions = {
  login,
 // closeModal  -- not sure how to add into handlesubmit
}

const LoginForm = ({ login, handleSubmit, closeModal }) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(login)} >
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(null, actions)(reduxForm({form: 'loginForm'})(LoginForm));