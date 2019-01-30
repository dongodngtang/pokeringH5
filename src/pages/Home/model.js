import * as HomeApi from './service';

export default {
  namespace: 'Home',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { statusCode, data } = yield call(HomeApi.demo, {});
      if (statusCode === 200 && data){
        yield put({ type: 'save',
        payload: {
          topData: data.data,
        } });
      }
     
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
