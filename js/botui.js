function bot_ui_ini() {
    var botui = new BotUI("hello-mashiro");
    botui.message.add({
        delay: 800,
        content: "Hi, 新来的朋友！"
    }).then(function () {
        botui.message.add({
            delay: 1100,
            content: "这里是 帅me"
        }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "一个害羞的男孩子…"
            }).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{
                        text: "然后呢? 😃",
                        value: "sure"
                    }, {
                        text: "磨磨唧唧！ 🙄",
                        value: "skip"
                    }]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
            botui.message.add({
                delay: 600,
                content: "😘"
            }).then(function () {
                secondpart()
            })
        },
        end = function () {
            botui.message.add({
                delay: 600,
                content: "![...](https://www.yremp.live/images/2019/08/13/0c4154.jpg)"
            })
        },
        secondpart = function () {
            botui.message.add({
                delay: 1500,
                content: "目前是个大学生"
            }).then(function () {
                botui.message.add({
                    delay: 1500,
                    content: "平时可能比较逗比…"
                }).then(function () {
                        botui.message.add({
                            delay: 1500,
                            content: "有时候也喜欢一个人静静的听歌…"
                        }).then(function () {
                            botui.message.add({
                                delay: 1500,
                                content: "学习的专业是计算机相关，偶尔也会学点别的"
                            }).then(function () {
                                botui.message.add({
                                    delay: 1800,
                                    content: "兴趣很广泛"
                                }).then(function () {
                                    botui.action.button({
                                        delay: 1100,
                                        action: [{
                                            text: "为什么叫帅me呢？ 🤔",
                                            value: "why-帅me"
                                        }]
                                    }).then(function (a) {
                                        thirdpart()
                                    })
                                })
                            })
                        })
                    })
                })
        },
        thirdpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "可能是帅吧[remember]"
            }).then(function (a) {
                fourpart()
            })
        },
        fourpart = function () {
            botui.message.add({
                delay: 1500,
                content: "那么请愉快的阅读我的博客吧！😃"
            })
        }
}
