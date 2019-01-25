<template>
    <!--二维码属性-->
        <div class="qrcodeProperty" style="display: none;">
            <div class="propertyTitle">
                <span class="propertyClose">二维码属性</span>
            </div>
            <dl class="paperInterval">
                <dt>数据类型</dt>
                <ul>
                    <li class="isChecked">手工输入</li>
                    <li>递变数据</li>
                    <li>Excel数据</li>
                </ul>
            </dl>
            <dl>
                <dt>当前内容</dt>
                <input id="currentContentQrcode" class="label currentContent" type="text">
            </dl>

            <dl class="printDirection">
                <dt>打印方向</dt>
                <ul>
                    <li class="isChecked zeroDegree">0°</li>
                    <li class="ninetyDegree">90°</li>
                    <li class="oneHuEightyDegree">180°</li>
                    <li class="twoHuSeventyDegree">270°</li>
                </ul>
            </dl>
            <dl>
                <dt>位置大小</dt>
                <button id="qrCodeHorizontalCenter" class="btn">水平位置居中</button>
                <button id="qrCodeVerticalCenter" class="btn">垂直位置居中</button>
            </dl>
            <dl>
                <dt>位置-左</dt>
                <input id="qrCodeLeft" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-上</dt>
                <input id="qrCodeTop" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-宽</dt>
                <input class="label qrcodeWidth" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-高</dt>
                <input class="label qrcodeHeight" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl class="paperInterval">
                <dt>空白区域</dt>
                <ul id="emptySpace">
                    <li class="isChecked">0</li>
                    <li>2</li>
                    <li>4</li>
                </ul>
            </dl>
            <dl class="paperInterval">
                <dt>纠错级别</dt>
                <ul id="errorCorrectionLevel">
                    <li class="isChecked">低</li>
                    <li>中</li>
                    <li>高</li>
                    <li>强</li>
                </ul>
            </dl>
            <dl>
                <dt>参与打印</dt>
                <dd class="selectorSwitch"><img src="images/off.png" alt=""></dd>
            </dl>
        </div>
</template>
