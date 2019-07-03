<template>
    <div class="message-page">
          <p>
                待续费 0
            </p>
            <p>
                短信剩余条数 10条
            </p>
            <p>
                短信提醒使用 20条
            </p>
            <p>
                邮件提醒 20次
            </p>
    </div>
</template>
<style lang="less" scoped>
.message-page{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    margin-top:20px;
    p{
        width: 20%;
        flex: 1;
        background: #fff;
        color:#333;
        line-height: 30px;
        text-indent: 20px;
        margin-left:20px;
        &:last-child{
            margin-right:20px;
        }
    }
}
</style>

