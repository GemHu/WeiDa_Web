<template>
    <!--插入类型-->
    <div class="insertType">
        <dl class="insertList textType">
            <dt><img src="images/text.png" alt=""></dt>
            <dd>文本</dd>
        </dl>
        <dl class="insertList barcodeType">
            <dt><img src="images/barcode.png" alt=""></dt>
            <dd>一维码</dd>
        </dl>
        <dl class="insertList qrcodeType">
            <dt><img src="images/qrcode.png" alt=""></dt>
            <dd>二维码</dd>
        </dl>
        <dl class="insertList imgType">
            <dt><img src="images/picture.png" alt=""></dt>
            <dd>图片</dd>
            <input type="file" id="chooseImg"/>
        </dl>
        <dl class="insertList logoOption">
            <dt><img src="images/logo.png" alt=""></dt>
            <dd>Logo</dd>

            <!--Logo列表-->
            <div id="logoList" style="display: none;">
                <div class="logoListHeader">
                    <span>刷新</span>
                    <h3>Logo列表</h3>
                    <span id="logoListClose">关闭</span>
                </div>
                <div class="logoMain">
                    <!--左边列表名称-->
                    <div class="logoCategory">
                        <!--<dl>-->
                        <!--<dt class="flexibleSymbol">-</dt>-->
                        <!--<dd class="flexible">通用</dd>-->
                        <!--<div class="logoClassify">-->
                        <!--<ul>-->
                        <!--<li class="genericIdentifier pitch">通用标识（<span>51</span>）</li>-->
                        <!--<li class="generalArrow">通用箭头（<span>26</span>）</li>-->
                        <!--<li class="warningMark">警示标识（<span>25</span>）</li>-->
                        <!--<li class="blogroll">友情链接（<span>22</span>）</li>-->
                        <!--</ul>-->
                        <!--</div>-->
                        <!--</dl>-->
                    </div>
                    <!--右边显示图标内容-->
                    <div class="logoImg">
                        <ul>
                            <!--<li><img src="" alt=""></li>-->
                        </ul>
                    </div>
                </div>
                <!--返回顶部-->
                <div class="returnTop" style="display: none;">
                    <p>回顶部</p>
                </div>
            </div>
            <!--Logo列表 end-->
        </dl>
        <dl class="insertList lineType">
            <dt><img src="images/line.png" alt=""></dt>
            <dd>线条</dd>
        </dl>
        <dl class="insertList rectType">
            <dt><img src="images/rectangle.png" alt=""></dt>
            <dd>矩形</dd>
        </dl>
        <dl class="insertList formType">
            <dt><img src="images/form.png" alt=""></dt>
            <dd>表格</dd>
        </dl>
        <dl class="insertList dateType">
            <dt><img src="images/date.png" alt=""></dt>
            <dd>日期</dd>
        </dl>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
