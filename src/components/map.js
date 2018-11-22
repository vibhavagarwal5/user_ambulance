import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {
    bindActionCreators
} from 'redux'
import { connect } from 'react-redux';
import {
    watchCurrLocation,
    set_curr_region
} from '../actions/locationAction';
import {
    bookTrip,
    getTrip,
    flipTrip,
    endTrip
} from '../actions/tripAction';
import Config from 'react-native-config'
import { styles } from '../assets/map_styles'
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
var haversine = require('haversine-distance');

class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            origin: {
                latitude: this.props.curr_coordinates.latitude,
                longitude: this.props.curr_coordinates.longitude,
            },
            destination: {
                latitude: this.props.curr_coordinates.latitude,
                longitude: this.props.curr_coordinates.longitude,
            }
        };
    }

    componentDidMount() {
        this.props.watchCurrLocation();
        if(this.props.trip.trip !== null){
            if(this.props.trip.user2hosp){
                this.setState({
                    destination:{
                        latitude: this.props.trip.trip.hospital[0].fields.latitude,
                        longitude: this.props.trip.trip.hospital[0].fields.longitude
                    },
                    origin:{
                        latitude: this.props.curr_coordinates.latitude,
                        longitude: this.props.curr_coordinates.longitude
                    }
                });
            }
            this.handleTrips();
        }
    }

    handleTrips(){
        var self = this;
        var fulltrip = setInterval(function() {
            if(haversine(self.state.origin, self.state.destination) < 30.0 && self.props.trip.user2hosp){
                console.log('inside trip closure');
                clearInterval(fulltrip);
                self.props.endTrip();
                self.setState({
                    destination:{
                        latitude: self.props.curr_coordinates.latitude,
                        longitude: self.props.curr_coordinates.longitude
                    }
                });
            }
            else if(haversine(self.state.origin, self.state.destination) < 30.0 && self.props.trip.amb2user && self.props.trip.trip !== null){
                console.log('inside flip');
                self.props.flipTrip();
                self.setState({
                    destination:{
                        latitude: self.props.trip.trip.hospital[0].fields.latitude,
                        longitude: self.props.trip.trip.hospital[0].fields.longitude
                    },
                    origin:{
                        latitude: self.props.curr_coordinates.latitude,
                        longitude: self.props.curr_coordinates.longitude
                    }
                });
            }
            if(self.props.trip.amb2user && self.props.trip.trip !== null){
                console.log('inside amb2user');
                
                self.props.getTrip(self.props.trip.trip.id).then(()=>{
                    self.setState({
                        origin:{
                            latitude: self.props.trip.trip.ambulance_id[0].fields.latitude,
                            longitude: self.props.trip.trip.ambulance_id[0].fields.longitude
                        }
                    });
                })
            }
            else if(self.props.trip.user2hosp && self.props.trip.trip !== null){
                console.log('inside user2hosp');
                self.props.getTrip(self.props.trip.trip.id).then(()=>{
                    self.setState({
                        origin:{
                            latitude: self.props.trip.trip.ambulance_id[0].fields.latitude,
                            longitude: self.props.trip.trip.ambulance_id[0].fields.longitude
                        }
                    });
                })
                // self.setState({
                //     destination:{
                //         latitude: self.props.curr_coordinates.latitude,
                //         longitude: self.props.curr_coordinates.longitude
                //     }
                // });
            }
            console.log('haversine', haversine(self.state.origin, self.state.destination));
        }, 5000);
    }

    onRegionChange(region) {
        this.props.set_curr_region(region)
    }

    bookTrip(){
        var params={
            patient_id: this.props.login.user.id,
            start_latitude: this.props.curr_coordinates.latitude,
            start_longitude: this.props.curr_coordinates.longitude
        }
        this.props.bookTrip(params).then(()=>{
            this.setState({
                origin:{
                    latitude: this.props.trip.trip.ambulance_id[0].fields.latitude,
                    longitude: this.props.trip.trip.ambulance_id[0].fields.longitude
                },
                destination:{
                    latitude: this.props.curr_coordinates.latitude,
                    longitude: this.props.curr_coordinates.longitude
                }
            });
            this.handleTrips();
        })
    }

    render() {
        console.log(this.state);
        
        return (
            <View style={styles.container}>
                <MapView
                    showCompassOnRotate={false}
                    style={styles.map}
                    initialRegion={
                        this.props.curr_region
                    }
                    onRegionChange={(region) =>
                        this.onRegionChange(region)
                    }
                >
                    {
                        this.props.trip.trip !==null ?
                        <View>
                            <MapViewDirections
                                origin={this.state.origin}
                                destination={this.state.destination}
                                apikey={
                                    Config.GOOGLE_MAPS_API_KEY
                                }
                                strokeWidth={3}
                                strokeColor="skyblue"
                            />
                            <Marker
                                coordinate={this.state.destination}
                                title={'Destination'}
                            />
                            <Marker
                                coordinate={this.state.origin}
                                title={'Origin'}
                            />
                        </View>
                        :
                        <Marker
                            coordinate={this.props.curr_coordinates}
                            title={'Current location'}
                        />
                    }
                </MapView>
                <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.menu}
                >
                    <Icon
                        name="logout"
                        size={30}
                    />
                </TouchableOpacity>
                {
                    this.props.trip.trip===null?
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {this.bookTrip()}}
                        style={styles.bookContainer}>
                        <Text style={styles.bookText}>
                            Book
                        </Text>
                    </TouchableOpacity>
                    :
                    <View style={styles.ambulanceDetails}>
                        <Text style={styles.ambulanceNo}>
                            Ambulance No: {this.props.trip.trip.ambulance_id[0].fields.number_plate}
                        </Text>
                        <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {
                            RNImmediatePhoneCall.immediatePhoneCall(this.props.trip.trip.ambulance_id[0].fields.contact_number);
                        }}
                        style={styles.bookContainer}>
                            <Text style={styles.bookText}>
                                Call the driver
                            </Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            watchCurrLocation: watchCurrLocation,
            set_curr_region: set_curr_region,
            bookTrip: bookTrip,
            getTrip: getTrip,
            flipTrip: flipTrip,
            endTrip: endTrip
        },
        dispatch
    );
}

const mapStateToProps = state => ({
    curr_coordinates: state.location.curr_coordinates,
    curr_region: state.location.curr_region,
    login: state.login,
    trip: state.trip
});

export default connect(mapStateToProps, matchDispatchToProps)(MapScreen);
