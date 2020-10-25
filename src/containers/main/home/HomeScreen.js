import React, {useEffect, useState} from 'react';
import HomeScreenTopics from './topics/HomeScreenTopics';
import {RefreshControl, Text, View, Dimensions, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../../../actions/actions';
import Post from './posts/Post';

const _ItemSeparatorComponent = () => <View style={{height: 7}}></View>;

const renderItem = ({index, item}) => <Post item={item} />;

const HomeScreen = ({fetchDataFromApi, dataJson, loading, error, afterKey}) => {
  useEffect(() => {
    fetchDataFromApi();
  }, [fetchDataFromApi]);

  return (
    <>
      {/*<HomeScreenTopics />*/}
      {error ? (
        <Text style={{alignSelf: 'center'}}>{error.message}</Text>
      ) : (
        <View></View>
      )}

      <FlatList
        refreshControl={
          <RefreshControl
            onRefresh={() => fetchDataFromApi()}
            refreshing={loading}
          />
        }
        data={dataJson}
        renderItem={renderItem}
        ItemSeparatorComponent={_ItemSeparatorComponent}
        removeClippedSubviews={true}
        onEndReached={() => fetchDataFromApi(afterKey, dataJson)}
        onEndReachedThreshold={5}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={2}
        maxToRenderPerBatch={1}
        updateCellsBatchingPeriod={100}
        windowSize={7}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dataJson: state.api.data,
    loading: state.api.loading,
    error: state.api.error,
    afterKey: state.api.after,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataFromApi: (afterKey, dataJson) =>
      dispatch(fetchData(afterKey, dataJson)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
