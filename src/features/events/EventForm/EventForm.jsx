import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';


const emptyEvent = {

    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
}

class EventForm extends Component {
    state = {
     event: emptyEvent
    }

    componentDidMount() {
      if(this.props.selectedEvent !== null){
        this.setState({
          event: this.props.selectedEvent
        })
      }
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.selectedEvent !== this.props.selectedEvent){
        this.setState({
          event: nextProps.selectedEvent || emptyEvent
        })
      }
    }


    onFormSubmit = (e) => {
      e.preventDefault();
      const { createEvent, updateEvent } = this.props;
      if(this.state.event.id){
        updateEvent(this.state.event)
      } else {
        createEvent(this.state.event);
    }}

    onInputChange = (e) => {
      const newEvent = this.state.event;
      newEvent[e.target.name] = e.target.value;
      this.setState( ({
          event: newEvent
          }
      ))
    }
    


  render() {
        const { cancel } = this.props;
        const { event } = this.state;
    return (
      <div>
                  <Segment>
                    <Form onSubmit={this.onFormSubmit}>
                      <Form.Field>
                        <label>Event Title</label>
                        <input 
                           name= 'title'
                           value={event.title}
                           placeholder="Event Title"
                           onChange={this.onInputChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input name="date" value={event.date} onChange={this.onInputChange} type="date" placeholder="Event Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input name="city" value={event.city} onChange={this.onInputChange} placeholder="City event is taking place" />
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input name="venue" value={event.venue} onChange={this.onInputChange} placeholder="Enter the Venue of the event" />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input name="hostedBy" value={event.hostedBy} onChange={this.onInputChange} placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <Button 
                          positive
                          type="submit"
                      >
                        Submit
                      </Button>

                      <Button
                         type="button"
                         onClick={ cancel }
                         >Cancel</Button>
                    </Form>
                  </Segment>
      </div>
    )
  }
}
export default EventForm;