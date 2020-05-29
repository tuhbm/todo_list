<template>
    <div class="write-container">
        <div class="write-header">
            <div class="item-title">
                <input type="text" placeholder="할일의 제목을 적어주세요.">
            </div>
            <div class="item-important">
                <strong>중요도 선택</strong>
                <select name="important">
                    <option value="1">중요</option>
                    <option value="2">보통</option>
                    <option value="3">여유</option>
                </select>
            </div>
            <div class="item-date">
                <strong>마감날짜</strong>
                <input type="date">
            </div>
        </div>
        <div class="write-content">
            <textarea name="" id="" cols="100" rows="10"></textarea>
        </div>
        <a class="link-full primary" href="">완료</a>
        <router-link class="link-full secondary" to="/">취소</router-link>
    </div>
</template>

<script>
export default {
    name: 'Write'
};
</script>

<style lang="scss">
.write-container{
    margin-top: 3vw;
}
.write-header{
    overflow: hidden;
    border:0.1vw solid #000;

    .item-important, .item-title{
        float: left;
        strong{
            display: block;
        }
        select{
            width:90%;
            height: 2vw;
        }
    }
    .item-date{
        float: right;
        width: 20%;
        strong{
            display: block;
        }
    }
    .item-important{
        width: 20%
    }
    .item-title{
        width: 60%;
        padding: 1vw;
        box-sizing: border-box;
        input{
            width: 100%;
            height: 3vw;
            border:0.1vw solid #ddd;
            padding-left:0.5vw;
            box-sizing: border-box;
        }
    }
}
    .write-content{
        margin-top: 0.5vw;
        textarea {
            width: 100%;
            border:0.1vw solid #000;
            resize: none;
            box-sizing:border-box;
        }
    }
</style>
