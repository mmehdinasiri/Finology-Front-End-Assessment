import { GoogleApiWrapper, Map } from 'google-maps-react'
import React from 'react'
const containerStyle = {
	position: 'relative',
	width: '100%',
	height: '100%'
}
export class MapContainer extends React.Component<{ google: any }> {
	render() {
		return (
			<Map google={this.props.google} containerStyle={containerStyle}></Map>
		)
	}
}
export default GoogleApiWrapper({
	// apiKey: 'AIzaSyD91XteOcGC8I9rksRFdB9S4keVAgVz4JQ'
	apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)
