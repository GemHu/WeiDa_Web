<template>
    <!--线条属性-->
        <div class="lineProperty" style="display: none;">
            <div class="propertyTitle">
                <span class="propertyClose">线条属性</span>
            </div>
            <dl class="paperInterval">
                <dt>线条样式</dt>
                <ul>
                    <li id="fullLine" class="isChecked">实线</li>
                    <li id="dashLine">虚线</li>
                </ul>
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
                <button id="lineHorizontalCenter" class="btn centerBtn">水平位置居中</button>
                <button id="lineVerticalCenter" class="btn">垂直位置居中</button>
            </dl>
            <dl>
                <dt>位置-左</dt>
                <input id="lineLeft" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-上</dt>
                <input id="lineTop" class="label" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-宽</dt>
                <input class="label lineWidth" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>位置-高</dt>
                <input class="label lineHeight" type="text">
                <span class="millimeter">毫米</span>
            </dl>
            <dl>
                <dt>参与打印</dt>
                <dd class="selectorSwitch"><img src="images/off.png" alt=""></dd>
            </dl>
        </div>
</template>
