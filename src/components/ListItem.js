import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from "./common";
import * as actions from '../actions';

class ListItem extends Component {
    renderDesc() {
        const { item, selectedLibraryId } = this.props;

        if (item.id === selectedLibraryId) {
            return (
                <Text>{item.description}</Text>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.item;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDesc()}
                </View>
            </TouchableWithoutFeedback>
        ); 
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }  
};

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId }; 
};

export default connect(mapStateToProps, actions)(ListItem);