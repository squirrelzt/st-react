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
    }],
    articleList: [{
        id: 1,
        title: '很多人活在幻想中，等待着有朝一日',
        desc: '把聪明才智放在谋取利益之上 以前我看到有人讨论这么一个问题，在一些时期，是大师迭出的年代，而为什么现在没有大师了呢？大师都去哪了？有人说...',
        imgUrl: 'https://upload.jianshu.io/collections/images/633082/timg_%281%29.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    },{
        id: 2,
        title: '很多人活在幻想中，等待着有朝一日',
        desc: '把聪明才智放在谋取利益之上 以前我看到有人讨论这么一个问题，在一些时期，是大师迭出的年代，而为什么现在没有大师了呢？大师都去哪了？有人说...',
        imgUrl: 'https://upload.jianshu.io/collections/images/633082/timg_%281%29.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {


        default :
            return state;
    }
}
