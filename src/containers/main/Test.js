import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {fetchData} from '../../actions/actions';
import {connect} from 'react-redux';

const Test = ({data, loading, fetchDataFromApi}) => {
  useEffect(() => {
    fetchDataFromApi();
  }, []);
  return loading ? (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <Text style={{color: 'white'}}>Loading...</Text>
    </View>
  ) : (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {data.map((item) => (
        <View>
          <Text>{item.data.subreddit}</Text>
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.api.users,
    loading: state.api.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataFromApi: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
