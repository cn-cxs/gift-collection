// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday

const birthday = new Date('1996/2/18 0:0:0');
const startday = new Date('2022/11/30 0:0:0');
const now = new Date();
const days1 = getDiffDays(startday, now);
const days2 = getDiffDays(birthday, now);
const ages = getDiffYears(birthday,now);

function getDiffYears(date1,date2) {
    return date2.getFullYear()-date1.getFullYear();
}

function getDiffDays(date1,date2) {
    const date3=date2.getTime()-date1.getTime(); //时间差秒
    //计算出相差天数
    return Math.floor(date3/(24*3600*1000));
}
function isBirthDay(){
    if(birthday.getMonth()==now.getMonth()&&birthday.getDate()==now.getDate()){
        return true;
    }
    return false;
}
// console.log(days1,days2,ages)
const text0 = isBirthDay()?"今天是你"+ages+"岁的生日":"今天是你出生的第"+days2+"天";
const text1 = "第"+days1+"天！";
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我们",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "聪明的萌萌同学",  // 同上...
        text0,
        "这是我们认识的",
        text1,
        // "这两年来，我见过你",
        // "奇怪的样子",
        // "可爱的样子",
        // "生气的样子",
        // "都是我喜欢的样子",
        // "对了，礼物收全了吗？",
        "今年要吃好好的",
        "喂饱饱的",
        "然后才有力气学习哦",
        // "和想我！",
        "生日快乐~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我们": "./imgs/songxinxin.jpeg",
        "聪明的萌萌同学": "./imgs/nothing.jpg",
        text0: "./imgs/shengri.jpeg",
        "这是我们认识的": "./imgs/yangzi.jpeg",
        text1: "./imgs/yangzi.jpeg",
        // "这两年来，我见过你": "./imgs/yangzi.jpeg",
        // "奇怪的样子": "./imgs/nothing.jpg",
        // "可爱的样子": "./imgs/nothing.jpg",
        // "生气的样子": "./imgs/nothing.jpg",
        // "都是我喜欢的样子": "./imgs/nothing.jpg",
        // "对了，礼物收全了吗？": "./imgs/chuo.gif",
        "今年要吃好好的": "./imgs/chihaode.png",
        "喂饱饱的": "./imgs/weibao.jpeg",
        "然后才有力气学习哦": "./imgs/chuo.gif",
        // "和想我！": "./imgs/nothing.jpg",
        "生日快乐~~": "./imgs/nothing.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "上音乐",
        bannar_coming: "搞点颜色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐～",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: '曹童鞋~'
};
