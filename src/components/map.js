import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {
    bindActionCreators
} from 'redux'
import { connect } from 'react-redux';
import {
    watchCurrLocation,
    set_curr_region
} from '../actions/locationAction';
import Config from 'react-native-config'
import { styles } from '../assets/map_styles'
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';


class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_region: {
                latitude: this.props.curr_region.latitude,
                longitude: this.props.curr_region.longitude,
                latitudeDelta: this.props.curr_region.latitudeDelta,
                longitudeDelta: this.props.curr_region.longitudeDelta
            },
            origin: {
                latitude: this.props.curr_coordinates.latitude,
                longitude: this.props.curr_coordinates.longitude,
            },
            destination: {
                latitude: this.props.curr_coordinates.latitude + 0.003,
                longitude: this.props.curr_coordinates.longitude + 0.001,
            }
        };
    }

    componentDidMount() {
        this.props.watchCurrLocation();
        // var self = this;
        // setInterval(function() {
        // 	self.setState({
        // 		origin:{
        //             latitude: self.state.origin.latitude + 0.001,
        //             longitude: self.state.origin.longitude + 0.001
        //         }
        // 	});
        // }, 5000);
    }

    onRegionChange(region) {
        console.log(region);
        this.props.set_curr_region(region)
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={
                        this.state.curr_region
                    }
                    onRegionChange={(region) =>
                        this.onRegionChange(region)
                    }
                >
                    <MapViewDirections
                        origin={this.state.origin}
                        destination={this.state.destination}
                        apikey={
                            Config.GOOGLE_MAPS_API_KEY
                        }
                        strokeWidth={3}
                        strokeColor="hotpink"
                    />
                </MapView>
                <TouchableOpacity
                    onPress={()=>{
                        console.log(1);
                        
                        Actions.drawerOpen()
                    }}
                    style={styles.menu}
                >
                    <Icon
                        name="menu"
                        size={30}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {}}
                    style={styles.bookContainer}>
                    <Text style={styles.bookText}>
                        Book
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            watchCurrLocation: watchCurrLocation,
            set_curr_region: set_curr_region
        },
        dispatch
    );
}

const mapStateToProps = state => ({
    curr_coordinates: state.location.curr_coordinates,
    curr_region: state.location.curr_region
});

export default connect(mapStateToProps, matchDispatchToProps)(MapScreen);
