import { fromJS } from "immutable";

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://upload.jianshu.io/users/upload_avatars/6538610/d168a7be-ec5a-42d9-8e61-d9f6c130b88e?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    },{
        id: 2,
        title: '手绘',
        imgUrl: 'https://upload.jianshu.io/users/upload_avatars/6538610/d168a7be-ec5a-42d9-8e61-d9f6c130b88e?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {


        default :
            return state;
    }
}
