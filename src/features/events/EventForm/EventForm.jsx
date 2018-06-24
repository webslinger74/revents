import React, { Component } from 'react'
import { Segment, Form, Button, Grid, Header} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';
import cuid from 'cuid';
import { reduxForm, Field } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from  '../../../app/common/form/TextArea';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate';
import DateInput from '../../../app/common/form/DateInput';


const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id;

    let event = {}

    if(eventId && state.events.length > 0) {
      event = state.events.filter(event => event.id === eventId)[0];
    }
    return {
      initialValues: event
    }
}

const actions = {
  createEvent,
  updateEvent
}

const validate = combineValidators({
  title: isRequired({message: 'The event title is required'}),
  category: isRequired({message: 'Please provide a category'}),
  description: composeValidators(
    isRequired({message:'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'}
  ))(),
  city:isRequired('city'),
  venue:isRequired('venue')
})






class EventForm extends Component {
   
     
    onFormSubmit = (values) => {
      const { createEvent, updateEvent } = this.props;
      if(this.props.initialValues.id){
        updateEvent(values);
        this.props.history.goBack();
      } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL:'/assets/user/png',
        hostedBy: 'Steven'
      }
       createEvent(newEvent);
       this.props.history.push('/events');
    }}




/*  this function keeps track of changes to inputs inreal time 


    onInputChange = (e) => {
      const newEvent = this.state.event;
      newEvent[e.target.name] = e.target.value;
      this.setState( ({
          event: newEvent
          }
      ))
    }
    
*/

  render() {
      
    const { invalid, submitting, pristine} = this.props;

    return (
            <Grid>
              <Grid.Column width={10}>
              <Segment>
              <Header sub color='teal' content='Event Details'/>
              <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
               <Field name='title' type='text' component={TextInput} placeholder='give your event a name' />
               <Field name='category' type='text' component={TextInput} placeholder='what is your event about?' />
               <Field name='description' rows={3} type='text' component={TextArea} placeholder='Tell us about your event' />
              
              <Header sub color='teal' content='Event Location Details' />
               <Field name='city' type='text' component={TextInput} placeholder='Event City' />
               <Field name='venue' type='text' component={TextInput}  
               placeholder='Event Venue' />
               <Field name='date' type='text' component={DateInput} 
               dateFormat='YYYY/MM/DD HH:mm' timeFormat='HH:mm'
               showTimeSelect
               placeholder='Date and Time of Event' />
               <Button 
               disabled={pristine || invalid || submitting }
               positive  type="submit">
                  Submit
                </Button>

                <Button
                   type="button"
                   onClick={this.props.history.goBack}
                   >Cancel</Button>
              </Form>
            </Segment>

              </Grid.Column>
            </Grid>
                
      
    )
  }
}
export default connect(mapState, actions)(reduxForm({form: 'eventForm', enableReinitialize:true, validate})(EventForm));