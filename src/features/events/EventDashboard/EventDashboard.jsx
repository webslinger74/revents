import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { deleteEvent} from '../eventActions'; 
import LoadingComponent from '../../../app/layout/loadingComponent';
import { firestoreConnect} from 'react-redux-firebase';



const mapState = (state) => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading
})

const actions = {
   deleteEvent  
}

class EventDashboard extends Component {
    
                 
    handleDeleteEvent = (eventId) => () => {
      this.props.deleteEvent(eventId);
    }

  render() {
    const { events, loading } = this.props;
    if(loading) return <LoadingComponent />
    return (
      
        <Grid>
            <Grid.Column width={10}>
                  <EventList deleteEvent={this.handleDeleteEvent}
                  events={events}/>
            </Grid.Column>

            <Grid.Column width={6}>
            
               
            </Grid.Column>
        </Grid>

    
    )
  }
}

export default connect(mapState, actions)(firestoreConnect([{ collection: 'events' }])(EventDashboard));
