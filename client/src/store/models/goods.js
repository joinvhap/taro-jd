import action from "../../utils/action";

export default {
  namespace: "goods",
  state: {},
  effects: {
    * fetch({ payload }, { all, call, put }) {
      console.log("查询商品详情信息");
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
